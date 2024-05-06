import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";
import { getLocales } from "@/lib/hooks/I18n/locales/server";

const { locales } = getLocales();

const I18nMiddleware = createI18nMiddleware({
    locales,
    defaultLocale: locales[0],
});

export const middleware = (request: NextRequest) => I18nMiddleware(request);

export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
