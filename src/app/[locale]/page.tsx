import type { Metadata } from "next";
import { setStaticParamsLocale, getScopedI18n } from "@/lib/hooks/I18n/server";
import { Root } from "@/lib/containers/Root";

export const generateMetadata = async (): Promise<Metadata> => {
    const scopedT = await getScopedI18n("root");
    return {
        title: scopedT("title"),
        description: scopedT("description"),
    };
};

const Page = async ({ params: { locale } }: { params: { locale: string } }) => {
    setStaticParamsLocale(locale); // needed for static generation

    return <Root />;
};

export default Page;
