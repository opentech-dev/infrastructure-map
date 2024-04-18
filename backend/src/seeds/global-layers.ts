import { Strapi } from "@strapi/strapi";
import * as moldovaRegions from "./assets/geojson/countries/moldova/moldova-regions.json";
import * as ukraine from "./assets/geojson/countries/ukraine.json";
import * as romania from "./assets/geojson/countries/romania.json";
import * as blackSea from "./assets/geojson/seas/black-sea.json";

export const setGlobalLayers = async (strapi: Strapi) => {
  const layersCount = await strapi.entityService.count(
    "api::global-layer.global-layer"
  );

  const countriesData = [ukraine as typeof romania, romania, blackSea].map(
    (gJson) => {
      gJson.features.forEach((feature) =>
        Object.assign(feature.properties, {
          style: {
            fill: true,
            stroke: true,
            color: "#91b0e4",
            fillColor: "#64748b",
            fillOpacity: 0.3,
            weight: 1,
          },
        })
      );
      return gJson;
    }
  );

  const moldovaData = [moldovaRegions].map((gJson) => {
    gJson.features.forEach((feature) =>
      Object.assign(feature.properties, {
        style: {
          fill: true,
          color: "#91b0e4",
          fillColor: "#93c5fd",
          fillOpacity: 0.3,
          weight: 1,
        },
      })
    );
    return gJson;
  });

  if (!layersCount) {
    await strapi.entityService.create("api::global-layer.global-layer", {
      data: {
        geojson: countriesData[0] as any,
        publishedAt: Date.now(),
      },
    });

    await strapi.entityService.create("api::global-layer.global-layer", {
      data: {
        geojson: countriesData[1] as any,
        publishedAt: Date.now(),
      },
    });

    await strapi.entityService.create("api::global-layer.global-layer", {
      data: {
        geojson: countriesData[2] as any,
        publishedAt: Date.now(),
      },
    });

    await strapi.entityService.create("api::global-layer.global-layer", {
      data: {
        geojson: moldovaData[0] as any,
        publishedAt: Date.now(),
      },
    });
  }
};
