import {
  BoxDetailsContent,
  BoxItem,
  DetailsBox,
  ItemBoxTitle,
} from "@/components/details-box";
import { Markdown } from "@/components/markdown";
import React, { FC, memo } from "react";
import { isEmpty } from "lodash";
import { baseUrl } from "@/lib/config";
import { FeatureGroup } from "react-leaflet";
import * as L from "leaflet";
import { ImageViewer } from "@/components/image-viewer";
import useCategoryDescription from "../hooks/use-category-description";
import { FilterItemsView, FiltersData } from "../api/types";

export type ForwRefHandle = {
  setStyle: (e: L.LeafletMouseEvent) => void;
};

type DescriptionSidebarProps = {
  icon?: string;
  data?: FiltersData;
  selectedItem: FilterItemsView | null;
  handleBack: () => void;
  activeCategories: string[];
  handleItemClick: (d: FilterItemsView, index: number) => void;
  activeParam: string;
};

const DescriptionSidebar: FC<DescriptionSidebarProps> = memo(
  ({
    data,
    selectedItem,
    activeCategories,
    handleBack,
    handleItemClick,
    activeParam,
    icon = "",
  }) => {
    return (
      !isEmpty(data?.data) && (
        <DetailsBox
          titleId={`infrastructure.id_${activeParam}`}
          icon={baseUrl + icon}
          hasBackButton={!!selectedItem}
          className="z-[999] h-full"
          onClick={handleBack}
        >
          {selectedItem && (
            <BoxDetailsContent>
              <Markdown
                titleId={`filter_item_description.id_${selectedItem.id}`}
              />
              {selectedItem.attributes.images.data && (
                <ImageViewer images={selectedItem.attributes.images.data} />
              )}
            </BoxDetailsContent>
          )}

          {!selectedItem &&
            data?.data.map((filter) => {
              if (
                activeCategories &&
                activeCategories.length > 0 &&
                !activeCategories.includes(filter.attributes.name)
              )
                return null;

              return (
                <div key={filter.id}>
                  <ItemBoxTitle
                    titleId={`filter.id_${filter.id}`}
                    color={filter.attributes.color}
                  />

                  {filter.attributes.filter_items.data.map(
                    (filterItem, key) => {
                      return (
                        <BoxItem
                          key={filter.id + "_" + filterItem.id}
                          titleId={`filter_item_title.id_${filterItem.id}`}
                          color={filter.attributes.color}
                          onClick={() => handleItemClick(filterItem, key)}
                        />
                      );
                    }
                  )}
                </div>
              );
            })}
        </DetailsBox>
      )
    );
  }
);

const CategoryDescription: React.ForwardRefRenderFunction<
  ForwRefHandle,
  { isLoadedMap: boolean }
> = () => {
  const {
    ref,
    eventHandlers,
    handleBack,
    handleItemClick,
    selectedItem,
    activeParam,
    activeCategories,
    data,
    infrastructure,
  } = useCategoryDescription();

  return (
    <>
      <FeatureGroup interactive eventHandlers={eventHandlers} ref={ref} />
      <DescriptionSidebar
        handleBack={handleBack}
        handleItemClick={handleItemClick}
        selectedItem={selectedItem}
        activeParam={activeParam}
        activeCategories={activeCategories as string[]}
        data={data}
        icon={infrastructure?.attributes?.icon?.data?.attributes?.url}
      />
    </>
  );
};

export default CategoryDescription;
