"use client";

import { isRtlLang } from "rtl-detect";
import { createI18nClient } from "next-international/client";
import { localeEntries, defaultLocale } from "@/lib/locales";

export const {
    useI18n,
    useScopedI18n,
    I18nProviderClient,
    useChangeLocale,
    useCurrentLocale,
} = createI18nClient(localeEntries);

export const useDirection = (): { direction: "rtl" | "ltr" } => {
    const currentLocale = useCurrentLocale();
    const selectedLocale = currentLocale || defaultLocale;

    return isRtlLang(selectedLocale)
        ? { direction: "rtl" }
        : { direction: "ltr" };
};
