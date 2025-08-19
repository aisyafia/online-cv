import { z } from "zod";

export const contactFormSchema = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  email: z.email("Please enter a valid email"),
  reason: z.array(z.string()).nonempty("Please select at least one reason"),
  message: z.string().min(1, "Message cannot be empty"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
