import {
  decodeDelimitedArray,
  encodeDelimitedArray,
} from "serialize-query-params";

import useQueryParams from "@/hooks/use-query-params";
import { baseUrl } from "@/lib/config";
import { useGetTopFiltersQuery } from "../api";
import useLanguage from "@/hooks/use-language";
import { TopFilterView, TopFiltersData } from "../api/types";
import { isEmpty, isEqual, sortBy } from "lodash";
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import * as L from "leaflet";
import { ICON_TEMPLATES, createMarker } from "@/lib/create-custom-icon";
import { useMap } from "react-leaflet";

const useFilters = () => {
  const { language } = useLanguage();
  const features = useRef<L.FeatureGroup>(null);
  const map = useMap();

  map.on("overlayadd", () => {
    if (features.current) {
      features.current.bringToFront();
    }
  });

  const [params] = useSearchParams();
  const activeParam = params.get("layer") || "roads";

  const [activeFilters = [], setFilters] = useQueryParams("filter", {
    decode: (value) => decodeDelimitedArray(value, ","),
    encode: (value: string[]) => encodeDelimitedArray(value, ","),
  });

  const [activeCategories = []] = useQueryParams("category", {
    decode: (value) => decodeDelimitedArray(value, ","),
    encode: (value: string[]) => encodeDelimitedArray(value, ","),
  });

  const handleClick = (filter: string) => {
    if (!allFilters.includes(filter)) return;
    if (activeFilters?.includes(filter)) {
      setFilters(
        (activeFilters as string[]).filter(
          (item) => (item as string) !== filter
        )
      );
    } else {
      setFilters([...((activeFilters as string[]) ?? []), filter]);
    }
  };

  const { data } = useGetTopFiltersQuery({
    locale: language.value,
    categories: (activeCategories || []) as string[],
    slugs: (activeFilters || []) as string[],
    infrastructure: activeParam,
  });

  const uniqueFilters =
    (
      data as unknown as TopFiltersData & {
        uniqueFilters: TopFilterView["attributes"]["top_filter"]["data"][];
      }
    )?.uniqueFilters || [];

  const allFilters = uniqueFilters.map((item) => item.attributes.slug);

  const isSelectedAll = isEqual(sortBy(allFilters), sortBy(activeFilters));

  const isFilled = (filter: string) => {
    if (isSelectedAll) return true;
    if (!activeFilters || isEmpty(activeFilters)) return false;

    return activeFilters?.includes(filter);
  };

  useEffect(() => {
    if (data?.data) {
      if ((features.current?.getLayers?.() || []).length > 0) {
        features.current?.clearLayers();
      }

      (data.data || []).forEach((topFilter) => {
        if (
          isEmpty(activeFilters || []) ||
          !(activeFilters || []).includes(
            topFilter.attributes.top_filter.data.attributes.slug
          )
        )
          return;

        L.geoJSON(topFilter.attributes.geojson, {
          onEachFeature: (_, layer) => {
            if (layer instanceof L.Marker) {
              if (
                layer.feature?.properties?.shape === "Marker" &&
                topFilter.attributes.top_filter.data.attributes.icon?.data
                  ?.attributes?.url
              ) {
                if (layer?.feature?.geometry?.coordinates) {
                  const marker = createMarker(
                    L.latLng(
                      layer.feature.geometry.coordinates[0],
                      layer.feature.geometry.coordinates[1]
                    ),
                    ICON_TEMPLATES.default({
                      color:
                        topFilter.attributes.top_filter.data.attributes.color ||
                        "#cccccc",
                      src:
                        baseUrl +
                        topFilter.attributes.top_filter.data.attributes.icon
                          .data.attributes.url,
                    }),
                    `rounded-full flex justify-center items-center`
                  );

                  if (marker) {
                    layer.setIcon(marker.getIcon());
                  }
                }
              }
            }
          },
          style: function (featureObject) {
            return featureObject?.properties?.style;
          },
        }).addTo(features.current!);
      });
    }
  }, [data?.data]);

  return { ref: features, isFilled, uniqueFilters, handleClick };
};

export default useFilters;
