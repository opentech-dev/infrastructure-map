import { lazy, Suspense } from "react";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Skeleton } from "./skeleton";

const fallback = <Skeleton className="min-w-2 min-h-2" />;

export type IconName = keyof typeof dynamicIconImports;

export interface IconProps extends Omit<LucideProps, "ref"> {
  name: IconName;
}

const LucideIcon = ({ name, ...props }: IconProps) => {
  const Icon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={fallback}>
      <Icon {...props} />
    </Suspense>
  );
};

export default LucideIcon;
