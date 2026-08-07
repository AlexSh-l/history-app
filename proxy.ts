import { i18nRouter } from 'next-i18n-router';
import { createProxy } from 'next-i18next/proxy';
import { NextRequest, NextResponse } from 'next/server';

import { i18nConfig, i18nConfigRouter } from './app/_lib/i18n/i18nConfig';

// const i18nProxy = createProxy(i18nConfig);

export function proxy(request: NextRequest) {
  // const { pathname } = request.nextUrl;

  // const segments = pathname.split("/");
  // const potentialLocale = segments[1];

  // console.log("hello", !i18nConfigRouter.locales.includes(potentialLocale));
  // if (!i18nConfigRouter.locales.includes(potentialLocale)) {
  //   const remainingPath = "/" + segments.slice(2).join("/");
  //   const redirectUrl = new URL(remainingPath, request.url);

  //   return NextResponse.redirect(redirectUrl);
  // }

  return i18nRouter(request, i18nConfigRouter);
  // return i18nProxy(request);
}

export const config = {
  // matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|mock-articles.json).*)",
  ],
};
