import { getScopedI18n, setStaticParamsLocale } from "@/lib/hooks/I18n/server";

const Page = async ({ params: { locale } }: { params: { locale: string } }) => {
    setStaticParamsLocale(locale); // needed for static generation
    const scopedT = await getScopedI18n("root.page");

    return <p>{scopedT("title")}</p>;
};

export default Page;
