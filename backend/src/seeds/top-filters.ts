import { Strapi } from "@strapi/strapi";

import * as m3_compliant from "./assets/geojson/roads/m3-compliant.json";
import * as m3_compliant_2 from "./assets/geojson/roads/m3-compliant-2.json";
import * as chisinauRingSectionOne from "./assets/geojson/roads/chisinau-ring-road-section-one.json";
import _ from "lodash";

const tentCompliantEN = [
  {
    name: "TEN-T COMPLIANT",
    slug: "compliant",
    color: "#fbbf24",
    locale: "en",
    publishedAt: Date.now(),
  },
];

const tentCompliantRO = [
  {
    name: "CORESPUNDE",
    slug: "compliant",
    color: "#fbbf24",
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const tentTopFilterFeatures = [m3_compliant, m3_compliant_2]
  .map((gJson) => {
    gJson.features.forEach((feature) =>
      Object.assign(feature.properties, {
        style: { color: "#fbbf24", weight: 6 },
      })
    );
    return gJson;
  })
  .map((item) => item.features[0]);

const tentTopFilterData = {
  type: "FeatureCollection",
  features: tentTopFilterFeatures,
};

const ringOneSectionData = [_.cloneDeep(chisinauRingSectionOne)].map(
  (gJson) => {
    gJson.features.forEach((feature) => {
      let copyFeat = _.cloneDeep(feature);
      Object.assign(copyFeat.properties, {
        style: { color: "#fbbf24", weight: 6 },
      });
      feature.properties = copyFeat.properties;
    });
    return gJson;
  }
);

const tentCompliantItemsEN = [
  {
    name: "ten-t compliant",
    geojson: tentTopFilterData as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "section one compliant",
    geojson: ringOneSectionData[0] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const tentCompliantItemsRO = [
  {
    name: "ten-t corespunde",
    geojson: tentTopFilterData as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "sectiunea care corespunde",
    geojson: ringOneSectionData[0] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

type FilterItem = {
  id: string | number;
};

type Infrastructures = {
  engInfrastructures: FilterItem[];
  roInfrastructures: FilterItem[];
};

export const setTopFilterItems = async (
  strapi: Strapi,
  infrastructures: Infrastructures | null,
  roads: {
    roadsEn: FilterItem[];
    roadsRo: FilterItem[];
  }
) => {
  const topFiltersCount = await strapi.entityService.count(
    "api::top-filter.top-filter"
  );

  if (!topFiltersCount) {
    // top filter
    const tentCompliantEn = await Promise.all(
      tentCompliantEN.map((item, i) =>
        strapi.entityService.create("api::top-filter.top-filter", {
          data: {
            ...item,
            infrastructure: infrastructures.engInfrastructures[0].id,
          },
          populate: ["infrastructure"],
        })
      )
    );

    const tentCompliantRo = await Promise.all(
      tentCompliantRO.map((item, i) =>
        strapi.entityService.create("api::top-filter.top-filter", {
          data: {
            ...item,
            infrastructure: infrastructures.roInfrastructures[0].id,
            localizations: [tentCompliantEn[i].id],
          },
          populate: ["localizations", "infrastructure"],
        })
      )
    );
    //

    // top filter items
    const tentCompliantFiltersEn = await Promise.all(
      tentCompliantItemsEN.map((item, i) =>
        strapi.entityService.create("api::top-filter-item.top-filter-item", {
          data: {
            ...item,
            filter: roads.roadsEn[i].id,
            top_filter: tentCompliantEn[0].id,
          },
          populate: ["top_filter"],
        })
      )
    );

    const tentCompliantFiltersRo = await Promise.all(
      tentCompliantItemsRO.map((item, i) =>
        strapi.entityService.create("api::top-filter-item.top-filter-item", {
          data: {
            ...item,
            top_filter: tentCompliantRo[0].id,
            filter: roads.roadsRo[i].id,
            localizations: [tentCompliantFiltersEn[i].id],
          },
          populate: ["localizations", "top_filter"],
        })
      )
    );
    //
  }
};
