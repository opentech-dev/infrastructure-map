import { Strapi } from "@strapi/strapi";

type Infrastructures = {
  engInfrastructures: {
    id: number | string;
  }[];
  roInfrastructures: {
    id: number | string;
  }[];
};

const roadsFiltersEN = [
  {
    name: "TEN-T",
    color: "#be123d",
    label: "TEN-T",
    publishedAt: Date.now(),
    locale: "en",
  },
  {
    name: "TEN-T RING ROAD",
    color: "#059669",
    label: "TEN-T RING ROAD",
    publishedAt: Date.now(),
    locale: "en",
  },
  {
    name: "TEN-T HIGHWAY",
    color: "#0ea5e9",
    label: "TEN-T HIGHWAY",
    publishedAt: Date.now(),
    locale: "en",
  },
  {
    name: "REPUBLICAN",
    color: "#1d4ed8",
    label: "REPUBLICAN",
    publishedAt: Date.now(),
    locale: "en",
  },
];

const roadsFiltersRO = [
  {
    name: "TEN-T",
    color: "#be123d",
    label: "TEN-T",
    publishedAt: Date.now(),
    locale: "ro",
  },
  {
    name: "TEN-T DRUM DE CENTURĂ",
    color: "#059669",
    label: "TEN-T DRUM DE CENTURĂ",
    publishedAt: Date.now(),
    locale: "ro",
  },
  {
    name: "TEN-T AUTOSTRADA",
    color: "#0ea5e9",
    label: "TEN-T AUTOSTRADA",
    publishedAt: Date.now(),
    locale: "ro",
  },
  {
    name: "REPUBLICANE",
    color: "#1d4ed8",
    label: "REPUBLICANE",
    publishedAt: Date.now(),
    locale: "ro",
  },
];

const bridgesFiltersEN = [
  {
    name: "PRUT",
    color: "#1d4ed8",
    label: "PRUT",
    publishedAt: Date.now(),
    locale: "en",
  },
  {
    name: "DNIESTER",
    color: "#059669",
    label: "DNIESTER",
    publishedAt: Date.now(),
    locale: "en",
  },
];

const bridgesFiltersRO = [
  {
    name: "PRUT",
    color: "#1d4ed8",
    label: "prut",
    publishedAt: Date.now(),
    locale: "ro",
  },
  {
    name: "NISTRU",
    color: "#059669",
    label: "NISTRU",
    publishedAt: Date.now(),
    locale: "ro",
  },
];

const railwaysFiltersEN = [
  {
    name: "SPEED LINE",
    color: "#1d4ed8",
    label: "SPEED LINE",
    publishedAt: Date.now(),
    locale: "en",
  },
  {
    name: "ONGOING REHABILITATION",
    color: "#059669",
    label: "ONGOING REHABILITATION",
    publishedAt: Date.now(),
    locale: "en",
  },
  {
    name: "QUICK WINS",
    color: "#0ea5e9",
    label: "QUICK WINS",
    publishedAt: Date.now(),
    locale: "en",
  },
  {
    name: "UNFUNDED",
    color: "#be123d",
    label: "UNFUNDED",
    publishedAt: Date.now(),
    locale: "en",
  },
  {
    name: "DRY PORT",
    color: "#6d28d9",
    label: "DRY PORT",
    publishedAt: Date.now(),
    locale: "en",
  },
  {
    name: "ROLLING STOCK",
    color: "#0f172a",
    label: "ROLLING STOCK",
    publishedAt: Date.now(),
    locale: "en",
  },
];

const railwaysFiltersRO = [
  {
    name: "LINIE RAPIDĂ",
    color: "#1d4ed8",
    label: "LINIE RAPIDĂ",
    publishedAt: Date.now(),
    locale: "ro",
  },
  {
    name: "ÎN DESFĂȘURARE",
    color: "#059669",
    label: "ÎN DESFĂȘURARE",
    publishedAt: Date.now(),
    locale: "ro",
  },
  {
    name: "SUCCES RAPID",
    color: "#0ea5e9",
    label: "SUCCES RAPID",
    publishedAt: Date.now(),
    locale: "ro",
  },
  {
    name: "NEFINANȚATE",
    color: "#be123d",
    label: "NEFINANȚATE",
    publishedAt: Date.now(),
    locale: "ro",
  },
  {
    name: "PORT SEC",
    color: "#6d28d9",
    label: "PORT SEC",
    publishedAt: Date.now(),
    locale: "ro",
  },
  {
    name: "STOCK RULANT",
    color: "#0f172a",
    label: "STOCK RULANT",
    publishedAt: Date.now(),
    locale: "ro",
  },
];

const airportsFiltersEN = [
  {
    name: "FUNCTIONAL",
    color: "#1d4ed8",
    label: "FUNCTIONAL",
    publishedAt: Date.now(),
    locale: "en",
  },
  {
    name: "NON-FUNCTIONAL",
    color: "#be123d",
    label: "NON-FUNCTIONAL",
    publishedAt: Date.now(),
    locale: "en",
  },
];

const airportsFiltersRO = [
  {
    name: "FUNCȚIONAL",
    color: "#1d4ed8",
    label: "FUNCȚIONAL",
    publishedAt: Date.now(),
    locale: "ro",
  },
  {
    name: "NON-FUNCȚIONAL",
    color: "#be123d",
    label: "NON-FUNCȚIONAL",
    publishedAt: Date.now(),
    locale: "ro",
  },
];

const portsFiltersEN = [
  {
    name: "PORTS",
    color: "#be123d",
    label: "PORTS",
    enabled: false,
    publishedAt: Date.now(),
    locale: "en",
  },
  {
    name: "WATERWAYS",
    color: "#1d4ed8",
    label: "WATERWAYS",
    enabled: false,
    publishedAt: Date.now(),
    locale: "en",
  },
];

const portsFiltersRO = [
  {
    name: "PORTURI",
    color: "#be123d",
    label: "PORTURI",
    enabled: false,
    publishedAt: Date.now(),
    locale: "ro",
  },
  {
    name: "Căi Fluviale",
    color: "#1d4ed8",
    label: "Căi Fluviale",
    enabled: false,
    publishedAt: Date.now(),
    locale: "ro",
  },
];

const urbanDFiltersEN = [
  {
    name: "MUNICIPALITIES",
    color: "#1d4ed8",
    label: "MUNICIPALITIES",
    enabled: false,
    publishedAt: Date.now(),
    locale: "en",
  },
];

const urbanDFiltersRO = [
  {
    name: "MUNICIPII",
    color: "#1d4ed8",
    label: "MUNICIPII",
    enabled: false,
    publishedAt: Date.now(),
    locale: "ro",
  },
];

const transportationFiltersEN = [
  {
    name: "DIGITALIZATION",
    color: "#6c28d9",
    label: "DIGITALIZATION",
    enabled: false,
    publishedAt: Date.now(),
    locale: "en",
  },
  {
    name: "MODERNIZATION",
    color: "#1d4ed8",
    label: "MODERNIZATION",
    enabled: false,
    publishedAt: Date.now(),
    locale: "en",
  },
];

const transportationFiltersRO = [
  {
    name: "DIGITALIZARE",
    color: "#6c28d9",
    label: "DIGITALIZARE",
    enabled: false,
    publishedAt: Date.now(),
    locale: "ro",
  },
  {
    name: "MODERNIZARE",
    color: "#1d4ed8",
    label: "MODERNIZARE",
    enabled: false,
    publishedAt: Date.now(),
    locale: "ro",
  },
];

const waterFiltersEN = [
  {
    name: "CENTRAL REGION",
    color: "#1d4ed8",
    label: "CENTRAL REGION",
    publishedAt: Date.now(),
    locale: "en",
  },
  {
    name: "NORTHERN REGION",
    color: "#059669",
    label: "NORTHERN REGION",
    publishedAt: Date.now(),
    locale: "en",
  },
  {
    name: "FALESTI DISTRICT",
    color: "#6c28d9",
    label: "FALESTI DISTRICT",
    publishedAt: Date.now(),
    locale: "en",
  },
  {
    name: "SOUTHERN REGION",
    color: "#d97706",
    label: "SOUTHERN REGION",
    publishedAt: Date.now(),
    locale: "en",
  },
  {
    name: "CAHUL DISTRICT",
    color: "#be123d",
    label: "CAHUL DISTRICT",
    publishedAt: Date.now(),
    locale: "en",
  },
];

const waterFiltersRO = [
  {
    name: "REGIUNEA CENTRU",
    color: "#1d4ed8",
    label: "REGIUNEA CENTRU",
    publishedAt: Date.now(),
    locale: "ro",
  },
  {
    name: "REGIUNEA NORD",
    color: "#059669",
    label: "REGIUNEA NORD",
    publishedAt: Date.now(),
    locale: "ro",
  },
  {
    name: "Raionul Fălești",
    color: "#6c28d9",
    label: "Raionul Fălești",
    publishedAt: Date.now(),
    locale: "ro",
  },
  {
    name: "REGIUNEA SUD",
    color: "#d97706",
    label: "REGIUNEA SUD",
    publishedAt: Date.now(),
    locale: "ro",
  },
  {
    name: "RAIONUL CAHUL",
    color: "#be123d",
    label: "RAIONUL CAHUL",
    publishedAt: Date.now(),
    locale: "ro",
  },
];

type FilterItem = {
  id: string | number;
};

export const setFilters = async (
  strapi: Strapi,
  infrastructures: Infrastructures | null,
  filterItems: {
    roads: {
      tntEn: FilterItem[];
      ringRoadEn: FilterItem[];
      highwayEn: FilterItem[];
      republicanEn: FilterItem[];
      tntRo: FilterItem[];
      ringRoadRo: FilterItem[];
      highwayRo: FilterItem[];
      republicanRo: FilterItem[];
    };
    bridges: {
      prutEn: FilterItem[];
      prutRo: FilterItem[];
      nistruEn: FilterItem[];
      nistruRo: FilterItem[];
    };
    railways: {
      speedLineEn: FilterItem[];
      speedLineRo: FilterItem[];
      onGoingEn: FilterItem[];
      onGoingRo: FilterItem[];
      quickWinsEn: FilterItem[];
      quickWinsRo: FilterItem[];
      unfundedEn: FilterItem[];
      unfundedRo: FilterItem[];
      dryPortEn: FilterItem[];
      dryPortRo: FilterItem[];
      rollStockEn: FilterItem[];
      rollStockRo: FilterItem[];
    };
    airports: {
      functionalAirportsEn: FilterItem[];
      functionalAirportsRo: FilterItem[];
      nonFunctionalAirportsEn: FilterItem[];
      nonFunctionalAirportsRo: FilterItem[];
    };
    ports: {
      portEn: FilterItem[];
      portRo: FilterItem[];
      waterwaysEn: FilterItem[];
      waterwaysRo: FilterItem[];
    };
    urbanDevelopment: {
      citiesEn: FilterItem[];
      citiesRo: FilterItem[];
    };
    tansportation: {
      digitEn: FilterItem[];
      digitRo: FilterItem[];
      modernEn: FilterItem[];
      modernRo: FilterItem[];
    };
    waterSanitation: {
      centralRegionEn: FilterItem[];
      northernRegionEn: FilterItem[];
      southernRegionEn: FilterItem[];
      cahulDistrictEn: FilterItem[];
      falestiDistrictEn: FilterItem[];
      centralRegionRo: FilterItem[];
      northernRegionRo: FilterItem[];
      southernRegionRo: FilterItem[];
      cahulDistrictRo: FilterItem[];
      falestiDistrictRo: FilterItem[];
    };
  }
) => {
  if (!infrastructures) return;
  const filtersCount = await strapi.entityService.count("api::filter.filter");

  const { engInfrastructures, roInfrastructures } = infrastructures;
  const { nistruEn, nistruRo, prutEn, prutRo } = filterItems.bridges;
  const {
    speedLineEn,
    speedLineRo,
    onGoingEn,
    onGoingRo,
    quickWinsEn,
    quickWinsRo,
    unfundedEn,
    unfundedRo,
    dryPortEn,
    dryPortRo,
    rollStockEn,
    rollStockRo,
  } = filterItems.railways;

  const { portEn, portRo, waterwaysEn, waterwaysRo } = filterItems.ports;

  const {
    tntEn,
    ringRoadEn,
    highwayEn,
    republicanEn,
    tntRo,
    ringRoadRo,
    highwayRo,
    republicanRo,
  } = filterItems.roads;

  const {
    functionalAirportsEn,
    functionalAirportsRo,
    nonFunctionalAirportsEn,
    nonFunctionalAirportsRo,
  } = filterItems.airports;

  const { digitEn, digitRo, modernEn, modernRo } = filterItems.tansportation;

  const { citiesEn, citiesRo } = filterItems.urbanDevelopment;

  const {
    centralRegionEn,
    northernRegionEn,
    southernRegionEn,
    cahulDistrictEn,
    falestiDistrictEn,
    centralRegionRo,
    northernRegionRo,
    southernRegionRo,
    cahulDistrictRo,
    falestiDistrictRo,
  } = filterItems.waterSanitation;

  const en_roads = [tntEn, ringRoadEn, highwayEn, republicanEn];
  const ro_roads = [tntRo, ringRoadRo, highwayRo, republicanRo];

  const en_bridges = [prutEn, nistruEn];
  const ro_bridges = [prutRo, nistruRo];

  const en_railways = [
    speedLineEn,
    onGoingEn,
    quickWinsEn,
    unfundedEn,
    dryPortEn,
    rollStockEn,
  ];
  const ro_railways = [
    speedLineRo,
    onGoingRo,
    quickWinsRo,
    unfundedRo,
    dryPortRo,
    rollStockRo,
  ];

  const en_airports = [functionalAirportsEn, nonFunctionalAirportsEn];
  const ro_airports = [functionalAirportsRo, nonFunctionalAirportsRo];

  const en_ports = [portEn, waterwaysEn];
  const ro_ports = [portRo, waterwaysRo];

  const en_transpotation = [digitEn, modernEn];
  const ro_transpotation = [digitRo, modernRo];

  const en_urbanD = [citiesEn];
  const ro_urbanD = [citiesRo];

  const en_water = [
    centralRegionEn,
    northernRegionEn,
    falestiDistrictEn,
    southernRegionEn,
    cahulDistrictEn,
  ];
  const ro_water = [
    centralRegionRo,
    northernRegionRo,
    falestiDistrictRo,
    southernRegionRo,
    cahulDistrictRo,
  ];

  if (!filtersCount) {
    // const roadsEn = await Promise.all(
    //   roadsFiltersEN.map((item, i) =>
    //     strapi.entityService.create("api::filter.filter", {
    //       data: {
    //         ...item,
    //         filter_items: en_roads[i].map((item) => item.id),
    //         infrastructure: engInfrastructures[0].id,
    //       },
    //     })
    //   )
    // );

    const roadsEn = await (async () => {
      let data = [];

      for (let [i, item] of roadsFiltersEN.entries()) {
        await strapi.entityService
          .create("api::filter.filter", {
            data: {
              ...item,
              filter_items: en_roads[i].map((item) => item.id),
              infrastructure: engInfrastructures[0].id,
            },
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const roadsRo = await Promise.all(
    //   roadsFiltersRO.map((item, i) =>
    //     strapi.entityService.create("api::filter.filter", {
    //       data: {
    //         ...item,
    //         filter_items: ro_roads[i].map((item) => item.id),
    //         infrastructure: roInfrastructures[0].id,
    //         localizations: [roadsEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const roadsRo = await (async () => {
      let data = [];

      for (let [i, item] of roadsFiltersRO.entries()) {
        await strapi.entityService
          .create("api::filter.filter", {
            data: {
              ...item,
              filter_items: ro_roads[i].map((item) => item.id),
              infrastructure: roInfrastructures[0].id,
              localizations: [roadsEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const bridgesEn = await Promise.all(
    //   bridgesFiltersEN.map((item, i) =>
    //     strapi.entityService.create("api::filter.filter", {
    //       data: {
    //         ...item,
    //         filter_items: en_bridges[i].map((item) => item.id),
    //         infrastructure: engInfrastructures[1].id,
    //       },
    //     })
    //   )
    // );

    const bridgesEn = await (async () => {
      let data = [];

      for (let [i, item] of bridgesFiltersEN.entries()) {
        await strapi.entityService
          .create("api::filter.filter", {
            data: {
              ...item,
              filter_items: en_bridges[i].map((item) => item.id),
              infrastructure: engInfrastructures[1].id,
            },
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // await Promise.all(
    //   bridgesFiltersRO.map((item, i) =>
    //     strapi.entityService.create("api::filter.filter", {
    //       data: {
    //         ...item,
    //         filter_items: ro_bridges[i].map((item) => item.id),
    //         infrastructure: roInfrastructures[1].id,
    //         localizations: [bridgesEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    await (async () => {
      for (let [i, item] of bridgesFiltersRO.entries()) {
        await strapi.entityService.create("api::filter.filter", {
          data: {
            ...item,
            filter_items: ro_bridges[i].map((item) => item.id),
            infrastructure: roInfrastructures[1].id,
            localizations: [bridgesEn[i].id],
          },
          populate: ["localizations"],
        });
      }
    })();

    // const railwaysEn = await Promise.all(
    //   railwaysFiltersEN.map((item, i) =>
    //     strapi.entityService.create("api::filter.filter", {
    //       data: {
    //         ...item,
    //         filter_items: en_railways[i].map((item) => item.id),
    //         infrastructure: engInfrastructures[2].id,
    //       },
    //     })
    //   )
    // );

    const railwaysEn = await (async () => {
      let data = [];

      for (let [i, item] of railwaysFiltersEN.entries()) {
        await strapi.entityService
          .create("api::filter.filter", {
            data: {
              ...item,
              filter_items: en_railways[i].map((item) => item.id),
              infrastructure: engInfrastructures[2].id,
            },
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // await Promise.all(
    //   railwaysFiltersRO.map((item, i) =>
    //     strapi.entityService.create("api::filter.filter", {
    //       data: {
    //         ...item,
    //         filter_items: ro_railways[i].map((item) => item.id),
    //         infrastructure: roInfrastructures[2].id,
    //         localizations: [railwaysEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    await (async () => {
      for (let [i, item] of railwaysFiltersRO.entries()) {
        await strapi.entityService.create("api::filter.filter", {
          data: {
            ...item,
            filter_items: ro_railways[i].map((item) => item.id),
            infrastructure: roInfrastructures[2].id,
            localizations: [railwaysEn[i].id],
          },
          populate: ["localizations"],
        });
      }
    })();

    // const airportsEn = await Promise.all(
    //   airportsFiltersEN.map((item, i) =>
    //     strapi.entityService.create("api::filter.filter", {
    //       data: {
    //         ...item,
    //         filter_items: en_airports[i].map((item) => item.id),
    //         infrastructure: engInfrastructures[3].id,
    //       },
    //     })
    //   )
    // );

    const airportsEn = await (async () => {
      let data = [];

      for (let [i, item] of airportsFiltersEN.entries()) {
        await strapi.entityService
          .create("api::filter.filter", {
            data: {
              ...item,
              filter_items: en_airports[i].map((item) => item.id),
              infrastructure: engInfrastructures[3].id,
            },
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // await Promise.all(
    //   airportsFiltersRO.map((item, i) =>
    //     strapi.entityService.create("api::filter.filter", {
    //       data: {
    //         ...item,
    //         filter_items: ro_airports[i].map((item) => item.id),
    //         infrastructure: roInfrastructures[3].id,
    //         localizations: [airportsEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    await (async () => {
      for (let [i, item] of airportsFiltersRO.entries()) {
        await strapi.entityService.create("api::filter.filter", {
          data: {
            ...item,
            filter_items: ro_airports[i].map((item) => item.id),
            infrastructure: roInfrastructures[3].id,
            localizations: [airportsEn[i].id],
          },
          populate: ["localizations"],
        });
      }
    })();

    // const portsEn = await Promise.all(
    //   portsFiltersEN.map((item, i) =>
    //     strapi.entityService.create("api::filter.filter", {
    //       data: {
    //         ...item,
    //         filter_items: en_ports[i].map((item) => item.id),
    //         infrastructure: engInfrastructures[4].id,
    //       },
    //     })
    //   )
    // );

    const portsEn = await (async () => {
      let data = [];

      for (let [i, item] of portsFiltersEN.entries()) {
        await strapi.entityService
          .create("api::filter.filter", {
            data: {
              ...item,
              filter_items: en_ports[i].map((item) => item.id),
              infrastructure: engInfrastructures[4].id,
            },
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // await Promise.all(
    //   portsFiltersRO.map((item, i) =>
    //     strapi.entityService.create("api::filter.filter", {
    //       data: {
    //         ...item,
    //         filter_items: ro_ports[i].map((item) => item.id),
    //         infrastructure: roInfrastructures[4].id,
    //         localizations: [portsEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    await (async () => {
      for (let [i, item] of portsFiltersRO.entries()) {
        await strapi.entityService.create("api::filter.filter", {
          data: {
            ...item,
            filter_items: ro_ports[i].map((item) => item.id),
            infrastructure: roInfrastructures[4].id,
            localizations: [portsEn[i].id],
          },
          populate: ["localizations"],
        });
      }
    })();

    // const urbanDEn = await Promise.all(
    //   urbanDFiltersEN.map((item, i) =>
    //     strapi.entityService.create("api::filter.filter", {
    //       data: {
    //         ...item,
    //         filter_items: en_urbanD[i].map((item) => item.id),
    //         infrastructure: engInfrastructures[5].id,
    //       },
    //     })
    //   )
    // );

    const urbanDEn = await (async () => {
      let data = [];

      for (let [i, item] of urbanDFiltersEN.entries()) {
        await strapi.entityService
          .create("api::filter.filter", {
            data: {
              ...item,
              filter_items: en_urbanD[i].map((item) => item.id),
              infrastructure: engInfrastructures[5].id,
            },
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // await Promise.all(
    //   urbanDFiltersRO.map((item, i) =>
    //     strapi.entityService.create("api::filter.filter", {
    //       data: {
    //         ...item,
    //         filter_items: ro_urbanD[i].map((item) => item.id),
    //         infrastructure: roInfrastructures[5].id,
    //         localizations: [urbanDEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    await (async () => {
      for (let [i, item] of urbanDFiltersRO.entries()) {
        await strapi.entityService.create("api::filter.filter", {
          data: {
            ...item,
            filter_items: ro_urbanD[i].map((item) => item.id),
            infrastructure: roInfrastructures[5].id,
            localizations: [urbanDEn[i].id],
          },
          populate: ["localizations"],
        });
      }
    })();

    // const transportationEn = await Promise.all(
    //   transportationFiltersEN.map((item, i) =>
    //     strapi.entityService.create("api::filter.filter", {
    //       data: {
    //         ...item,
    //         filter_items: en_transpotation[i].map((item) => item.id),
    //         infrastructure: engInfrastructures[6].id,
    //       },
    //     })
    //   )
    // );

    const transportationEn = await (async () => {
      let data = [];

      for (let [i, item] of transportationFiltersEN.entries()) {
        await strapi.entityService
          .create("api::filter.filter", {
            data: {
              ...item,
              filter_items: en_transpotation[i].map((item) => item.id),
              infrastructure: engInfrastructures[6].id,
            },
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // await Promise.all(
    //   transportationFiltersRO.map((item, i) =>
    //     strapi.entityService.create("api::filter.filter", {
    //       data: {
    //         ...item,
    //         filter_items: ro_transpotation[i].map((item) => item.id),
    //         infrastructure: roInfrastructures[6].id,
    //         localizations: [transportationEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    await (async () => {
      for (let [i, item] of transportationFiltersRO.entries()) {
        await strapi.entityService.create("api::filter.filter", {
          data: {
            ...item,
            filter_items: ro_transpotation[i].map((item) => item.id),
            infrastructure: roInfrastructures[6].id,
            localizations: [transportationEn[i].id],
          },
          populate: ["localizations"],
        });
      }
    })();

    // const waterEn = await Promise.all(
    //   waterFiltersEN.map((item, i) =>
    //     strapi.entityService.create("api::filter.filter", {
    //       data: {
    //         ...item,
    //         filter_items: en_water[i].map((item) => item.id),
    //         infrastructure: engInfrastructures[7].id,
    //       },
    //     })
    //   )
    // );

    const waterEn = await (async () => {
      let data = [];

      for (let [i, item] of waterFiltersEN.entries()) {
        await strapi.entityService
          .create("api::filter.filter", {
            data: {
              ...item,
              filter_items: en_water[i].map((item) => item.id),
              infrastructure: engInfrastructures[7].id,
            },
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // await Promise.all(
    //   waterFiltersRO.map((item, i) =>
    //     strapi.entityService.create("api::filter.filter", {
    //       data: {
    //         ...item,
    //         filter_items: ro_water[i].map((item) => item.id),
    //         infrastructure: roInfrastructures[7].id,
    //         localizations: [waterEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    await (async () => {
      for (let [i, item] of waterFiltersRO.entries()) {
        await strapi.entityService.create("api::filter.filter", {
          data: {
            ...item,
            filter_items: ro_water[i].map((item) => item.id),
            infrastructure: roInfrastructures[7].id,
            localizations: [waterEn[i].id],
          },
          populate: ["localizations"],
        });
      }
    })();

    return {
      roadsEn,
      roadsRo,
    };
  }

  return null;
};
