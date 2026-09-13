import { defineConfig } from 'next-i18next';

export const i18nConfig = defineConfig({
  supportedLngs: ["be", "en", "ru"],
  fallbackLng: "be",
  defaultNS: "common",
  localeInPath: true,
});

export const i18nConfigRouter = {
  locales: ["be", "en", "ru"],
  defaultLocale: "be",
  prefixDefault: false,
};
