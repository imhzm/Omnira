import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OMNIRA - أومنيرا | خدمات صف السيارات الاحترافية',
    short_name: 'OMNIRA',
    description: 'أومنيرا - شركة سعودية رائدة في خدمات صف السيارات وإدارة المواقف الذكية',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#D4AF37',
    orientation: 'portrait',
    lang: 'ar',
    dir: 'rtl',
    categories: ['business', 'lifestyle', 'utilities'],
  };
}
