import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";

export const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: Infinity } },
});

export const getCachedQueryClient = cache(() => queryClient);
