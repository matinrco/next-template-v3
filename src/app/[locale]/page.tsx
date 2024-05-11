import { setStaticParamsLocale } from "@/lib/hooks/I18n/server";
import { Root } from "@/lib/containers/Root";

const Page = async ({ params: { locale } }: { params: { locale: string } }) => {
    setStaticParamsLocale(locale); // needed for static generation

    return <Root />;
};

export default Page;
