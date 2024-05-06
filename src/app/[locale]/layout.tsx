import type { Metadata } from "next";
import { I18nProviderClient } from "@/lib/hooks/I18n/client";
import { getDirection } from "@/lib/hooks/I18n/direction/server";
import {
    getCurrentLocale,
    getScopedI18n,
    getStaticParams,
} from "@/lib/hooks/I18n/server";
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
            <body>
                <I18nProviderClient locale={locale}>
                    {children}
                </I18nProviderClient>
            </body>
        </html>
    );
};

export default Layout;
