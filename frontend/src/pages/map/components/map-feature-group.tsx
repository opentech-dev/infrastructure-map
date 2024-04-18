import * as React from "react";
import { FeatureGroup } from "react-leaflet";
import type { FeatureCollection } from "geojson";
import * as L from "leaflet";

interface Props {
  geojson: FeatureCollection;
}

export type ForwRefHandle = {
  setStyle: (options: L.PathOptions, index: number) => void;
  removeLayer: (index: number) => void;
  resetLayers: (data: FeatureCollection) => void;
};

const MapFeatureGroup: React.ForwardRefRenderFunction<ForwRefHandle, Props> = (
  { geojson },
  forwrdedRef
) => {
  const ref = React.useRef<L.FeatureGroup>(null);

  React.useImperativeHandle(forwrdedRef, () => {
    return {
      setStyle(options, index) {
        const layers = ref.current?.getLayers();
        if (!layers) return;
        if (layers[index] instanceof L.Marker) return;
        const layerId = ref.current?.getLayerId(layers[index]);
        if (!layerId) return;
        const layer = ref.current?.getLayer(layerId) as L.FeatureGroup;
        layer.setStyle(options);
      },
      removeLayer(index) {
        const layers = ref.current?.getLayers();
        if (!layers) return;
        const layerId = ref.current?.getLayerId(layers[index]);
        if (!layerId) return;
        ref.current?.removeLayer(layerId);
      },
      resetLayers(data: FeatureCollection) {
        if (data) {
          ref.current?.clearLayers();
        }
      },
    };
  });

  React.useEffect(() => {
    if (ref.current?.getLayers().length === 0 && geojson) {
      L.geoJSON(geojson).eachLayer((layer) => {
        if (
          layer instanceof L.Polyline ||
          layer instanceof L.Polygon ||
          layer instanceof L.Marker
        ) {
          if (layer.feature?.properties?.style) {
            Object.assign(layer.options, layer.feature?.properties?.style);
          }
          if (layer?.feature?.properties.radius && ref.current) {
            if (layer?.feature?.properties.shape === "CircleMarker") {
              new L.CircleMarker(
                layer.feature.geometry.coordinates.slice().reverse(),
                {
                  radius: layer.feature?.properties.radius,
                  ...layer.feature?.properties?.style,
                }
              ).addTo(ref.current);
            } else {
              new L.Circle(
                layer.feature.geometry.coordinates.slice().reverse(),
                {
                  radius: layer.feature?.properties.radius,
                  ...layer.feature?.properties?.style,
                }
              ).addTo(ref.current);
            }
          } else {
            ref.current?.addLayer(layer);
          }
        }
      });
    }
  }, [JSON.stringify(geojson)]);

  return <FeatureGroup ref={ref} />;
};

export default React.forwardRef(MapFeatureGroup);
