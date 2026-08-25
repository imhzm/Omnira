import crypto from 'crypto';

/**
 * طبقة بوابة الدفع — بروتوكول Tranportal (Hosted Checkout).
 * يدعم NeoLeap و Al Rajhi Bank (securepayments.alrajhibank.com.sa).
 *
 * آلية العمل:
 *  1) نبني "trandata": JSON مصفوفة واحدة تحوي بيانات المعاملة (المبلغ،
 *     action=1 شراء، العملة 682 ريال، trackId، روابط الرجوع...) ونشفّره
 *     AES-CBC (PKCS7) بمفتاح البوابة، ثم HEX كبير.
 *  2) نرسل POST بصيغة [{ id, trandata, responseURL, errorURL }] فترجّع
 *     البوابة [{ status:'1', result:'<paymentId>:<paymentUrl>' }].
 *  3) نحوّل العميل إلى paymentUrl (صفحة الدفع المؤمّنة).
 *  4) بعد الدفع تعيد البوابة العميل إلى responseURL/errorURL مع حقل
 *     trandata مُشفَّر — نفك تشفيره ونتحقق من النتيجة وtrackId.
 *
 * اشتقاق المفاتيح:
 *  - إذا وُجد NEOLEAP_IV → AES-256-CBC بـ IV ثابت (بروتوكول الراجحي: PGKEYENCDECIVSPC)
 *  - resourceKey = 32 حرف hex → key = IV = نفس الـ16 بايت (aes-128-cbc)
 *  - resourceKey = نص 16/24/32 حرف → key = النص، IV = أول 16 بايت منه
 */

/** روابط البوابة — قابلة للتجاوز من البيئة (NeoLeap / Al Rajhi يستخدمان نفس البروتوكول) */
export const NEOLEAP_HOSTED_URL =
  process.env.NEOLEAP_HOSTED_URL ||
  'https://securepayments.neoleap.com.sa/pg/payment/hosted.htm';
export const NEOLEAP_TRANPORTAL_URL =
  process.env.NEOLEAP_TRANPORTAL_URL ||
  'https://securepayments.neoleap.com.sa/pg/payment/tranportal.htm';

/** عملة الريال السعودي في بروتوكول البوابات */
export const CURRENCY_SAR = 682;

export type NeoleapAction = 1 | 2 | 3 | 4; // 1 شراء، 2 تفويض، 3 استرداد، 4 إلغاء

export interface NeoleapCredentials {
  tranportalId: string;
  password: string;
  resourceKey: string;
}

function creds(): NeoleapCredentials {
  const tranportalId = process.env.NEOLEAP_TRANPORTAL_ID || '';
  const password = process.env.NEOLEAP_PASSWORD || '';
  const resourceKey = process.env.NEOLEAP_RESOURCE_KEY || '';
  if (!tranportalId || !password || !resourceKey) {
    throw new Error('neoleap_not_configured');
  }
  return { tranportalId, password, resourceKey };
}

export function isNeoleapConfigured(): boolean {
  return Boolean(
    process.env.NEOLEAP_TRANPORTAL_ID &&
      process.env.NEOLEAP_PASSWORD &&
      process.env.NEOLEAP_RESOURCE_KEY,
  );
}

/* ------------------------------ التشفير ------------------------------ */

interface DerivedKey {
  alg: string;
  key: Buffer;
  iv: Buffer;
}

function derive(resKey: string): DerivedKey {
  // بروتوكول الراجحي / NeoLeap: مفتاح 32 بايت نصي + IV ثابت (PGKEYENCDECIVSPC) → AES-256-CBC
  const customIv = process.env.NEOLEAP_IV || 'PGKEYENCDECIVSPC';
  const raw = Buffer.from(resKey, 'utf8');
  if (raw.length === 32) {
    const iv = Buffer.from(customIv, 'utf8');
    return { alg: 'aes-256-cbc', key: raw, iv };
  }
  if (process.env.NEOLEAP_IV) {
    const iv = Buffer.from(process.env.NEOLEAP_IV, 'utf8');
    return { alg: `aes-${raw.length * 8}-cbc`, key: raw, iv };
  }
  // fallback: 32 حرف hex = مفتاح 16 بايت → key = IV (بيئات الاختبار القديمة)
  if (/^[0-9a-fA-F]{32}$/.test(resKey)) {
    const key = Buffer.from(resKey, 'hex');
    return { alg: 'aes-128-cbc', key, iv: key };
  }
  if (raw.length === 16 || raw.length === 24) {
    return { alg: `aes-${raw.length * 8}-cbc`, key: raw, iv: raw.subarray(0, 16) };
  }
  throw new Error('unsupported_resource_key');
}

function cipherFor(resKey: string, decipher = false): crypto.Cipher | crypto.Decipher {
  const { alg, key, iv } = derive(resKey);
  return decipher
    ? crypto.createDecipheriv(alg, key, iv) // autoPadding=true (PKCS7)
    : crypto.createCipheriv(alg, key, iv);
}

/** trandata → JSON مصفوفة واحدة → AES-CBC/PKCS7 → UPPERCASE HEX */
export function encryptTrandata(payload: Record<string, unknown>, c: NeoleapCredentials): string {
  const cipher = cipherFor(c.resourceKey);
  const enc = Buffer.concat([
    cipher.update(JSON.stringify([payload]), 'utf8'),
    cipher.final(),
  ]);
  return enc.toString('hex').toUpperCase();
}

/** عكس العملية عند استلام trandata من البوابة */
export function decryptTrandata(hexData: string, c: NeoleapCredentials): string {
  const decipher = cipherFor(c.resourceKey, true);
  const dec = Buffer.concat([decipher.update(Buffer.from(hexData.trim(), 'hex')), decipher.final()]);
  return dec.toString('utf8');
}

/* --------------------------- إنشاء الدفع --------------------------- */

export interface HostedCheckoutInput {
  amountSar: number;
  trackId: string;
  responseUrl: string;
  errorUrl: string;
  lang?: 'ar' | 'en';
  udf1?: string;
  udf2?: string;
  udf3?: string;
  udf4?: string;
  udf5?: string;
}

export interface HostedCheckoutResult {
  ok: boolean;
  paymentId?: string;
  paymentUrl?: string;
  rawStatus?: string;
  error?: string;
}

/** يطلب من البوابة paymentId ورابط دفع مؤمّن للمعاملة */
export async function createHostedCheckout(input: HostedCheckoutInput): Promise<HostedCheckoutResult> {
  let c: NeoleapCredentials;
  try {
    c = creds();
  } catch {
    return { ok: false, error: 'neoleap_not_configured' };
  }

  const amt = input.amountSar.toFixed(2);
  const trandata = encryptTrandata(
    {
      amt,
      action: String(1 satisfies NeoleapAction),
      password: c.password,
      id: c.tranportalId,
      currencyCode: String(CURRENCY_SAR),
      trackId: input.trackId,
      responseURL: input.responseUrl,
      errorURL: input.errorUrl,
      langid: input.lang ?? 'ar',
      udf1: input.udf1 ?? '',
      udf2: input.udf2 ?? '',
      udf3: input.udf3 ?? '',
      udf4: input.udf4 ?? '',
      udf5: input.udf5 ?? '',
    },
    c,
  );

  const body = [
    {
      id: c.tranportalId,
      trandata,
      responseURL: input.responseUrl,
      errorURL: input.errorUrl,
    },
  ];

  const targetUrl = process.env.NEOLEAP_HOSTED_URL || NEOLEAP_HOSTED_URL;

  let res: Response;
  try {
    res = await fetch(targetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(20_000),
    });
  } catch (e) {
    return { ok: false, error: `gateway_unreachable: ${String(e).slice(0, 120)}` };
  }

  const text = await res.text().catch(() => '');
  try {
    const parsed = JSON.parse(text);
    const first = Array.isArray(parsed) ? parsed[0] : parsed;
    const status = String(first?.status ?? '');
    const result = String(first?.result ?? '');
    if (status === '1' && result.includes(':')) {
      const idx = result.indexOf(':');
      return {
        ok: true,
        paymentId: result.slice(0, idx),
        paymentUrl: result.slice(idx + 1),
        rawStatus: status,
      };
    }
    const errText = first?.errorText || first?.error || status || text.slice(0, 300);
    console.error('[neoleap:hosted] Gateway rejected:', text);
    return { ok: false, error: 'gateway_rejected', rawStatus: errText };
  } catch {
    // بعض بيئات الاختبار ترجع نصًا مباشرًا "paymentId:url"
    const m = text.trim().match(/^([^:\s]+):(https?:\/\/.+)$/i);
    if (m) return { ok: true, paymentId: m[1], paymentUrl: m[2] };
    return { ok: false, error: 'invalid_gateway_response', rawStatus: `${res.status} ${text.slice(0, 200)}` };
  }
}

/* -------------------------- قراءة النتيجة -------------------------- */

export interface CallbackResult {
  success: boolean;
  trackId?: string;
  paymentId?: string;
  auth?: string;
  ref?: string;
  amount?: string;
  rawResult?: string;
}

const SUCCESS_RESULTS = new Set(['CAPTURED', 'APPROVED', 'SUCCESS']);

/** يفك trandata الوارد في POST البوابة ويستخرج النتيجة */
export function parseCallbackTrandata(trandataHex: string): CallbackResult {
  let c: NeoleapCredentials;
  try {
    c = creds();
  } catch {
    return { success: false, rawResult: 'not_configured' };
  }
  try {
    const json = decryptTrandata(trandataHex, c);
    let arr: unknown;
    try {
      arr = JSON.parse(json);
    } catch {
      // بعض البيئات ترسل urlencoded key=value&...
      arr = [Object.fromEntries(new URLSearchParams(json))];
    }
    const rec = (Array.isArray(arr) ? arr[0] : arr) as Record<string, string> | undefined;
    if (!rec || typeof rec !== 'object') return { success: false };
    const rawResult = String(rec.result ?? rec.status ?? '');
    return {
      success: SUCCESS_RESULTS.has(rawResult.trim().toUpperCase()),
      trackId: rec.trackId,
      paymentId: rec.paymentid ?? rec.paymentId,
      auth: rec.auth,
      ref: rec.ref,
      amount: rec.amt,
      rawResult,
    };
  } catch (e) {
    return { success: false, rawResult: `decrypt_failed: ${String(e).slice(0, 80)}` };
  }
}
