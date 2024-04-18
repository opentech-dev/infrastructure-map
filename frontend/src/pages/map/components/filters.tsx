import { baseUrl } from "@/lib/config";
import { useTranslation } from "react-i18next";
import { FeatureGroup } from "react-leaflet";
import useFilters from "../hooks/use-filters";
import { isEmpty } from "lodash";

const FiltersBar = () => {
  const { t } = useTranslation();

  const { ref, handleClick, isFilled, uniqueFilters } = useFilters();

  return (
    <>
      <FeatureGroup ref={ref} />
      {!isEmpty(uniqueFilters) ? (
        <div
          id="filter_bar"
          className="q1280:max-w-[calc(100vw-540px)] q960:max-w-[calc(100vw-420px)] max-w-[calc(100vw-120px)] q1920:p-4 q960:p-3 absolute left-[50%] top-[8px] z-[999] flex translate-x-[-50%] rounded-[12px] bg-white/80 p-2 shadow-md overflow-x-auto"
        >
          {uniqueFilters.map((item, i) => (
            <div
              className="q1920:w-32 q960:w-28 q960:gap-1 q640:w-[50px] q640:gap-1 flex w-12 flex-col items-center gap-2 text-center"
              key={i}
            >
              <svg
                onClick={() => handleClick(item.attributes.slug)}
                className="rounded-full p-1 q1920:h-10 q1920:w-10 q1920:[&_svg]:h-6 q1920:[&_svg]:w-6 q960:h-8 q960:w-8 q960:[&_svg]:h-6 q960:[&_svg]:w-6 h-7 w-7 [&_svg]:h-5 [&_svg]:w-5"
                data-src={baseUrl + item.attributes.icon?.data?.attributes?.url}
                data-unique-ids="disabled"
                id={`category-${item.id}`}
                data-js="enabled"
                color={item.attributes.color}
                fill={item.attributes.color}
                style={{
                  opacity: isFilled(item.attributes.slug) ? 1 : 0.4,
                  backgroundColor: item.attributes.color,
                  border: `1px solid ${item.attributes.color}`,
                  fill: item.attributes.color,
                }}
              />
              <p
                className="q1920:w-32 q960:w-28 q960:text-xs q640:w-[50px] text-[10px] w-12 truncate font-bold"
                style={{
                  color: item.attributes.color,
                }}
              >
                {t(`top_filter.id_${item.id}`)}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  )
};

export default FiltersBar;
