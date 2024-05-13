import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/lib/locales";

const I18nMiddleware = createI18nMiddleware({
    locales,
    defaultLocale,
});

export const middleware = (request: NextRequest) => I18nMiddleware(request);

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
