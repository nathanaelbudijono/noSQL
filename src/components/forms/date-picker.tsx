import clsx from "clsx";
import get from "lodash.get";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import cn from "@/type/clsxm";
import Typography from "../core/typography";
import { IconType } from "react-icons";

type DatePickerProps = {
  validation?: RegisterOptions;
  label?: string | null;
  id: string;
  placeholder?: string;
  defaultYear?: number;
  defaultMonth?: number;
  defaultValue?: string;
  helperText?: string;
  readOnly?: boolean;
  hideError?: boolean;
  containerClassName?: string;
  leftIcon?: IconType | string;
  leftIconLabel?: IconType | string;
} & Omit<ReactDatePickerProps, "onChange">;

export default function DatePicker({
  validation,
  label,
  id,
  placeholder,
  defaultYear,
  defaultMonth,
  defaultValue,
  helperText,
  readOnly = false,
  hideError = false,
  disabled,
  containerClassName,
  leftIconLabel: LeftIconLabel,
  leftIcon: LeftIcon,
  ...rest
}: DatePickerProps) {
  const {
    formState: { errors },
    control,
  } = useFormContext();
  const error = get(errors, id);
  const defaultDate = new Date();
  if (defaultYear) defaultDate.setFullYear(defaultYear);
  if (defaultMonth) defaultDate.setMonth(defaultMonth);
  return (
    <div className={cn(containerClassName)}>
      {label && (
        <div className="bg-d-600 flex w-fit px-3 py-1 border border-d-600 rounded-t-lg gap-2 items-center dark:bg-n-300 dark:border-n-200">
          {LeftIconLabel && <LeftIconLabel className="text-color-100" />}
          <Typography as="label" variant="p" className="block" htmlFor={id}>
            {label}
          </Typography>
        </div>
      )}
      <Controller
        control={control}
        rules={validation}
        defaultValue={defaultValue}
        name={id}
        render={({ field: { onChange, onBlur, value } }) => (
          <div>
            <div className={clsx("relative")}>
              {LeftIcon && (
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10">
                  {LeftIcon && <LeftIcon className="text-d-600" />}
                </div>
              )}

              <ReactDatePicker
                name={id}
                onChange={onChange}
                onBlur={onBlur}
                selected={value ? new Date(value) : undefined}
                className={clsx(
                  "flex shadow-sm w-full dark:bg-slate-700",
                  label
                    ? "rounded-tr-lg rounded-bl-lg rounded-br-lg "
                    : "rounded-lg",
                  "p-2",
                  "border-gray-300",
                  LeftIcon && "pl-9",
                  (readOnly || disabled) &&
                    "cursor-not-allowed border-gray-300 bg-d-400 focus:border-gray-300 focus:ring-0",
                  error &&
                    "border-red-500 focus:border-red-500 focus:ring-red-500"
                )}
                placeholderText={placeholder}
                aria-describedby={id}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                openToDate={value ? new Date(value) : defaultDate}
                dateFormat="dd/MM/yyyy"
                readOnly={readOnly}
                disabled={disabled}
                {...rest}
              />
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
        )}
      />
    </div>
  );
}
