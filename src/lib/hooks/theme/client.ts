"use client";

import { createTheme } from "@mantine/core";
import { Inter, Vazirmatn } from "next/font/google";
import { useDirection } from "@/lib/hooks/I18n/direction/client";

const inter = Inter({
    subsets: ["latin", "latin-ext"],
    display: "swap",
});

const vazirmatn = Vazirmatn({
    subsets: ["latin", "latin-ext", "arabic"],
    display: "swap",
});

export const useCreateTheme = () => {
    const { direction } = useDirection();

    return {
        theme: createTheme({
            fontFamily: (() => {
                switch (direction) {
                    case "ltr":
                        return inter.style.fontFamily;
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
