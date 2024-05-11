import { isRtlLang } from "rtl-detect";
import {
    createI18nServer,
    setStaticParamsLocale,
} from "next-international/server";
import { localeEntries, defaultLocale } from "@/lib/locales";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
    createI18nServer(localeEntries);

export { setStaticParamsLocale };

export const getDirection = (): { direction: "rtl" | "ltr" } => {
    const currentLocale = getCurrentLocale();
    const selectedLocale = currentLocale || defaultLocale;

    return isRtlLang(selectedLocale)
        ? { direction: "rtl" }
        : { direction: "ltr" };
};
