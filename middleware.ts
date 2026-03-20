import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/',
    '/(en|nl|es)/:path*',
    '/((?!api|_next|_vercel|static|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
