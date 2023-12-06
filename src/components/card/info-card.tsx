import cn from "@/type/clsxm";
import * as React from "react";
import { IconType } from "react-icons";
import Skeleton from "../core/skeleton";

const infoCardVariant = ["primary", "warning", "success", "outline"] as const;

type InfoCardVariant = (typeof infoCardVariant)[number];

type InfoCardProps = {
  icon?: IconType;
  iconClassNames?: string;
  isLoading?: boolean;
  label?: string;
  desc?: string;
  variant: InfoCardVariant;
} & React.ComponentPropsWithoutRef<"div">;

export default function InfoCard({
  className,
  icon: Icon,
  isLoading = false,
  label,
  desc,
  variant = "primary",
  ...rest
}: InfoCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-3 shadow-md",
        "flex items-center gap-3  text-color-100",
        "transition-colors duration-100",
        [
          variant === "primary" && ["bg-d-500 dark:bg-n-200"],
          variant === "warning" && ["bg-amber-500"],
          variant === "success" && ["bg-green-500"],
          variant === "outline" && [
            "bg-clip-padding backdrop-filter backdrop-blur-sm border border-d-400 text-color-100",
            "hover:bg-d-400 hover:text-typography-800 active:bg-typo-divider disabled:bg-typo-divider",
            "dark:hover:bg-n-400 dark:border-n-500",
          ],
        ]
      )}
      {...rest}
    >
      {Icon && (
        <div
          className={cn("p-2 bg-gray-200 rounded-lg", [
            variant === "primary" && ["bg-d-600 text-color-100 dark:bg-n-300"],
            variant === "warning" && ["bg-amber-600 text-color-100"],
            variant === "success" && ["bg-green-600 text-color-100"],
            variant === "outline" && [
              "text-typography-800 dark:bg-n-500 dark:text-color-100",
            ],
          ])}
        >
          <Icon size={24} />
        </div>
      )}
      {isLoading ? (
        <section className="flex flex-col gap-2 w-full">
          <Skeleton className="w-1/2 h-5" />
          <Skeleton className="h-5" />
        </section>
      ) : (
        <section>
          <p className="leading-7">{label}</p>
          <p className="text-sm font-medium leading-none">{desc}</p>
        </section>
      )}
    </div>
  );
}
