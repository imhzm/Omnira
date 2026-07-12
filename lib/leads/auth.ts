import crypto from 'crypto';
import { cookies } from 'next/headers';

/**
 * مصادقة الداشبورد — كوكي جلسة موقّعة بـHMAC (بدون أي اعتماديات خارجية).
 * كلها تعمل في Node runtime (route handlers + server components).
 */

export const SESSION_COOKIE = 'omnira_admin';
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 أيام

function secret(): string {
  return process.env.LEADS_SESSION_SECRET || 'omnira-valet-dev-secret-change-me';
}

function b64url(buf: Buffer | string): string {
  return Buffer.from(buf).toString('base64url');
}

function sign(payload: string): string {
  return crypto.createHmac('sha256', secret()).update(payload).digest('base64url');
}

/** ينشئ توكن جلسة موقّع مع تاريخ انتهاء */
export function issueSession(): string {
  const body = b64url(JSON.stringify({ exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS }));
  return `${body}.${sign(body)}`;
}

/** يتحقق من صحة التوكن (توقيع + انتهاء) بمقارنة زمن-ثابت */
export function verifySession(token: string | undefined): boolean {
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [body, sig] = parts;
  const expected = sign(body);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;
  try {
    const { exp } = JSON.parse(Buffer.from(body, 'base64url').toString());
    return typeof exp === 'number' && exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

/** مقارنة كلمة المرور بزمن-ثابت */
export function checkPassword(input: string): boolean {
  const expected = process.env.LEADS_DASHBOARD_PASSWORD;
  if (!expected) return false; // لا يُسمح بالدخول ما لم تُضبط كلمة المرور
  const a = Buffer.from(String(input));
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export const sessionCookieOptions = {
  httpOnly: true as const,
  secure: true as const,
  sameSite: 'lax' as const,
  path: '/',
  maxAge: SESSION_TTL_SECONDS,
};

/** حارس للاستخدام داخل route handlers/مكونات الخادم */
export function isAuthed(): boolean {
  return verifySession(cookies().get(SESSION_COOKIE)?.value);
}
