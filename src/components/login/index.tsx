"use client";

import { useAppForm } from "@/components/form/hook/useAppForm";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import { SearchIcon } from "lucide-react";
import { defaultLoginValues, LoginSchema } from "@/types/login";

export const Login = () => {
  const form = useAppForm({
    defaultValues: defaultLoginValues,
    validators: {
      onChange: LoginSchema,
    },
    onSubmit: async ({ value }) => {
      //await new Promise((res) => setTimeout(res, 1000));
      console.log("Form submitted:", value);

      form.reset();
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <form
            className="flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <div>
              <form.AppField name="email">
                {(field) => (
                  <field.TextField
                    label="Email"
                    labelHidden
                    placeholder="Email"
                    disablFieldError
                  />
                )}
              </form.AppField>
            </div>
            <div className="w-32">
              <form.AppField name="password">
                {(field) => (
                  <field.TextField
                    label="Password"
                    labelHidden
                    placeholder="Password"
                    type="password"
                    disablFieldError
                  />
                )}
              </form.AppField>
            </div>

            <form.AppForm>
              <form.SubmitButton>
                <SearchIcon className="h-4 w-4" />
                Snabb Sök
              </form.SubmitButton>
            </form.AppForm>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};
