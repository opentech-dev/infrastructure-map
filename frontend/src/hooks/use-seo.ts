import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useLanguage from "./use-language";

const useSeo = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("navbar_title");
  }, [language.value]);

  return null;
};

export default useSeo;
