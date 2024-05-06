import {
    createI18nServer,
    setStaticParamsLocale,
} from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
    createI18nServer({
        en: () => import("@/lib/locales/en"),
        fa: () => import("@/lib/locales/fa"),
    });

export { setStaticParamsLocale };
