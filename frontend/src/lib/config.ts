import { LatLngExpression } from "leaflet";

export const baseUrl =
  import.meta.env.REACT_APP_API_ENDPOINT || "http://localhost:1337";

export const strapiToken =
  import.meta.env.REACT_APP_STRAPI_TOEKN ||
  "26ee037cf66ba113e0273b00baf2c249538e12effb2d01c6bc0296c62bfd4b6362637634e5dab11fa27815701d13dc2cf67c8debdb161e57b8b9742e7bbd9a0ad04b9f9b182b659472004081c8cc825b4f9efbdefba161e2c6460ac6e78a2d1dc29a5c61fd3aa9b9ef8d94ebda922d34deba56cd3db8726e0669b496bfe15f7f";

export const centerOfMd = [
  46.78501604269256, 28.729248046875004,
] as LatLngExpression;
