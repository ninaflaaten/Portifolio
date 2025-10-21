import z from "zod";

const FooterItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  number: z.string().optional(),
  className: z.string().optional(),
});

export type FooterItem = z.infer<typeof FooterItemSchema>;
