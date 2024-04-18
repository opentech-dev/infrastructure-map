import { reduxAPI } from "@/store/api";
import { Locale } from "../types";

export const sharedAPI = reduxAPI.injectEndpoints({
  endpoints: (builder) => ({
    getLocales: builder.query<Locale[], void>({
      query() {
        return {
          url: "i18n/locales",
        };
      },
      providesTags: ["GET_LOCALES"],
      extraOptions: { maxRetries: 5 },
    }),
  }),
  overrideExisting: true,
});

export const { useGetLocalesQuery } = sharedAPI;
