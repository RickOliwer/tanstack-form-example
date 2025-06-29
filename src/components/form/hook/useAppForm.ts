import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { TextField } from "../ui/text-field";
import { CheckboxField } from "../ui/checkbox-field";
import { SubmitButton } from "../ui/submit-button";
import { PasswordField } from "../ui/password-field";
import { SelectField } from "../ui/select-field";

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    CheckboxField,
    PasswordField,
    SelectField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
