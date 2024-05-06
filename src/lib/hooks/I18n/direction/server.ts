import { isRtlLang } from "rtl-detect";
import { getCurrentLocale } from "@/lib/hooks/I18n/server";
import { getLocales } from "@/lib/hooks/I18n/locales/server";

export const getDirection = (): { direction: "rtl" | "ltr" } => {
    const defaultLocale = getLocales().locales[0];
    const currentLocale = getCurrentLocale();
    const selectedLocale = currentLocale || defaultLocale;

    return isRtlLang(selectedLocale)
        ? { direction: "rtl" }
        : { direction: "ltr" };
};
