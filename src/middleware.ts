import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/lib/locales";

const I18nMiddleware = createI18nMiddleware({
    locales,
    defaultLocale,
});

export const middleware = (request: NextRequest) => I18nMiddleware(request);

export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
