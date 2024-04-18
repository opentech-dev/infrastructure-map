import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { TileLayer } from "react-leaflet";
import { useTranslation } from "react-i18next";

export function TileSwitch({
  tileUrl,
  attribution,
  accessToken,
}: {
  tileUrl: string;
  attribution: string;
  accessToken?: string;
}) {
  const { t } = useTranslation();
  const [enabled, setEnabled] = useState(true);

  const handleSwitch = (value: boolean) => {
    setEnabled(value);
  };

  return (
    <>
      {enabled && (
        <TileLayer
          url={tileUrl}
          attribution={attribution}
          accessToken={accessToken}
        />
      )}
      <div
        id="tile_switch"
        className="absolute bottom-0 z-[9999999] flex items-center space-x-2 p-3"
      >
        <Switch
          className="data-[state=checked]:bg-blue-700 data-[state=unchecked]:bg-slate-400 [&_span]:bg-white"
          onCheckedChange={handleSwitch}
          checked={enabled}
          id="mode"
        />
        <Label
          htmlFor="mode"
          className="hidden q960:block text-sm text-slate-900"
        >
          {t("tiles.switch_label")}
        </Label>
      </div>
    </>
  );
}
