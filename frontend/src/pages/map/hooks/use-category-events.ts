import useLanguage from "@/hooks/use-language";
import { useGetFiltersQuery } from "../api";
import { useSearchParams } from "react-router-dom";
import { useSignals } from "@preact/signals-react/runtime";
import useQueryParams from "@/hooks/use-query-params";
import {
  decodeDelimitedArray,
  encodeDelimitedArray,
} from "serialize-query-params";
import _ from "lodash";

const useCategoryEvents = () => {
  useSignals();
  const { language } = useLanguage();
  const [params] = useSearchParams();

  const activeParam = params.get("layer") || "roads";

  const [activeCategories = [], setCategories] = useQueryParams("category", {
    decode: (value) => decodeDelimitedArray(value, ","),
    encode: (value: string[]) => encodeDelimitedArray(value, ","),
  });

  const { data } = useGetFiltersQuery(
    {
      locale: language.value,
      slug: activeParam,
    },
    { skip: !activeParam }
  );

  const allCategories = (data?.data || []).map((item) => item.attributes.name);

  const isSelectedAll = _.isEqual(
    _.sortBy(allCategories),
    _.sortBy(activeCategories || [])
  );

  const handleClick = (category: string) => {
    if (!allCategories.includes(category)) return;
    if (category === "all") {
      setCategories([]);
      return;
    }
    if ((activeCategories || [])?.includes(category)) {
      setCategories(
        (activeCategories as string[]).filter(
          (item) => (item as string) !== category
        )
      );
    } else {
      setCategories([
        ...(((activeCategories || []) as string[]) ?? []),
        category,
      ]);
    }
  };

  const isFilled = (category: string) => {
    if (isSelectedAll) return true;
    if (!activeCategories || _.isEmpty(activeCategories)) return false;

    return (activeCategories || [])?.includes(category);
  };

  return {
    data,
    handleClick,
    isSelectedAll,
    isFilled,
  };
};

export default useCategoryEvents;
