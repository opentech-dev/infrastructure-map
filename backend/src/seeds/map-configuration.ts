import { Strapi } from "@strapi/strapi";

export const setMapConfiguration = async (strapi: Strapi) => {
  const configurationCount = await strapi.entityService.count(
    "api::map-configuration.map-configuration"
  );

  if (!configurationCount) {
    await strapi.entityService.create(
      "api::map-configuration.map-configuration",
      {
        data: {
          tile_url:
            "https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token={accessToken}&lang=en",
          tile_attribution:
            '&copy; <a href="https://opentech.dev">Opentech</a> contributors',
          tile_access_token:
            "xMND1cZkXJRHsenKaOis6psICw0A7xgwNiHAvxWT6uSdHcEB3D5ccXej5ZQGJycC",
          latitude: 46.78501604269256,
          longitute: 28.729248046875004,
          default_zoom: 8,
          max_zoom: 12,
          min_zoom: 6,
          publishedAt: Date.now(),
        },
      }
    );
  }
};
