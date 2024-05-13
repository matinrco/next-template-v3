import type { Metadata } from "next";
import { setStaticParamsLocale, getScopedI18n } from "@/lib/hooks/I18n/server";
import { notFound } from "next/navigation";

export const generateMetadata = async (): Promise<Metadata> => {
    const scopedT = await getScopedI18n("notFound");
    return {
        title: scopedT("title"),
        description: scopedT("description"),
    };
};

const Page = ({ params: { locale } }: { params: { locale: string } }) => {
    setStaticParamsLocale(locale); // needed for static generation
    notFound();
};

export default Page;
