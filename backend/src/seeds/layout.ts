import { Strapi } from "@strapi/strapi";

export const setMapLayout = async (strapi: Strapi) => {
  const layoutCount = await strapi.entityService.count("api::layout.layout");

  if (!layoutCount) {
    const entity = await strapi.entityService.create("api::layout.layout", {
      data: {
        locale: "en",
        footer:
          "This platform was made possible by the generous support of the American people through the United States Agency for International Development (USAID). The information provided on this Web site is not official U.S. Government information and does not represent the views or positions of the U.S. Agency for International Development or the U.S. Government.",
        header_title:
          "Plan for the Reconstruction of the Infrastructure of Moldova",
        publishedAt: Date.now(),
      },
    });

    await strapi.entityService.create("api::layout.layout", {
      data: {
        footer:
          "Această platformă a fost realizată cu sprijinul poporului american prin intermediul Agenției Statelor Unite pentru Dezvoltare Internațională (USAID). Responsabilitatea cu privire la conținutul plasat nu reflectă neapărat opinia USAID sau a Guvernului Statelor Unite.",
        header_title: "Planul de Reconstrucție a Infrastructurii din Moldova",
        locale: "ro",
        publishedAt: Date.now(),
        localizations: [entity.id],
      },
      populate: ["localizations"],
    });
  }
};
