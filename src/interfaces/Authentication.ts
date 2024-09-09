import { z } from "zod";
import { AuthenticationSchema } from "../Schemas";

export type RegisterData = z.infer<typeof AuthenticationSchema.RegisterSchema>;
export type LoginData = z.infer<typeof AuthenticationSchema.LoginSchema>;

export type AuthResponse = {
  message: string;
};
