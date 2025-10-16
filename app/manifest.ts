import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OMNIRA - أومنيرا | خدمات صف السيارات الاحترافية',
    short_name: 'OMNIRA',
    description: 'أومنيرا - شركة سعودية رائدة في خدمات صف السيارات وإدارة المواقف الذكية',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#7FA08E',
    orientation: 'portrait',
    lang: 'ar',
    dir: 'rtl',
    categories: ['business', 'lifestyle', 'utilities'],
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
