"use client";
import { useAppForm } from "@/components/form/hook/useAppForm";
import { defaultLoginValues, LoginSchema } from "@/types/login";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export const Login = () => {
  const form = useAppForm({
    defaultValues: defaultLoginValues,
    validators: {
      onChange: LoginSchema,
    },
    onSubmit: async ({ value }) => {
      await new Promise((res) => setTimeout(res, 1000));
      console.log("Form submitted:", value);

      form.reset();
    },
  });

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
      >
        <CardContent className="">
          <div className="flex w-full flex-col gap-6">
            <form.AppField name="email">
              {(field) => (
                <field.TextField
                  label="Email"
                  placeholder="Email"
                  disablFieldError
                />
              )}
            </form.AppField>

            <form.AppField name="password">
              {(field) => (
                <field.TextField
                  label="Password"
                  placeholder="Password"
                  type="password"
                  disablFieldError
                />
              )}
            </form.AppField>
          </div>
          <div className="pt-6">
            <form.AppForm>
              <form.SubmitButton>Login</form.SubmitButton>
            </form.AppForm>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};
