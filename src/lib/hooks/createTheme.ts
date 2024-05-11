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
             * sample custom colors.
             * override or extend default theme colors.
             * to apply TS types, check additional.d.ts in project root.
             */
            // colors: {
            //     brand: [
            //         "#7AD1DD",
            //         "#5FCCDB",
            //         "#44CADC",
            //         "#2AC9DE",
            //         "#1AC2D9",
            //         "#11B7CD",
            //         "#09ADC3",
            //         "#0E99AC",
            //         "#128797",
            //         "#147885",
            //     ],
            // },
            /**
             * sample custom theme attributes.
             * define custom theme parameters here.
             * to apply TS types, check additional.d.ts in project root.
             */
            // other: {
            //     customProperty: "sample string",
            // },

            /**
             * other theme override here
             */
        }),
    };
};
