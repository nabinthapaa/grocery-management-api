import { z } from "zod";

export const RegisterSchema = z
  .object({
    username: z.string().min(4),
    name: z.string().min(4),
    password: z.string().min(8),
    email: z.string().email(),
  })
  .strip();

export const LoginSchema = z
  .object({
    email: z.string().email().min(4),
    password: z.string().min(8),
  })
  .strip();
