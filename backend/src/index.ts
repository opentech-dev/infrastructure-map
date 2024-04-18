import { Strapi } from "@strapi/strapi";
import { addLocales } from "./seeds/locales";
import { setMapConfiguration } from "./seeds/map-configuration";
import { setMapLayout } from "./seeds/layout";
import { setInfrastructures } from "./seeds/infrastructures";
import { setFilters } from "./seeds/filters";
import { setFilterItems } from "./seeds/filter-items";
import { setTopFilterItems } from "./seeds/top-filters";
import { setGlobalLayers } from "./seeds/global-layers";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Strapi }) {
    /* add locales */
    await addLocales(strapi);
    /* -- */

    /* Map Configuration */
    await setMapConfiguration(strapi);
    /* -- */

    /* Map Layout */
    await setMapLayout(strapi);
    /* -- */

    /* Map Infrastructures */
    const infrData = await setInfrastructures(strapi);
    /* -- */

    /* Map Infrastructures */
    setGlobalLayers(strapi);
    /* -- */

    /* Set Filters */
    const result = await setFilterItems(strapi);

    if (result && infrData) {
      const data = await setFilters(strapi, infrData, result);
      if (data) {
        await setTopFilterItems(strapi, infrData, data);
      }
    }
  },
};
