"use client";

import { useChangeLanguage, useT } from 'next-i18next/client';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { i18nConfigRouter } from '@/app/_lib/i18n/i18nConfig';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const { i18n } = useTranslation();

  const currentLocale =
    (params.locale as string) || i18nConfigRouter.defaultLocale;

  const handleLanguageChange = (newLocale: string) => {
    if (!pathname) return;

    let newPath = pathname;

    if (i18n.changeLanguage) {
      i18n.changeLanguage(newLocale);
    }

    i18nConfigRouter.locales.forEach((locale) => {
      if (pathname.startsWith(`/${locale}/`)) {
        newPath = pathname.replace(`/${locale}/`, "/");
      } else if (pathname === `/${locale}`) {
        newPath = "/";
      }
    });

    newPath = `/${newLocale}${newPath === "/" ? "" : newPath}`;
    newPath = newPath.replace(/\/+/g, "/");

    router.push(newPath);
    router.refresh();
  };

  return (
    <select
      value={currentLocale}
      onChange={(e) => handleLanguageChange(e.target.value)}
      className="p-2 border rounded bg-gray-700/40"
    >
      <option value="be">Беларуская (/be/...)</option>
      <option value="en">English (/en/...)</option>
      <option value="ru">Русский (/ru/...)</option>
    </select>
  );
}
