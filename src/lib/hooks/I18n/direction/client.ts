import { isRtlLang } from "rtl-detect";
import { useCurrentLocale } from "@/lib/hooks/I18n/client";
import { useLocales } from "@/lib/hooks/I18n/locales/client";

export const useDirection = (): { direction: "rtl" | "ltr" } => {
    const defaultLocale = useLocales().locales[0];
    const currentLocale = useCurrentLocale();
    const selectedLocale = currentLocale || defaultLocale;

    return isRtlLang(selectedLocale)
        ? { direction: "rtl" }
        : { direction: "ltr" };
};
