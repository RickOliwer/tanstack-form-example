import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type TLogin = z.infer<typeof LoginSchema>;

export const defaultLoginValues = {
  email: "",
  password: "",
} as TLogin;
