import { FC, PropsWithChildren, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface IBoxItem extends PropsWithChildren {
  onClick: () => void;
  color?: string;
  titleId: string;
  secondaryTitleId?: string;
}

interface IItemBoxTitle extends PropsWithChildren {
  color?: string;
  titleId: string;
}

interface IDetailsBox extends PropsWithChildren {
  className?: React.ComponentProps<"div">["className"];
  icon?: string;
  titleId?: string;
  onClick?: () => void;
  hasBackButton?: boolean;
}

export const ItemBoxTitle: FC<IItemBoxTitle> = ({ titleId, color }) => {
  const { t } = useTranslation();
  return (
    <p
      style={{ color }}
      className="text-sm q640:p-2 q1920:text-base bg-slate-100 p-1 font-bold"
    >
      {t(titleId)}
    </p>
  );
};

export const BoxItem: FC<IBoxItem> = ({
  onClick,
  titleId,
  color,
  secondaryTitleId,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className="q1920:px-2 q1920:py-2 flex w-full items-center border-t border-slate-200 px-1 py-1.5 bg-re last:border-b"
      onClick={onClick}
    >
      <div
        style={{ backgroundColor: color }}
        className="q960:mx-1 960:h-3 960:w-3 mx-0 h-2 w-2 shrink-0 rounded-full"
      />
      <p className="text-xs q960:text-sm q1920:text-base w-full truncate px-1 text-slate-900">
        {t(titleId)}
        {secondaryTitleId && (
          <span>
            {/* (<FormattedMessage id={secondaryTitleId || "empty"} />) */}
          </span>
        )}
      </p>
      <ChevronRight
        className="q1920:h-6 q1920:w-6 q960:w-5 q960:h-5 q640:w-5 q640:h-5 h-0 fill-slate-400"
      />
    </div>
  );
};

export const BoxDetailsContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="q1920:gap-4 q1920:pb-4 q1920:pt-3 q1920:px-3 q960:gap-2 q960:p-2 gap-2 p-1 flex flex-col font-medium">
      {children}
    </div>
  );
};

export const DetailsBox: FC<IDetailsBox> = ({
  className = "",
  icon = "",
  hasBackButton = false,
  titleId = "empty",
  children,
  onClick,
}) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      id="description_sidebar"
      onContextMenu={(e) => e.preventDefault()}
      className={cn(
        "font-onest animate-in fade-in-50 q1280:w-80 q960:w-[200px] q960:max-h-[420px] w-40 max-h-[340px] absolute bottom-2 right-1 top-[50%] z-20 mb-6 flex flex-col h-full translate-y-[-50%] rounded-xl bg-white font-medium shadow-xl duration-300 overflow-visible q768:overflow-hidden",
        { '-right-40 q768:right-1': !isVisible },
        className
      )}
      // avoid map beneth to be dragged
      onMouseDown={(e) => e.stopPropagation()}
      onMouseMove={(e) => e.stopPropagation()}
      onDrag={(e) => e.stopPropagation()}
      onTouchStartCapture={(e) => e.stopPropagation()}
    >
      <button onClick={() => setIsVisible(!isVisible)} className="appearance-none absolute w-8 h-8 bg-blue-700 p-1 text-white -left-8 top-[50%] rounded-l-md q768:hidden">
        {isVisible ? <ChevronsRight /> : <ChevronsLeft />}
      </button>
      <div className="flex items-center justify-between rounded-t-md bg-blue-700 q960:p-3 q640:p-2 p-1.5">
        <div className="flex max-w-full items-center">
          {hasBackButton ? (
            <ChevronLeft color="#fff" onClick={onClick} className="q1920:h-6 q1920:w-6 q640:h-5 q640:w-5 w-4 h-4 mr-1" />
          ) : (
            <svg
              data-src={icon}
              className="q1920:h-6 q1920:w-6 q960:h-5 640:w-5 w-4 h-4 mr-1"
            />
          )}
          <h5 className="q1280:text-lg q960:text-base truncate text-sm text-white">
            {t(titleId)}
          </h5>
        </div>
      </div>
      <div
        onWheelCapture={(e) => e.stopPropagation()}
        className="h-full overflow-y-auto overflow-x-hidden"
      >
        {children}
      </div>
    </div>
  );
};
