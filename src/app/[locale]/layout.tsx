import { PropsWithChildren } from "react";
import { ColorSchemeScript } from "@mantine/core";
import {
    getCurrentLocale,
    getDirection,
    getStaticParams,
} from "@/lib/hooks/I18n/server";
import { Providers } from "@/lib/components/Providers";
import "@/lib/globals.css";

export const generateStaticParams = () => {
    return getStaticParams();
};

const Layout = ({ children }: PropsWithChildren) => {
    const { direction } = getDirection();
    const locale = getCurrentLocale();

    return (
        <html lang={locale} dir={direction}>
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
};

export default Layout;
