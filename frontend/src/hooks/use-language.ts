import i18n from "@/lib/i18";
import { language, setLanguage } from "@/services/language-service";
import { useGetLocalesQuery } from "@/store/api/shared";
import { useSignals } from "@preact/signals-react/runtime";
import { useEffect } from "react";

const useLanguage = () => {
  useSignals();
  const { isLoading, data } = useGetLocalesQuery();
  const lng = language.value;

  const changeLanguage = (lng: string) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    if (data) {
      const defaultLang = data.find((lng) => lng.isDefault);
      const langCodes = data.map((lng) => lng.code);
      const langToState = langCodes.includes(lng)
        ? lng
        : defaultLang?.code ?? "en";
      i18n.loadLanguages(langCodes);
      changeLanguage(langToState);
    }
  }, [data]);

  return {
    isLoading,
    language,
    changeLanguage: changeLanguage,
    languages: data,
  };
};

export default useLanguage;
