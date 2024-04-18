import { reduxAPI } from "@/store/api";
import {
  FiltersData,
  GlobalLayerData,
  InfrastructuresData,
  LayoutData,
  MapConfiguration,
  TopFiltersData,
} from "./types";
import i18n from "@/lib/i18";
import queryString from "query-string";
import { uniqBy } from "lodash";

export const mapAPI = reduxAPI.injectEndpoints({
  endpoints: (builder) => ({
    getMapConfiguration: builder.query<MapConfiguration, void>({
      query() {
        return {
          url: "map-configuration",
        };
      },
      transformResponse: (result: any) => result?.data,
      providesTags: ["GET_MAP_CONFIGURATION"],
    }),
    updateMapConfiguration: builder.mutation<
      MapConfiguration,
      Partial<MapConfiguration["attributes"]>
    >({
      query(body) {
        return {
          url: "map-configuration",
          method: "PUT",
          body: { data: body },
        };
      },
    }),
    getLayoutData: builder.query<LayoutData, string>({
      query(locale: string) {
        return {
          url: "layout",
          params: { locale, populate: "*" },
        };
      },
      transformResponse: (result: any, _, locale) => {
        const res: LayoutData = result.data;

        i18n.addResources(locale, "translation", {
          "footer.title": res.attributes.footer,
          "footer.logo": res.attributes.footer_logo.data?.attributes?.url,
          "header.title": res.attributes.header_title,
          "header.logo": res.attributes.header_logo?.data?.attributes?.url,
        });
        return res;
      },
      providesTags: ["GET_MAP_CONFIGURATION"],
    }),
    getGlobalTiles: builder.query<GlobalLayerData, void>({
      query() {
        return {
          url: "global-layers",
        };
      },
      providesTags: [],
    }),
    getInfrastructures: builder.query<InfrastructuresData, string>({
      query(locale) {
        return {
          url: "infrastructures",
          params: { locale, populate: "*", sort: "order:asc" },
        };
      },
      transformResponse: (result: InfrastructuresData, _, locale) => {
        i18n.addResources(
          locale,
          "translation",
          result.data
            .map((menuItem) => ({
              [`infrastructure.id_${menuItem.attributes.slug}`]:
                menuItem.attributes.name,
            }))
            .reduce((acc, curr) => Object.assign(acc, curr), {})
        );
        return result;
      },
      providesTags: [],
    }),
    getFilters: builder.query<FiltersData, { locale: string; slug: string }>({
      query({ locale, slug }) {
        return {
          url:
            `filters?filters[infrastructure][slug]=${slug}&` +
            queryString.stringify(
              {
                locale,
                populate: ["icon", "filter_items", "filter_items.images"],
              },
              { arrayFormat: "none" }
            ),
        };
      },
      transformResponse: (result: FiltersData, _, { locale }) => {
        let translations = {};

        (result.data || []).forEach((filter) => {
          Object.assign(translations, {
            [`filter.id_${filter.id}`]: filter.attributes.name,
          });
          if (filter.attributes?.filter_items?.data) {
            filter.attributes.filter_items.data.forEach((filterItem) => {
              Object.assign(translations, {
                [`filter_item_title.id_${filterItem.id}`]:
                  filterItem.attributes.name,
                [`filter_item_description.id_${filterItem.id}`]:
                  filterItem.attributes.description,
              });
            });
          }
        });

        i18n.addResources(locale, "translation", translations);

        return result;
      },
      providesTags: [],
    }),
    getTopFilters: builder.query<
      TopFiltersData,
      {
        locale: string;
        categories: string[];
        slugs: string[];
        infrastructure: string;
      }
    >({
      query({ locale, categories, slugs, infrastructure }) {
        const slugsQs = slugs
          .map((slug) => `filters[top_filter][slug]=${slug}`)
          .join("&");

        const categorieQs =
          categories
            .map((category) => `filters[filter][name]=${category}`)
            .join("&") + "&";
        return {
          url:
            `top-filter-items?${categorieQs}${slugsQs}&filters[top_filter][infrastructure][slug]=${infrastructure}&` +
            queryString.stringify(
              {
                locale,
                populate: ["top_filter", "top_filter.icon"],
              },
              { arrayFormat: "none" }
            ),
        };
      },
      transformResponse: (result: TopFiltersData, _, { locale }) => {
        let translations = {};

        const uniqueFilters = uniqBy(
          result.data.map((item) => item.attributes.top_filter.data),
          (item) => item.attributes.slug
        );

        (uniqueFilters || []).forEach((topFilter) => {
          Object.assign(translations, {
            [`top_filter.id_${topFilter.id}`]: topFilter.attributes.name,
          });
        });

        i18n.addResources(locale, "translation", translations);

        return { ...result, uniqueFilters };
      },
      providesTags: [],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetMapConfigurationQuery,
  useGetLayoutDataQuery,
  useGetGlobalTilesQuery,
  useGetInfrastructuresQuery,
  useGetFiltersQuery,
  useUpdateMapConfigurationMutation,
  useGetTopFiltersQuery,
} = mapAPI;
