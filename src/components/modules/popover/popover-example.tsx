import * as React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import IconButton from "@/components/buttons/icon-button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/popover/popover";
import { ExtractProps } from "@/type/helper";
import ButtonLink from "@/components/links/button-links";

type ExamplePopoverProps = ExtractProps<typeof Popover>;

export default function ExamplePopover({ ...rest }: ExamplePopoverProps) {
  return (
    <Popover {...rest}>
      <PopoverTrigger asChild>
        <IconButton
          variant="ghost"
          size="lg"
          className="rounded-full"
          icon={RiAccountCircleFill}
        />
      </PopoverTrigger>
      <PopoverContent side="bottom">
        <div className="flex justify-center">
          <ButtonLink
            size="base"
            variant="ghost"
            href="/"
            className="text-black w-full"
          >
            Logout
          </ButtonLink>
        </div>
      </PopoverContent>
    </Popover>
  );
}
