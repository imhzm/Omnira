import { NextResponse } from 'next/server';
import type { NextRequest, NextFetchEvent } from 'next/server';
import { CacheablePageType, applyCacheStrategy, getPageTypeFromPath } from './lib/cache-strategy';

/**
 * وظيفة الـ Middleware - تعالج كل طلب قبل وصوله للخادم
 * تستخدم للتخزين المؤقت وتعزيز الأمان
 */
export async function middleware(request: NextRequest, event: NextFetchEvent) {
  // إعداد الاستجابة الأولية
  const response = NextResponse.next();

  // إضافة رؤوس الأمان الأساسية
  addSecurityHeaders(response);
  
  // تطبيق استراتيجية التخزين المؤقت فقط لطلبات GET العامة
  if (request.method === 'GET' && !request.cookies.has('auth')) {
    const url = new URL(request.url);
    const pageType = getPageTypeFromPath(url.pathname);
    
    return applyCacheStrategy(response, pageType);
  }
  
  return response;
}

/**
 * إضافة رؤوس الأمان للاستجابة
 */
function addSecurityHeaders(response: NextResponse): void {
  // منع التحميل في إطار (لمنع هجمات clickjacking)
  response.headers.set('X-Frame-Options', 'DENY');
  
  // منع تخمين نوع MIME
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  // تفعيل الحماية ضد هجمات XSS في المتصفحات الحديثة
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // توجيه المتصفح لاستخدام HTTPS فقط
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );
  
  // التحكم في مصادر المحتوى (CSP) لزيادة الأمان
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "img-src 'self' data: https://i.vimeocdn.com https://images.unsplash.com https://cdn.pixabay.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "connect-src 'self' https://www.google-analytics.com; " +
    "media-src 'self' https://player.vimeo.com; " +
    "frame-src 'self' https://player.vimeo.com;"
  );
  
  // التحكم في سياسة الإحالة
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // منع الوصول إلى ملفات حساسة
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none');
  
  // منع تخزين المحتوى الحساس في cache المتصفح
  response.headers.set('Cache-Control-Private-Headers', 'Set-Cookie, Authorization');
  
  // إعلام المتصفح بنوع المحتوى
  response.headers.set('X-Content-Type-Options', 'nosniff');
}

/**
 * تحديد المسارات التي سيتم تطبيق الـ Middleware عليها
 * في حالتنا، سنطبقه على كل المسارات إلا المستثناة
 */
export const config = {
  // تطبيق على كل المسارات ما عدا المستثناة
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     * - robots.txt, sitemap.xml (SEO files)
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico|public|robots.txt|sitemap.xml).*)',
  ],
};
