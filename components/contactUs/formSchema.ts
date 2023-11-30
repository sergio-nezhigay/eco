// formSchema.ts
import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Wrong Fullname",
  }),
  email: z.string().email({
    message: "Wrong Email",
  }),
  phone: z.string().min(2, {
    message: "Wrong Phone",
  }),
  message: z.string(),
});

export default formSchema;
