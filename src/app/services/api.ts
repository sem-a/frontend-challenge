import { fetchBaseQuery, retry, createApi } from "@reduxjs/toolkit/query/react";
import { PATHS } from "../../paths";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: `${PATHS.api}`,
  prepareHeaders(headers, { getState }) {
    const apiKey =
      "live_7t9t0kVC26RtpNYqppZ5F462Gkof9KOU94Ai1WJWbU9wtNEvfl7iRjDv1es4nEVr";

    if (apiKey) {
      headers.set("x-api-key", apiKey);
    }
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
