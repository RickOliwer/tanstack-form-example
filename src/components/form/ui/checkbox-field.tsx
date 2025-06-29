"use client";

import React from "react";
import { useFieldContext } from "@/components/form/hook/useAppForm";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FieldErrors } from "@/components/form/ui/field-error";

type CheckboxFieldProps = {
  label: string;
  labelHidden?: boolean;
  disablFieldError?: boolean;
} & React.ComponentProps<typeof Checkbox>;

export const CheckboxField = ({
  label,
  labelHidden = false,
  disablFieldError = false,
  ...checkboxProps
}: CheckboxFieldProps) => {
  const field = useFieldContext<boolean>();

  return (
    <div className="grid gap-2">
      <div className="flex items-center space-x-2">
        <Checkbox
          id={field.name}
          aria-invalid={
            field.state.meta.isTouched && field.state.meta.errors.length > 0
          }
          checked={field.state.value}
          onCheckedChange={(checked) => field.handleChange(checked === true)}
          onBlur={field.handleBlur}
          {...checkboxProps}
        />
        <Label htmlFor={field.name} className={labelHidden ? "sr-only" : ""}>
          {label}
        </Label>
      </div>
      {!disablFieldError && <FieldErrors meta={field.state.meta} />}
    </div>
  );
};
