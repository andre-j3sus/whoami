import { ui, defaultLang, showDefaultLang } from "./ui";
import type en from "./en";

/** Supported locale codes. */
export type Locale = keyof typeof ui;

/** All supported locales as an array. */
export const locales = Object.keys(ui) as Locale[];

/**
 * A translation key resolved at render time via `t()`.
 * Use this in data interfaces to document that the field stores a key, not content.
 */
export type TranslationKey = string;

/* -- URL helpers --------------------------------------------------------- */

/** Extract the locale from a URL pathname (e.g. `/pt/about` -> `"pt"`). */
export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Locale;
  return defaultLang;
}

/**
 * Strip the locale prefix from a pathname.
 *
 * `/pt/about` -> `/about`
 * `/about`    -> `/about`
 */
export function stripLocale(pathname: string, lang: Locale): string {
  if (lang !== defaultLang && pathname.startsWith(`/${lang}`)) {
    return pathname.slice(lang.length + 1) || "/";
  }
  return pathname;
}

/** Return a function that prefixes a base path with the given locale. */
export function useTranslatedPath(lang: Locale) {
  return function translatePath(path: string, l: string = lang): string {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

/* -- Translation helpers ------------------------------------------------- */

/**
 * Return a `t()` function that resolves translation keys for the given locale.
 *
 * Accepts both typed UI keys and dynamic data keys (strings stored in data files).
 * Falls back: locale -> defaultLang -> raw key (makes missing translations visible).
 */
export function useTranslations(lang: Locale) {
  return function t(key: keyof typeof en | (string & {})): string {
    const translations = ui[lang] as Record<string, string>;
    const defaults = ui[defaultLang] as Record<string, string>;
    return translations[key] ?? defaults[key] ?? key;
  };
}

/* -- Static path generation ---------------------------------------------- */

/**
 * Locale paths for `getStaticPaths()` in `[...locale]` pages.
 *
 * Usage:
 * ```ts
 * export { getLocalePaths as getStaticPaths } from "@/i18n/utils";
 * ```
 */
export function getLocalePaths() {
  return [
    { params: { locale: undefined } },
    { params: { locale: "pt" } },
  ];
}

/* -- Date / formatting helpers ------------------------------------------- */

/** Map a Locale to a BCP 47 tag for `Intl` APIs. */
export function getDateLocale(lang: Locale): string {
  return lang === "pt" ? "pt-PT" : "en-US";
}

/** Map a Locale to an HTML `lang` attribute value. */
export function getHtmlLang(lang: Locale): string {
  return lang === "pt" ? "pt-PT" : "en";
}

/* -- Blog content helpers ------------------------------------------------ */

/**
 * Get the base slug from a blog post ID.
 *
 * Content entries in `src/content/blog/en/my-post.md` have ID `en/my-post`.
 * This strips the locale prefix to return just `my-post`.
 */
export function getBlogPostSlug(postId: string): string {
  const parts = postId.split("/");
  return parts.length > 1 ? parts.slice(1).join("/") : postId;
}

/** Infer the locale of a blog post from its content entry ID. */
export function getPostLang(postId: string): Locale {
  const lang = postId.split("/")[0];
  return lang in ui ? (lang as Locale) : defaultLang;
}
