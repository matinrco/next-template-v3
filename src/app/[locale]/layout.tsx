import type { Metadata } from "next";
import { ColorSchemeScript } from "@mantine/core";
import { getDirection } from "@/lib/hooks/I18n/direction/server";
import {
    getCurrentLocale,
    getScopedI18n,
    getStaticParams,
} from "@/lib/hooks/I18n/server";
import { Providers } from "@/lib/components/Providers";
import "./globals.css";

export const generateMetadata = async (): Promise<Metadata> => {
    const scopedT = await getScopedI18n("root.layout");
    return {
        title: scopedT("title"),
        description: scopedT("description"),
    };
};

export const generateStaticParams = () => {
    return getStaticParams();
};

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
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
