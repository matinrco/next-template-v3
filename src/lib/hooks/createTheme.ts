"use client";

import { createTheme } from "@mantine/core";
import { useDirection } from "@/lib/hooks/I18n/client";
import { useFontVazirmatn } from "@/lib/hooks/fontVazirmatn";
import { useFontOpensans } from "@/lib/hooks/fontOpensans";

export const useCreateTheme = () => {
    const { direction } = useDirection();
    const { vazirmatn } = useFontVazirmatn();
    const { opensans } = useFontOpensans();

    return {
        theme: createTheme({
            fontFamily: (() => {
                switch (direction) {
                    case "ltr":
                        return opensans.style.fontFamily;
                    case "rtl":
                        return vazirmatn.style.fontFamily;
                }
            })(),

            /**
             * other theme override here
             */
        }),
    };
};
