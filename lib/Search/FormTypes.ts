import { z } from "zod";




export const FormSchema = z.object({
    search: z.string().min(2, {
      message: "Search value must be at least 2 characters.",
    }),
  });