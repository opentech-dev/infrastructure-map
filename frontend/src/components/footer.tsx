import { baseUrl } from "@/lib/config";
import i18n from "@/lib/i18";
import { useTranslation } from "react-i18next";
import { Skeleton } from "./ui/skeleton";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center">
      <footer
        id="footer"
        className="q960:px-4 px-1.5 pt-0 q375:pt-2 flex flex-col q375:flex-row w-full max-w-[1600px] items-center 1960:gap-x-8 gap-x-2 py-2 bg-white text-blue-700 shadow-sm"
      >
        {i18n.exists("footer.logo") ? (
          <img
            className="max-w-[140px] q1920:h-[68px] q960:h-14 h-12 object-contain rounded-none"
            src={baseUrl + t("footer.logo")}
            alt="usaid-logo"
          />
        ) : (
          <Skeleton className="w-full max-w-[140px] q1920:h-[68px] q960:h-14 q640:h-14 h-[80px] object-contain rounded-none" />
        )}
        <p className="font-onest-medium q1680:text-sm q960:text-xs text-[10px] max-w-[1400px] font-light">
          {i18n.exists("footer.title") ? (
            t("footer.title")
          ) : (
            <Skeleton className="flex h-4 w-[800px]" />
          )}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
