import React from "react";
import { useFieldContext } from "@/components/form/hook/useAppForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldErrors } from "@/components/form/ui/field-error";

type TextFieldProps = {
  label: string;
  labelHidden?: boolean;
  disablFieldError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextField = ({
  label,
  labelHidden = false,
  disablFieldError = false,
  ...inputProps
}: TextFieldProps) => {
  const field = useFieldContext<string>();

  return (
    <div className="grid gap-2">
      <div className="grid gap-1">
        <Label htmlFor={field.name} className={labelHidden ? "sr-only" : ""}>
          {label}
        </Label>
        <Input
          id={field.name}
          aria-invalid={
            field.state.meta.isTouched && field.state.meta.errors.length > 0
          }
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          {...inputProps}
        />
      </div>
      {!disablFieldError && <FieldErrors meta={field.state.meta} />}
    </div>
  );
};
