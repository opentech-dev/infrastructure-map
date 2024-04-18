import * as L from "leaflet";
import "@/styles/leaflet.css";

type TemplateProps = {
  src: string;
  color: string;
  label?: string;
};

export const ICON_TEMPLATES = {
  default: ({ src, color, label }: TemplateProps) => `
  <div class="flex flex-col items-center justify-center">
    <div
      style="background-color: ${color}; border: 1px solid #fff;"
      class="p-1 rounded-full leaflet-objects-pane leaflet-marker-pane absolute border-none"
    >
      <svg
        class="rounded-full w-5 h-5"
        data-src=${src}
        data-unique-ids="disabled"
        data-js="enabled"
        color={item.attributes.color}
        fill={item.attributes.color}
        style="
          background-color: ${color};
          border: 1px solid ${color};
        "
      />
    </div>
    ${label ? `<label class="text-lg mt-12 font-medium z-50 whitespace-nowrap" style="color: ${color}">${label}</label>` : null}
  </div>`,
};

const createCustomIcon = (latlng: L.LatLng, url: string) => {
  const myIcon = L.icon({
    iconUrl: url,
    // shadowUrl: url,
    iconSize: [25, 25], // width and height of the image in pixels
    // shadowSize: [35, 20], // width, height of optional shadow image
    iconAnchor: [12, 12], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 6], // anchor point of the shadow. should be offset
    popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
  });
  return L.marker(latlng, { icon: myIcon });
};

export const createMarker = (
  latlng: L.LatLng,
  html: string,
  className: React.ComponentProps<"div">["className"]
) => {
  const myIcon = L.divIcon({
    html,
    className,
    // shadowUrl: url,
    iconSize: [25, 25], // width and height of the image in pixels
    // shadowSize: [35, 20], // width, height of optional shadow image
    iconAnchor: [12, 12], // point of the icon which will correspond to marker's location
    popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
  });
  return L.marker(latlng, { icon: myIcon });
};

export const setMarkerIcon = (url: string) => {
  return L.icon({
    iconUrl: url,
    // shadowUrl: url,
    iconSize: [25, 25], // width and height of the image in pixels
    // shadowSize: [35, 20], // width, height of optional shadow image
    iconAnchor: [12, 12], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 6], // anchor point of the shadow. should be offset
    popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
  });
};

export default createCustomIcon;
