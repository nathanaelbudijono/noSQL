import cn from "@/type/clsxm";
import clsx from "clsx";
import get from "lodash.get";
import * as React from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import Typography from "../core/typography";

export type RadioProps = {
  label: string;
  name: string;
  value: string;
  readOnly?: boolean;
  hideError?: boolean;
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<"input">;

export default function Radio({
  label,
  placeholder = "",
  name,
  value,
  readOnly = false,
  hideError = false,
  validation,
  disabled,
  ...rest
}: RadioProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, name);
  return (
    <>
      <div className="flex items-center gap-2">
        <input
          {...register(name, validation)}
          {...rest}
          type="radio"
          name={name}
          id={`${name}_${value}`}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          className={cn(
            "",
            "shrink-0 cursor-pointer",
            "focus:outline-none focus:ring-0 focus:ring-offset-0",
            (readOnly || disabled) &&
              "cursor-not-allowed bg-gray-100 disabled:checked:bg-d-200",
            error && "border-danger-400 bg-danger-100"
          )}
          placeholder={placeholder}
          aria-describedby={name}
        />

        <Typography
          className={clsx((readOnly || disabled) && "cursor-not-allowed")}
          as="label"
          htmlFor={`${name}_${value}`}
          variant="p"
        >
          {label}
        </Typography>

        {!hideError && error && (
          <Typography variant="small" color="danger" className="mt-2">
            {error?.message?.toString()}
          </Typography>
        )}
      </div>
    </>
  );
}
