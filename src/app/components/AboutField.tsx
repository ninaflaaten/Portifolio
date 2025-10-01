import z from "zod";
import { Icon } from "@iconify/react";
import { FC, ReactNode } from "react";

// export interface AboutFieldProps {
//   // type og interface (ish samme greia)
//   title: string;
//   description: string;
//   icon: string;
//   number?: number;
// }

export type AboutFieldType = z.infer<typeof AboutFieldSchema>; // vi bruker zod for typer for flere steder i koden (f.eks. bruker)
// samme som den over bare med zod^
const AboutFieldSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  number: z.number().optional(),
});

export const AboutField: FC<AboutFieldType> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-row">
      <div className="text-2xl">
        <Icon icon={icon}></Icon>
      </div>
      <div className="pb-4">
        <h2 className="font-bold pl-2 text-2xl">{title}</h2>
        <p className="text-xl -ml-5">{description}</p>
      </div>
    </div>
  );
};
