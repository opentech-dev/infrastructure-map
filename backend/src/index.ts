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
    const tasks = [
      { fn: addLocales, args: [strapi], message: 'Add Locales' },
      { fn: setMapConfiguration, args: [strapi], message: 'Add setMapConfiguration' },
      { fn: setMapLayout, args: [strapi], message: 'Add setMapLayout' },
      { fn: setInfrastructures, args: [strapi], message: 'Add setInfrastructures', saveResult: 'infrData' },
      { fn: setGlobalLayers, args: [strapi], message: 'Add setGlobalLayers' },
      { fn: setFilterItems, args: [strapi], message: 'Add setFilterItems', saveResult: 'result' }
    ];

    const results = {};

    for (const task of tasks) {
      try {
        console.log(task.message);
        const result = await task.fn.call(null, ...task.args);
        if (task.saveResult) {
          results[task.saveResult] = result;
        }
      } catch (error) {
        console.log(`${task.message} Error`);
        console.error(error);
      }
    }

    /* Set Filters */
    if (results.result && results.infrData) {
      try {
        console.log('Add setFilters');
        const data = await setFilters(strapi, results.infrData, results.result);
      
        if (data) {
          console.log('Add setTopFilterItems');
          await setTopFilterItems(strapi, results.infrData, data);
        }
      } catch (error) {
        console.log(`Set Filters Error`);
        console.error(error);
      }
    }
  },
};