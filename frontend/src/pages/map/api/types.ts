import { StrapiImage } from "@/store/types";
import { FeatureCollection } from "geojson";

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export type MapConfiguration = {
  id: number;
  attributes: {
    latitude: number;
    longitute: number;
    default_zoom: number;
    min_zoom: number;
    max_zoom: number;
    // tile_switch: boolean;
    tile_url: string;
    tile_attribution: string;
    tile_access_token: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
};

export type LayoutData = {
  id: number;
  attributes: {
    footer: string;
    footer_logo: { data: StrapiImage };
    header_title: string;
    header_logo: { data: StrapiImage };
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    locale: string;
  };
};

export interface GlobalLayerView {
  id: number;
  attributes: {
    geojson: FeatureCollection;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
}

export interface GlobalLayerData {
  data: GlobalLayerView[];
  meta: {
    pagination: Pagination;
  };
}

export interface InfrastructureView {
  id: number;
  attributes: {
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    locale: string;
    icon: { data: StrapiImage };
    slug: string;
  };
}

export interface InfrastructuresData {
  data: InfrastructureView[];
  meta: {
    pagination: Pagination;
  };
}

export interface FiltersData {
  data: FilterView[];
  meta: {
    pagination: Pagination;
  };
}

export interface TopFiltersData {
  data: TopFilterView[];
  meta: {
    pagination: Pagination;
  };
}

export interface FilterItemsView {
  id: number;
  attributes: {
    name: string;
    description: string;
    geojson: FeatureCollection;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    locale: string;
    label?: string;
    allow_actions: boolean;
    images: {
      data: StrapiImage[];
    };
    marker_icon: {
      data: StrapiImage;
    };
  };
}

export interface FilterView {
  id: number;
  attributes: {
    name: string;
    color?: string;
    position: "bottom" | "top";
    enabled: boolean;
    label?: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    locale: string;
    icon: { data: StrapiImage };
    filter_items: {
      data: FilterItemsView[];
    };
  };
}

export interface TopFilterName {
  id: number;
  attributes: {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    locale: string;
    slug: string;
    color: string;
    icon: {
      data: StrapiImage;
    };
  };
}

export interface TopFilterView {
  id: number;
  attributes: {
    geojson: FeatureCollection;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    top_filter: {
      data: TopFilterName;
    };
  };
}
