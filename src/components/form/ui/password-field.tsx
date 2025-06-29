"use client";

import * as React from "react";
import { Eye, EyeClosed, EyeOff } from "lucide-react";
import { useFieldContext } from "@/components/form/hook/useAppForm";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FieldErrors } from "@/components/form/ui/field-error";

type PasswordFieldProps = {
  label: string;
  labelHidden?: boolean;
  disableFieldError?: boolean;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "onChange"
>;

export const PasswordField = ({
  label,
  labelHidden = false,
  disableFieldError = false,
  ...inputProps
}: PasswordFieldProps) => {
  const field = useFieldContext<string>();
  const [show, setShow] = React.useState(false);

  return (
    <div className="grid gap-2">
      <div className="grid gap-1">
        <Label htmlFor={field.name} className={labelHidden ? "sr-only" : ""}>
          {label}
        </Label>

        <div className="relative">
          <Input
            id={field.name}
            type={show ? "text" : "password"}
            placeholder="••••••••"
            className="pr-10"
            aria-invalid={
              field.state.meta.isTouched && field.state.meta.errors.length > 0
            }
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            autoComplete="current-password"
            {...inputProps}
          />

          <Button
            type="button"
            variant="icon"
            size="icon"
            onClick={() => setShow((prev) => !prev)}
            className="absolute top-1/2 right-1 -translate-y-1/2 cursor-pointer"
          >
            {show ? (
              <EyeClosed className="h-3 w-3" />
            ) : (
              <Eye className="h-3 w-3" />
            )}
            <span className="sr-only">Toggle password visibility</span>
          </Button>
        </div>
      </div>

      {!disableFieldError && <FieldErrors meta={field.state.meta} />}
    </div>
  );
};
