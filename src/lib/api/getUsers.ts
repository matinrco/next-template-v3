import { useQuery } from "@tanstack/react-query";
import { getCachedQueryClient } from "./config/queryClient";
import { GetUsersReq, GetUsersRes } from "./types";

const queryKey = ["get-users"];

const queryFn = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return (await res.json()) as GetUsersRes;
};

export const useGetUsersQuery = (req: GetUsersReq | void) =>
    useQuery({
        queryKey,
        queryFn,
    });

export const prefetchGetUsers = () => {
    return getCachedQueryClient().prefetchQuery({ queryKey, queryFn });
};
