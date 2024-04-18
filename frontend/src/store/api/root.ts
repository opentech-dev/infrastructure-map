import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "@/lib/base-query";

export const reduxAPI = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["GET_LOCALES", "GET_MAP_CONFIGURATION"],
  endpoints: () => ({}),
});

export const APIMiddleware = reduxAPI.middleware;
