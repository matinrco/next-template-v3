"use client";

import { PropsWithChildren } from "react";
import { DirectionProvider, MantineProvider } from "@mantine/core";
import { useCreateTheme } from "@/lib/hooks/theme/client";
import { I18nProviderClient, useCurrentLocale } from "@/lib/hooks/I18n/client";

export const Providers = ({ children }: PropsWithChildren) => {
    const locale = useCurrentLocale();
    const { theme } = useCreateTheme();

    return (
        <I18nProviderClient locale={locale}>
            <DirectionProvider>
                <MantineProvider theme={theme}>{children}</MantineProvider>
            </DirectionProvider>
        </I18nProviderClient>
    );
};
