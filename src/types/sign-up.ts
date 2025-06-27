import { z } from "zod";
export const CountryOptions = [
  { value: "Sweden", label: "Sweden" },
  { value: "Norway", label: "Norway" },
  { value: "Denmark", label: "Denmark" },
  { value: "Finland", label: "Finland" },
];

export const country = z
  .union([
    z.literal("Sweden"),
    z.literal("Norway"),
    z.literal("Denmark"),
    z.literal("Finland"),
  ])
  .optional();

export const SignUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
  terms: z.boolean(),
  privacyPolicy: z.boolean(),
  newsletter: z.boolean(),
  country: country,
});

export type TSignUp = z.infer<typeof SignUpSchema>;

export const defaultSignUpValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  terms: false,
  privacyPolicy: false,
  newsletter: false,
  country: undefined,
} as TSignUp;
