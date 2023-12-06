import cn from "@/type/clsxm";
import * as React from "react";

const BoxVariant = ["primary"] as const;
const BoxSize = ["base"] as const;

type BoxProps = {
  variant: (typeof BoxVariant)[number];
  size?: (typeof BoxSize)[number];
} & React.ComponentPropsWithRef<"div">;

export default function Box({
  variant,
  size = "base",
  className,
  ...rest
}: BoxProps) {
  return (
    <div
      className={cn(
        "rounded-[30px] absolute bottom-10 -right-52 rotate-[40deg]",
        [
          variant === "primary" && [
            "bg-gradient-to-r from-primary-400 to-primary-100",
            "dark:from-tertiary-300 dark:to-tertiary-400",
          ],
        ],
        [
          size === "base" && [
            "w-[430px] sm:w-[600px] md:w-[650px] ",
            "h-[280px] sm:h-[230px] md:h-[260px]",
          ],
        ],
        className
      )}
      {...rest}
    ></div>
  );
}
