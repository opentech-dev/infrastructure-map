import classNames from "clsx";
// import { FormattedMessage } from "react-intl";
import { useSearchParams } from "react-router-dom";

// import { SvgIcon } from "@/components/SvgIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useMemo, useState } from "react";
import useLanguage from "@/hooks/use-language";
import { useGetInfrastructuresQuery } from "@/pages/map/api";
import { baseUrl } from "@/lib/config";
import { useTranslation } from "react-i18next";
import InfoBox from "../info-box";
import { ChevronLeft, ChevronRight } from "lucide-react";

// import InfoBox, { Layer } from "./InfoBox";
// import { defaultNavItems, NavItem } from "./NavItems";

// add NavItem prop to component prop
type Props = {
  // collapsed: boolean;
  // navItems?: [];
  // setCollapsed(collapsed: boolean): void;
  // shown: boolean;
  // showInfoBox: boolean;
  // setShowInfoBox(value: boolean): void;
};

const Sidebar = (
  _: // collapsed,
  // navItems = [],
  // shown,
  // setCollapsed,
  // showInfoBox,
  // setShowInfoBox,
  Props
) => {
  const [collapsed, setCollapsed] = useState(false);
  const [showSidebar] = useState(true);
  const [showInfoBox, setShowInfoBox] = useState(true);
  
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();

  const { language } = useLanguage();

  const { data } = useGetInfrastructuresQuery(language.value);

  const activeMenuItem = searchParams.get("layer") || "roads";
  const activeMenuItemContents = useMemo(() => {
    return data?.data.find((item) => item.attributes.slug === activeMenuItem);
  }, [data, activeMenuItem]);

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  const handleItemClick = (layer: string) => {
    setSearchParams({ layer });
    if (window.innerWidth > 960 || activeMenuItem === layer) {
      setShowInfoBox(true);
    }
  };


  if (!data) {
    return null
  }

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      id="menu_sidebar"
      className={classNames({
        "bg-blue-600 text-zinc-50 left-1 max-w-min top-[50%] translate-y-[-50%] absolute rounded-[12px] z-[99999] shadow-xl q640:left-2":
          true,
        "-translate-x-full": !showSidebar,
      })}
    >
      <div
        className={classNames({
          "sticky inset-0 flex h-full flex-col justify-between": true,
        })}
      >
        {/* logo and collapse button */}
        <div
          className={classNames({
            "flex items-center p-1 q640:p-2": true,
            "justify-end": !collapsed,
            "justify-center": collapsed,
          })}
        >
          <div
            className={classNames({
              "flex w-full items-center": true,
              "justify-center": collapsed,
              "justify-between": !collapsed,
            })}
          >
            {!collapsed && (
              <span className="ml-5 overflow-hidden whitespace-nowrap text-2xl">
                {/* <FormattedMessage id="menu_title" /> */}
              </span>
            )}
            <button
              className="grid place-content-center rounded-[8px] align-middle p-1 opacity-100 hover:bg-blue-700"
              onClick={handleCollapseToggle}
            >
              {collapsed ? (
                <ChevronRight 
                  color="white"
                  className="q960:h-6 q960:w-6 q640:h-5 q640:w-5 h-4 w-4"
                />
              ) : (
                <ChevronLeft 
                  color="white"
                  className="q960:h-6 q960:w-6 q640:h-5 q640:w-5 h-4 w-4"
                />
              )}
            </button>
          </div>
        </div>
        <div className="h-[1px] bg-white/30"></div>
        <nav className="grow">
          <ul
            className={classNames({
              "flex flex-col q960:gap-2 q960:px-2 q640:my-1 q640:gap-1 p-1":
                true,
            })}
          >
            {data?.data.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => handleItemClick(item.attributes.slug)}
                  className={classNames({
                    "bg-blue-700": activeMenuItem === item.attributes.slug,
                    "flex text-indigo-100 hover:bg-blue-500 cursor-pointer rounded-lg overflow-hidden":
                      true,
                  })}
                >
                  <div
                    className={classNames({
                      "flex items-center justify-center w-min":
                        true,
                    })}
                  >
                    <Avatar className="p-1 w-8 h-8">
                      <AvatarImage
                        src={
                          baseUrl + item.attributes.icon?.data?.attributes?.url
                        }
                      />
                      <AvatarFallback>{item.attributes.name}</AvatarFallback>
                    </Avatar>
                    {!collapsed && (
                      <span className="q640:text-base text-sm overflow-hidden pr-2 whitespace-nowrap text-white">
                        {t(`infrastructure.id_${item.attributes.slug}`)}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {activeMenuItemContents && showInfoBox && (
        <InfoBox
          content={activeMenuItemContents?.attributes?.description}
          title={activeMenuItemContents?.attributes?.name}
          onClose={() => setShowInfoBox(false)}
        />
      )}
    </div>
  );
};
export default Sidebar;
