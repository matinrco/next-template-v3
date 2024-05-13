import { getScopedI18n } from "@/lib/hooks/I18n/server";

export const NotFound = async () => {
    const scopedT = await getScopedI18n("notFound");
    return <div>{scopedT("message")}</div>;
};
