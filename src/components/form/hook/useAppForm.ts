import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { TextField } from "../ui/text-field";
import { SubmitButton } from "../ui/submit-button";

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
