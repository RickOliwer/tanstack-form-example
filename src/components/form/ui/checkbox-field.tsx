"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { FieldErrors } from "./field-error";
import { useFieldContext } from "../hook/useAppForm";

export const CheckboxField = () => {
  const field = useFieldContext();

  return (
    <div className="space-y-2">
      <Checkbox
        id={field.name}
        checked={field.state.value as boolean}
        onCheckedChange={(checked) => field.handleChange(checked)}
        onBlur={field.handleBlur}
        aria-invalid={field.state.meta.errors.length > 0}
      />
      <FieldErrors meta={field.state.meta} />
    </div>
  );
};
