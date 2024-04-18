import { baseUrl } from "@/lib/config";
import { isEmpty } from "lodash";
import useCategoryEvents from "../hooks/use-category-events";

const Categories = () => {
  const { data, handleClick, isFilled } = useCategoryEvents();

  if (isEmpty(data?.data) || data?.data.every((el) => !el.attributes.enabled)) {
    return null;
  }

  return (
    <div
      id="categories"
      className="q1920:p-4 q960:p-3 q640:p-2 q1280:max-w-[calc(100vw-540px)] q960:max-w-[calc(100vw-420px)] max-w-[calc(100vw-120px)] q640:bottom-2 q480:bottom:1 bottom-4 p-2 absolute left-[50%] z-[9999] flex translate-x-[-50%] rounded-[12px] bg-white/80 shadow-md overflow-x-auto"
    >
      {(data?.data || []).map((item, i) => {
        if (!item.attributes.enabled) return null;
        return (
          <div
            className="q1920:w-32 q960:w-28 q640:w-[50px] flex w-12 flex-col items-center gap-2 text-center"
            key={i}
          >
            <svg
              onClick={() => handleClick(item.attributes.name)}
              className="rounded-full p-1 q1920:h-10 q1920:w-10 q1920:[&_svg]:h-6 q1920:[&_svg]:w-6 q960:h-8 q960:w-8 q960:[&_svg]:h-6 q960:[&_svg]:w-6 h-7 w-7 [&_svg]:h-5 [&_svg]:w-5"
              data-src={baseUrl + item.attributes.icon.data?.attributes?.url}
              data-unique-ids="disabled"
              id={`category-${item.id}`}
              data-js="enabled"
              color={item.attributes.color}
              fill={item.attributes.color}
              style={{
                opacity: isFilled(item.attributes.name) ? 1 : 0.4,
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
              {item.attributes.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
