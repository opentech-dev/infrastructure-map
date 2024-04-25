import useLanguage from "@/hooks/use-language";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetFiltersQuery } from "../api";
import { useSignals } from "@preact/signals-react/runtime";
import { baseUrl, centerOfMd } from "@/lib/config";
import { FilterItemsView } from "../api/types";
import { useMap } from "react-leaflet";
import * as L from "leaflet";
import {
  decodeDelimitedArray,
  encodeDelimitedArray,
} from "serialize-query-params";
import useQueryParams from "@/hooks/use-query-params";
import { ICON_TEMPLATES, createMarker } from "@/lib/create-custom-icon";

export type ForwRefHandle = {
  setStyle: (e: L.LeafletMouseEvent) => void;
};

const useCategoryDescription = () => {
  useSignals();
  const features = useRef<L.FeatureGroup>(null);
  const { language } = useLanguage();
  const [params] = useSearchParams();
  const [selectedItem, setSelectedItem] = useState<FilterItemsView | null>(
    null
  );

  const map = useMap();

  const activeParam = params.get("layer") || "roads";

  const activeCategory = params.get("category");

  const [activeCategories = []] = useQueryParams("category", {
    decode: (value) => decodeDelimitedArray(value, ","),
    encode: (value: string[]) => encodeDelimitedArray(value, ","),
  });

  const { data } = useGetFiltersQuery(
    {
      locale: language.value,
      slug: activeParam,
    },
    { skip: !activeParam }
  );

  useEffect(() => {
    return () => {
      setSelectedItem(null);
      map.flyTo(centerOfMd, 7);
    };
  }, [activeParam]);

  useEffect(() => {
    setSelectedItem(null);
  }, [language.value]);

  const handleBack = () => {
    if (selectedItem) {
      setSelectedItem(null);
      features.current?.clearLayers();
      data?.data?.forEach((filter) => {
        if (
          activeCategories &&
          activeCategories.length > 0 &&
          !activeCategories.includes(filter.attributes.name)
        )
          return;

        (filter.attributes?.filter_items?.data || []).forEach((filterItem) => {
          L.geoJSON(filterItem.attributes.geojson, {
            onEachFeature: (_, layer) => {
              if (
                (layer as L.CircleMarker)?.feature?.properties?.shape ===
                "CircleMarker"
              ) {
                layer = new L.CircleMarker(
                  (layer as L.CircleMarker)
                    .feature!.geometry.coordinates.slice()
                    .reverse() as L.LatLngExpression,
                  {
                    radius: (layer as L.CircleMarker).feature!.properties
                      .radius,
                    ...(layer as L.CircleMarker).feature?.properties?.style,
                  }
                );
                (layer as L.CircleMarker & { data: FilterItemsView }).data =
                  filterItem;
                layer.addTo(features.current!);
                return;
              } else if (
                (layer as L.Circle).feature?.properties?.shape === "Circle"
              ) {
                layer = new L.Circle(
                  (layer as L.Circle)
                    .feature!.geometry.coordinates.slice()
                    .reverse() as L.LatLngExpression,
                  {
                    radius: (layer as L.Circle).feature?.properties.radius,
                    ...(layer as L.Circle)?.feature?.properties?.style,
                  }
                );
                (layer as L.Circle & { data: FilterItemsView }).data =
                  filterItem;
                layer.addTo(features.current!);
                return;
              }
              if (layer instanceof L.Marker) {
                if (
                  layer.feature?.properties?.shape === "Marker" &&
                  (filterItem.attributes.marker_icon?.data?.attributes?.url ||
                    filter.attributes.icon?.data?.attributes?.url)
                ) {
                  if (layer?.feature?.geometry?.coordinates) {
                    const marker = createMarker(
                      L.latLng(
                        layer.feature.geometry.coordinates[0],
                        layer.feature.geometry.coordinates[1]
                      ),
                      ICON_TEMPLATES.default({
                        color: filter.attributes.color || "#cccccc",
                        src:
                          baseUrl +
                          (filterItem.attributes.marker_icon.data.attributes
                            .url ||
                            filter.attributes.icon?.data?.attributes?.url),
                        label: filterItem.attributes.label,
                      }),
                      "bg-red-500 rounded-full flex justify-center items-center"
                    );

                    if (marker) {
                      // marker.addTo(ref.current!);
                      layer.setIcon(marker.getIcon());
                    }

                    // features.current?.addLayer(layer);
                  }
                }
              }
              (layer as L.Layer & { data: FilterItemsView }).data = filterItem;
            },
            style: function (featureObject) {
              return featureObject?.properties?.style;
            },
          }).addTo(features.current!);
        });
      });
    }
    map.flyTo(centerOfMd, 7);
  };

  const handleItemClick = (
    item: FilterItemsView
    // index = -1
  ) => {
    setSelectedItem(item);

    if (item.attributes.allow_actions) {
      // features.current?.setStyle({ opacity: 0.4 });

      // features.current?.eachLayer((layer) => {
      //   (layer as L.FeatureGroup).eachLayer((childLayer) => {
      //     if (childLayer instanceof L.Marker) {
      //       childLayer.setOpacity(0.4);
      //     } else {
      //       (childLayer as L.FeatureGroup).setStyle({ opacity: 0.4 });
      //     }
      //   });
      // });

      // if (index >= 0) {
      features.current?.eachLayer((layer) => {
        (layer as L.FeatureGroup).eachLayer((childLayer) => {
          if (
            (childLayer as L.Layer & { data: FilterItemsView }).data.id ===
            item.id
          ) {
            if (childLayer instanceof L.Marker) {
              childLayer.setOpacity(1);
              map.fitBounds(childLayer.getLatLng().toBounds(1));
            } else {
              (childLayer as L.FeatureGroup).setStyle({ opacity: 1 });
              map.flyToBounds((childLayer as L.FeatureGroup).getBounds());
            }
          } else {
            if (childLayer instanceof L.Marker) {
              childLayer.setOpacity(0.4);
            } else {
              (childLayer as L.FeatureGroup)?.setStyle({ opacity: 0.4 });
            }
          }
        });
      });
      // }
    }
  };

  useEffect(() => {
    if (data?.data) {
      if ((features.current?.getLayers?.() || []).length > 0) {
        features.current?.clearLayers();
      }

      data.data?.forEach((filter) => {
        if (
          activeCategories &&
          activeCategories.length > 0 &&
          !activeCategories.includes(filter.attributes.name)
        )
          return;

        (filter.attributes?.filter_items?.data || []).forEach((filterItem) => {
          L.geoJSON(filterItem.attributes.geojson, {
            onEachFeature: (_, layer) => {
              if (
                (layer as L.CircleMarker)?.feature?.properties?.shape ===
                "CircleMarker"
              ) {
                layer = new L.CircleMarker(
                  (layer as L.CircleMarker)
                    .feature!.geometry.coordinates.slice()
                    .reverse() as L.LatLngExpression,
                  {
                    radius: (layer as L.CircleMarker).feature!.properties
                      .radius,
                    ...(layer as L.CircleMarker).feature?.properties?.style,
                  }
                );
                (layer as L.CircleMarker & { data: FilterItemsView }).data =
                  filterItem;
                layer.addTo(features.current!);
                return;
              } else if (
                (layer as L.Circle).feature?.properties?.shape === "Circle"
              ) {
                layer = new L.Circle(
                  (layer as L.Circle)
                    .feature!.geometry.coordinates.slice()
                    .reverse() as L.LatLngExpression,
                  {
                    radius: (layer as L.Circle).feature?.properties.radius,
                    ...(layer as L.Circle)?.feature?.properties?.style,
                  }
                );
                (layer as L.Circle & { data: FilterItemsView }).data =
                  filterItem;
                layer.addTo(features.current!);
                return;
              }
              if (layer instanceof L.Marker) {
                if (
                  layer.feature?.properties?.shape === "Marker" &&
                  (filterItem.attributes.marker_icon?.data?.attributes?.url ||
                    filter.attributes.icon?.data?.attributes?.url)
                ) {
                  if (layer?.feature?.geometry?.coordinates) {
                    const marker = createMarker(
                      L.latLng(
                        layer.feature.geometry.coordinates[0],
                        layer.feature.geometry.coordinates[1]
                      ),
                      ICON_TEMPLATES.default({
                        color: filter.attributes.color || "#cccccc",
                        src:
                          baseUrl +
                          (filterItem.attributes.marker_icon.data.attributes
                            .url ||
                            filter.attributes.icon?.data?.attributes?.url),
                        label: filterItem.attributes.label,
                      }),
                      `rounded-full flex justify-center items-center`
                    );

                    if (marker) {
                      // marker.addTo(ref.current!);
                      layer.setIcon(marker.getIcon());
                    }

                    // features.current?.addLayer(layer);
                  }
                }
              }
              (layer as L.Layer & { data: FilterItemsView }).data = filterItem;

              features.current?.addLayer(layer);
            },
            style: function (featureObject) {
              return featureObject?.properties?.style;
            },
          });
        });
      });
    }
  }, [data?.data, activeCategory]);

  const eventHandlers = {
    click: (e: L.LeafletMouseEvent) => {
      handleItemClick(e.sourceTarget.data);
      // if (e.sourceTarget.data.allow_actions) {
      //   if (e.sourceTarget instanceof L.Marker) {
      //     e.sourceTarget.setOpacity(1);
      //     map.fitBounds(e.sourceTarget.getLatLng().toBounds(1));
      //   } else {
      //     e.sourceTarget.setStyle({ opacity: 1 });
      //     map.fitBounds(e.sourceTarget.getBounds());
      //   }
      // }
    },
  };

  return {
    eventHandlers,
    handleBack,
    selectedItem,
    handleItemClick,
    ref: features,
    data,
    activeParam,
    activeCategories,
  };
};

export default useCategoryDescription;
