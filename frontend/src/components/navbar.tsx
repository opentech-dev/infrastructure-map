import clsx from "clsx";
import LanguageSwitch from "@/components/language-switch";
import Typography from "@/components/typography";
import { useTranslation } from "react-i18next";
import { baseUrl } from "@/lib/config";
import i18n from "@/lib/i18";
import { Skeleton } from "./ui/skeleton";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav
      onContextMenu={(e) => e.preventDefault()}
      id="navbar"
      className={clsx({
        "bg-slate-100 text-zinc-500": true, // colors
        "flex items-center flex-wrap": true, // layout
        "top-0 z-10 w-full ": true, //positioning & styling
      })}
    >
      <div className="relative flex w-full items-center justify-end px-12">
        <div className="inset-x-0 flex w-full items-center justify-center gap-8 px-2">
          {i18n.exists("header.logo") ? (
            <img
              className="q1920:h-16 h-12 object-contain rounded-none"
              src={baseUrl + t("header.logo")}
              alt="partners"
            />
          ) : (
            <Skeleton className="w-full max-w-[540px] q1920:h-[46px] q960:h-14 q640:h-14 h-[46px] object-contain rounded-none" />
          )}
        </div>
        <div className="z-[1] hidden q960:block h-full">
          <LanguageSwitch className="z-[999]" />
        </div>
      </div>
      <div className="flex w-full">
        <div
          id="navbar_title"
          className={clsx({
            "bg-white text-zinc-500": true, // colors
            "flex items-center justify-center grow": true, // layout
            "sticky top-0 z-10 w-full px-8 q375:px-12 q480:py-2.5 py-1.5 shadow-sm": true, //positioning & styling
          })}
        >
          <Typography
            variant="title"
            className="self-center q960:text-xl q640:text-lg q375:text-base text-sm text-center leading-5 text-blue-700"
          >
            {i18n.exists("header.title") ? (
              t("header.title")
            ) : (
              <Skeleton className="h-4 w-[500px]" />
            )}
          </Typography>
        </div>
        <div className="block q960:hidden z-10 bg-white">
          <LanguageSwitch className="z-[999]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
