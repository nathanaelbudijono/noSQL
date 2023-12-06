import cn from "@/type/clsxm";
import * as React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Collapse } from "react-collapse";

const collapsibleCardVariant = ["primary", "outline"];
type CollapsibleCardVariant = (typeof collapsibleCardVariant)[number];

type CollapsibleCardProps = {
  open?: boolean;
  title?: string;
  desc?: string;
  toggle: () => void;
  variant: CollapsibleCardVariant;
} & React.ComponentPropsWithoutRef<"div">;
export default function CollapsibleCard({
  className,
  open = false,
  toggle,
  title,
  desc,
  variant = "primary",
  ...rest
}: CollapsibleCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-3 shadow-md bg-grey-100 mb-4",
        "transition-colors duration-100",
        [
          variant === "primary" && [
            "bg-d-500 text-color-100",
            "border border-d-600",
            "dark:bg-n-200 border-n-300",
            "hover:bg-d-600 hover:border-d-500",
          ],
          variant === "outline" && [
            "bg-clip-padding backdrop-filter backdrop-blur-sm border border-d-400 text-color-100",
            "hover:bg-d-400 hover:text-typography-800 active:bg-typo-divider disabled:bg-typo-divider",
            "dark:hover:bg-n-400 dark:border-n-500",
          ],
        ]
      )}
      {...rest}
    >
      <div className="flex justify-between items-center">
        <p className="text-lg">{title}</p>
        <button onClick={toggle}>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <Collapse isOpened={open}>
        <div>
          <p className="text-sm font-medium leading-none mt-2">{desc}</p>
        </div>
      </Collapse>
    </div>
  );
}
