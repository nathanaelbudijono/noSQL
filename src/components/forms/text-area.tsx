import clsx from "clsx";
import get from "lodash.get";
import * as React from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { IconType } from "react-icons";
import Typography from "../core/typography";

export type InputProps = {
  label?: string | null;
  rows?: number;
  id: string;
  placeholder?: string;
  helperText?: string;
  readOnly?: boolean;
  hideError?: boolean;
  validation?: RegisterOptions;
  leftIconLabel?: IconType | string;
  rightNode?: React.ReactNode;
  containerClassName?: string;
} & React.ComponentPropsWithoutRef<"textarea">;

export default function TextAreaInput({
  label,
  placeholder = " ",
  helperText,
  rows = 5,
  id,
  disabled,
  readOnly = false,
  hideError = false,
  validation,
  leftIconLabel: LeftIconLabel,
  rightNode,
  containerClassName,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, id);
  return (
    <div className={containerClassName}>
      {label && (
        <div className="bg-d-600 flex w-fit px-3 py-1 border border-d-600 rounded-t-lg gap-2 items-center dark:bg-n-300 dark:border-n-200">
          {LeftIconLabel && <LeftIconLabel className="text-color-100 " />}
          <Typography as="label" variant="p" className="block" htmlFor={id}>
            {label}
          </Typography>
        </div>
      )}
      <div className={clsx("relative")}>
        <textarea
          {...register(id, validation)}
          {...rest}
          name={id}
          rows={rows}
          id={id}
          readOnly={readOnly}
          disabled={disabled}
          className={clsx(
            "flex w-full  shadow-sm dark:bg-slate-700",
            label ? "rounded-tr-lg rounded-bl-lg rounded-br-lg" : "rounded-lg",
            "py-2 px-2",
            "border-gray-300",
            (readOnly || disabled) &&
              "cursor-not-allowed border-gray-300 disabled:bg-gray-400 focus:border-gray-300 focus:ring-0 ",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            rightNode && "pr-10"
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />
        {rightNode && (
          <div className="absolute top-0 right-0 dark:text-color-100 flex items-center pr-3 text-d-600">
            {rightNode}
          </div>
        )}
      </div>
      {helperText && (
        <Typography variant="small" className="mt-2">
          {helperText}
        </Typography>
      )}
      {!hideError && error && (
        <Typography variant="small" color="danger" className="mt-2">
          {error?.message?.toString()}
        </Typography>
      )}
    </div>
  );
}
