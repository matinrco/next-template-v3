"use client";

import { PropsWithChildren, useState } from "react";
import { DirectionProvider, MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { queryClient } from "@/lib/api/config/queryClient";
import { useCreateTheme } from "@/lib/hooks/createTheme";
import { I18nProviderClient, useCurrentLocale } from "@/lib/hooks/I18n/client";

export const Providers = ({ children }: PropsWithChildren) => {
    const [client] = useState(queryClient);
    const locale = useCurrentLocale();
    const { theme } = useCreateTheme();

    return (
        <I18nProviderClient locale={locale}>
            <QueryClientProvider client={client}>
                <ReactQueryStreamedHydration>
                    <DirectionProvider>
                        <MantineProvider theme={theme}>
                            {children}
                        </MantineProvider>
                    </DirectionProvider>
                </ReactQueryStreamedHydration>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </I18nProviderClient>
    );
};
