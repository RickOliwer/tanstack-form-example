"use client";
import { useAppForm } from "@/components/form/hook/useAppForm";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { defaultSignUpValues, SignUpSchema } from "@/types/sign-up";

export const SignUp = () => {
  const form = useAppForm({
    defaultValues: defaultSignUpValues,
    validators: {
      onChange: SignUpSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        // Simulate API call
        await new Promise((res) => setTimeout(res, 1000));
        console.log("Form submitted:", value);

        // Show success message or redirect
        // router.push('/welcome') or show toast
        form.reset();
      } catch (error) {
        // Handle submission errors
        console.error("Sign up failed:", error);
      }
    },
  });

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>
          Join us today! Fill in your details to get started.
        </CardDescription>
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
            <div className="grid grid-cols-2 gap-4">
              <form.AppField name="firstName">
                {(field) => (
                  <field.TextField
                    label="First Name"
                    placeholder="First Name"
                  />
                )}
              </form.AppField>

              <form.AppField name="lastName">
                {(field) => (
                  <field.TextField label="Last Name" placeholder="Last Name" />
                )}
              </form.AppField>
            </div>

            <form.AppField name="email">
              {(field) => <field.TextField label="Email" placeholder="Email" />}
            </form.AppField>

            <form.AppField name="password">
              {(field) => (
                <field.TextField
                  label="Password"
                  placeholder="Password"
                  type="password"
                />
              )}
            </form.AppField>
            <form.AppField name="confirmPassword">
              {(field) => (
                <field.TextField
                  label="Confirm Password"
                  placeholder="Confirm Password"
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
      <CardFooter>
        <CardAction>
          <span className="text-muted-foreground text-sm">
            Already have an account?{" "}
            <Button variant="link" className="h-auto p-0 font-semibold">
              Sign In
            </Button>
          </span>
        </CardAction>
      </CardFooter>
    </Card>
  );
};
