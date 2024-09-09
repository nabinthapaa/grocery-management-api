import { ZodSchema, z, ZodError } from "zod";
import { ValidationErrors } from "../interfaces";

export function validate<T>(
  Schema: ZodSchema,
  data: z.infer<typeof Schema>,
): ValidationErrors<T> {
  try {
    const parsedData: T = Schema.parse(data);
    return { data: parsedData, success: true, errors: null };
  } catch (e) {
    if (e instanceof ZodError) {
      return {
        success: false,
        errors: e.errors.flat().map((err) => {
          return {
            error: err.path[0],
            message: err.message,
          };
        }),
        data: null,
      };
    }
    return { success: false, errors: null, data: null };
  }
}
