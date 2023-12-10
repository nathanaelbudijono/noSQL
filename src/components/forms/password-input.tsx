"use client";

import cn from "@/type/clsxm";
import * as React from "react";

import { IoEyeOffOutline } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";

export interface passwordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, passwordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const togglePassword = () => setShowPassword((prev) => !prev);
    return (
      <div className="relative ">
        <input
          type={showPassword ? "text" : "password"}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />

        <div className=" absolute inset-y-0 right-0 flex items-center pr-3 z-[100]">
          <button onClick={togglePassword}>
            {showPassword ? (
              <IoEyeOffOutline className="text-black" />
            ) : (
              <IoMdEye className="text-black" />
            )}
          </button>
        </div>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
