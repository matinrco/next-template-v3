export const locales = ["en", "fa"] as const;
export const defaultLocale = locales[0];

export const localeEntries = {
    en: () => import("./en"),
    fa: () => import("./fa"),
};
