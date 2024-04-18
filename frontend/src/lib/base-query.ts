import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { baseUrl, strapiToken } from "./config";

const baseQuery = fetchBaseQuery({
  baseUrl: `${baseUrl}/api`,
  credentials: "include",
  prepareHeaders: (headers) => {
    headers.set("accept", `application/json`);

    // If we have a token set in state, let's assume that we should be passing it.
    if (strapiToken) {
      headers.set("authorization", `Bearer ${strapiToken}`);
    }

    return headers;
  },
});

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export default customFetchBase;
