import { i18nRouter } from 'next-i18n-router';
import { NextRequest } from 'next/server';

import { i18nConfigRouter } from './app/_lib/i18n/i18nConfig';

export function proxy(request: NextRequest) {
  return i18nRouter(request, i18nConfigRouter);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|mock-articles.json).*)",
  ],
};
