import { useQuery } from "@tanstack/react-query";
import { getCachedQueryClient } from "./config/queryClient";
import { GetPostsReq, GetPostsRes } from "./types";

const queryKey = ["get-posts"];

const queryFn = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return (await res.json()) as GetPostsRes;
};

export const useGetPostsQuery = (req: GetPostsReq | void) =>
    useQuery({
        queryKey,
        queryFn,
    });

export const prefetchGetPosts = () => {
    return getCachedQueryClient().prefetchQuery({ queryKey, queryFn });
};
