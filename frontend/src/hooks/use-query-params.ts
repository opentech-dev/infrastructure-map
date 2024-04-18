import { isString } from "lodash";
import { useSearchParams } from "react-router-dom";
import { QueryParamConfig, StringParam } from "serialize-query-params";

type NewValueType<D> = D | ((latestValue: D) => D);
type UrlUpdateType = "replace" | "push" | undefined;
type UseSearchParam<D, D2 = D> = [
  D2,
  (newValue: NewValueType<D>, updateType?: UrlUpdateType) => void
];

export default function useQueryParams<D, D2 = D>(
  name: string,
  config: QueryParamConfig<D, D2> = StringParam as QueryParamConfig<any>
): UseSearchParam<D, D2> {
  const [searchParams, setSearchParams] = useSearchParams();
  // const { navigator } = useContext(UNSAFE_NavigationContext)

  const setNewValue = (
    valueOrFn: NewValueType<D>,
    updateType?: UrlUpdateType
  ): void => {
    let newValue;
    const value = searchParams.get(name);
    if (typeof valueOrFn === "function") {
      // eslint-disable-next-line @typescript-eslint/ban-types
      newValue = (valueOrFn as Function)(config.decode(value));
    } else {
      newValue = valueOrFn;
    }
    const encodedValue = config.encode(newValue);

    const params = new URLSearchParams(location.search);

    if (isString(encodedValue)) {
      params.set(name, encodedValue);
    } else {
      params.delete(name);
    }

    setSearchParams(params, { replace: updateType === "replace" });
  };

  const decodedValue = config.decode(searchParams.get(name));
  return [decodedValue, setNewValue];
}
