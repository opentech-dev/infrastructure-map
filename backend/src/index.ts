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
    try {
      console.log('Add Locales')
      await addLocales(strapi);
    } catch(error) {
      console.log('Add Locales Error')
      console.error(error)
    }

    /* -- */

    /* Map Configuration */
    try {
      console.log('Add setMapConfiguration')
    await setMapConfiguration(strapi);
    } catch(error){
      console.log('setMapConfiguration Error')
      console.error(error)
    }
    /* -- */

    /* Map Layout */
    try {
      console.log('Add setMapLayout')
      await setMapLayout(strapi);
    } catch(error){
      console.log('setMapLayout Error')
      console.error(error)
    }
    /* -- */

    /* Map Infrastructures */
    let infrData
    try {
      console.log('Add setInfrastructures')
      infrData = await setInfrastructures(strapi);
    } catch(error){
      console.log('setInfrastructures Error')
      console.error(error)
    }
    /* -- */

    /* Map Infrastructures */
    try {
      console.log('Add setGlobalLayers')
      await setGlobalLayers(strapi);
    } catch(error){
      console.log('setGlobalLayers Error')
      console.error(error)
    }
    /* -- */

    /* Set Filters */

    let result;
    try {
      console.log('Add setFilterItems')
      result = await setFilterItems(strapi);
    } catch(error){
      console.log('setFilterItems Error')
      console.error(error)
    }


    if (result && infrData) {
      const data = await setFilters(strapi, infrData, result);
      if (data) {
        await setTopFilterItems(strapi, infrData, data);
      }
    }
  },
};
