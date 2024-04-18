import { useGetGlobalTilesQuery } from "../api";
import * as L from "leaflet";
import { useEffect, useRef, useState } from "react";

const useGlobalTile = () => {
  const globalFeatures = useRef<L.FeatureGroup>(null);
  const [isLoadedMap, setLoadedMap] = useState<boolean>(false);

  const { data: globalTiles } = useGetGlobalTilesQuery();

  const handleMapLoad = () => setLoadedMap(true);

  useEffect(() => {
    if (
      globalFeatures.current?.getLayers().length === 0 &&
      globalTiles?.data &&
      isLoadedMap
    ) {
      globalTiles.data.forEach((tile) => {
        L.geoJSON(tile.attributes.geojson, {
          style: function (featureObject) {
            return featureObject?.properties?.style;
          },
        })
          .addTo(globalFeatures.current!)
          .bringToBack();
      });
    }
  }, [globalTiles, isLoadedMap]);

  return { handleMapLoad, isLoadedMap, globalTiles, ref: globalFeatures };
};

export default useGlobalTile;
