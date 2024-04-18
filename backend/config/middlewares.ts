export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "script-src": [
            "'self'",
            "unsafe-inline",
            "https://*.tile.jawg.io",
            "https://*.basemaps.cartocdn.com",
            "https://localhost:1337",
          ],
          "media-src": [
            "'self'",
            "blob:",
            "data:",
            "https://*.tile.jawg.io",
            "https://*.basemaps.cartocdn.com",
            "https://localhost:1337",
            "https://tile.openstreetmap.org",
          ],
          "img-src": [
            "'self'",
            "blob:",
            "data:",
            "https://*.tile.jawg.io",
            "https://*.basemaps.cartocdn.com",
            "market-assets.strapi.io",
            "https://localhost:1337",
            "https://tile.openstreetmap.org",
          ],
        },
      },
    },
  },
];
