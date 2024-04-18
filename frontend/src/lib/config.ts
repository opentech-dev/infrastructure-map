import { LatLngExpression } from "leaflet";

export const baseUrl =
  import.meta.env.REACT_APP_API_ENDPOINT || "http://localhost:1338";

export const strapiToken =
  import.meta.env.REACT_APP_STRAPI_TOEKN ||
  "2920c9e538ed93bdb0e1d4aacdcb588c385891c0d82848e642aa582bf4016cba0f11862806b23f97a8c3348702dbc56c97c71ab105b604e0aff35877d59c08957ab4288d59aed063842d62dc1752b1b270ab05f40ce1d0a838f61523ebbb2e4fda49c9218ca4c04b3790318b1195bf9533ea51bc58fd8629eb97e0bcd5096f80";

export const centerOfMd = [
  46.78501604269256, 28.729248046875004,
] as LatLngExpression;
