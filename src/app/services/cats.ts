import { Cat } from "../../types";
import { api } from "./api";

export const catsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCats: builder.query<Cat[], void>({
            query: () => ({
                url: "/search?limit=100",
                method: "GET",
            }),
        }),
    }),
});

export const {
    useGetCatsQuery
} = catsApi;