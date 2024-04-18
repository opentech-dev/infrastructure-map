import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useLanguage from "@/hooks/use-language";
import { cn } from "@/lib/utils";

const LanguageSwitch = ({
  className = "",
}: {
  className?: React.ComponentProps<"div">["className"];
}) => {
  const { language, isLoading, changeLanguage, languages } = useLanguage();

  return (
    <div className={cn('h-full', className)}>
      <Select
        disabled={isLoading}
        value={language.value}
        onValueChange={changeLanguage}
      >
        <SelectTrigger className="w-[60px] h-full bg-transparent border-none rounded-none px-1 justify-center text-blue-700 text-base hover:bg-slate-200">
          <SelectValue asChild>
            <span className="uppercase">{language.value}</span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent align="end">
          <SelectGroup>
            {languages?.map((lang) => (
              <SelectItem key={lang.code} value={lang.code}>
                {lang.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitch;
