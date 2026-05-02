import en from "./en";
import pt from "./pt";

export const languages: Record<string, string> = {
  en: "English",
  pt: "Português",
};

export const defaultLang = "en";

export const showDefaultLang = false;

export const ui = { en, pt } as const;
