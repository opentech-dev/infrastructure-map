import { Strapi } from "@strapi/strapi";

export type SeedLocales = {
  engLangId: number;
  roLangId: number;
};

export const addLocales = async (strapi: Strapi) => {
  const engLangId: number = await strapi.entityService
    .findMany("plugin::i18n.locale", {
      fields: ["id"],
      filters: { code: "en" },
    })
    .then(async (data: any) => {
      if (data.length > 0) {
        return data[0].id;
      }

      const lang = await strapi.entityService.create("plugin::i18n.locale", {
        data: { code: "en", name: "English (en)" },
      });

      return lang.id;
    });
  const roLangId: number = await strapi.entityService
    .findMany("plugin::i18n.locale", {
      fields: ["id"],
      filters: { code: "ro" },
    })
    .then(async (data: any) => {
      if (data.length > 0) {
        return data[0].id;
      }
      const lang = await strapi.entityService.create("plugin::i18n.locale", {
        data: { code: "ro", name: "Romanian (ro)" },
      });

      return lang.id;
    });

  return { engLangId, roLangId };
};
