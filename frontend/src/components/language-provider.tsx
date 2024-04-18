import { FC, PropsWithChildren } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18";

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n} defaultNS={"translation"}>
      {children}
    </I18nextProvider>
  );
};

export default LanguageProvider;
