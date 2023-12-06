import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import IconButton from "../buttons/icon-button";
import cn from "@/type/clsxm";
import { ExtractProps } from "@/type/helper";

type InfoPopoverProps = {
  children: React.ReactNode;
  classNames?: {
    content?: string;
    trigger?: string;
  };
} & ExtractProps<typeof Popover>;

export default function InfoPopover({
  classNames,
  children,
  ...rest
}: InfoPopoverProps) {
  return (
    <Popover {...rest}>
      <PopoverTrigger asChild>
        <IconButton
          variant="ghost"
          size="lg"
          className={cn(["rounded-full text-typo-icons", classNames?.trigger])}
        />
      </PopoverTrigger>
      <PopoverContent
        side="top"
        className={cn(["w-60 p-2", classNames?.content])}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
}
