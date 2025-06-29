import { useFieldContext } from "@/components/form/hook/useAppForm";
import { FieldErrors } from "@/components/form/ui/field-error";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type SelectFieldProps = {
  label: string;
  labelHidden?: boolean;
  options: SelectOption[];
  placeholder?: string;
  allowEmpty?: boolean;
  emptyLabel?: string;
  disablFieldError?: boolean;
};

export const SelectField = ({
  label,
  labelHidden = false,
  options,
  placeholder,
  allowEmpty = false,
  emptyLabel = "No selection",
  disablFieldError = false,
}: SelectFieldProps) => {
  const field = useFieldContext<string | undefined>();

  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <Label htmlFor={field.name} className={labelHidden ? "sr-only" : ""}>
          {label}
        </Label>
        <Select
          value={field.state.value ?? "undefined"}
          onValueChange={(value) => {
            field.handleChange(value === "undefined" ? undefined : value);
          }}
        >
          <SelectTrigger
            className="mb-0"
            id={field.name}
            onBlur={field.handleBlur}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {allowEmpty && (
              <SelectItem value="undefined" key="empty">
                <em>{emptyLabel}</em>
              </SelectItem>
            )}
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {!disablFieldError && <FieldErrors meta={field.state.meta} />}
    </div>
  );
};
