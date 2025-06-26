import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type TLogin = z.infer<typeof LoginSchema>;

export const defaultLoginValues = {
  email: "",
  password: "",
} as TLogin;
