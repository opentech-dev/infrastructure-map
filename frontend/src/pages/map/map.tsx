import "leaflet/dist/leaflet.css";
import { FeatureGroup, MapContainer, ZoomControl } from "react-leaflet";
import { useGetMapConfigurationQuery } from "./api";
import * as L from "leaflet";
import { Skeleton } from "@/components/ui/skeleton";
import Sidebar from "@/components/sidebar";
import Categories from "./components/categories";
import CategoryDescription from "./components/category-description";
import useGlobalTile from "./hooks/use-global-tile";
import { TileSwitch } from "./components/tile-switch";
import FiltersBar from "./components/filters";
import useSeo from "@/hooks/use-seo";

const HomePage = () => {
  useSeo()

  const { data } = useGetMapConfigurationQuery();

  const { handleMapLoad, isLoadedMap, ref } = useGlobalTile();

  if (!data) {
    return (
      <Skeleton className="q1920:h-[calc(100vh-146px)] q960:h-[calc(100vh-120px)] q640:h-[calc(100vh-110px)] h-[calc(100vh-208px)] min-h-[600px] w-full" />
    );
  }

  return (
    <MapContainer
      id="moldova_map"
      whenReady={handleMapLoad}
      className="grow w-full"
      center={
        [
          data?.attributes.latitude,
          data?.attributes.longitute,
        ] as L.LatLngExpression
      }
      zoom={data?.attributes.default_zoom}
      minZoom={data?.attributes.min_zoom}
      maxZoom={data?.attributes.max_zoom}
      scrollWheelZoom={false}
      zoomControl={false}
      style={{
        width: "100%",
        zIndex: 1,
      }}
    >
      <ZoomControl position="bottomright" />
      {/* {!enableTile && <CountriesNamesOverlays />} */}
      <TileSwitch
        tileUrl={data?.attributes.tile_url}
        attribution={data?.attributes.tile_attribution}
        accessToken={data?.attributes.tile_access_token}
      />
      <FeatureGroup ref={ref} />
      <FiltersBar />
      <Categories />
      <CategoryDescription isLoadedMap={isLoadedMap} />
      <Sidebar />
    </MapContainer>
  );
};

export default HomePage;
