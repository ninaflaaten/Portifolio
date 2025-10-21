import z from "zod";
import { Icon } from "@iconify/react";
import { FC } from "react";
import { cn } from "../../../utils/cn.js";

export type AboutFieldType = z.infer<typeof aboutFieldSchema>; // vi bruker zod for typer for flere steder i koden (f.eks. bruker)

// samme som den over bare med zod^
export const aboutFieldSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  number: z.number().optional(),
  className: z.string().optional(),
  size: z.string().optional(),
  padding: z.string().optional(),
});

export const AboutField: FC<AboutFieldType> = ({
  title,
  description,
  icon,
  number,
  className,
  size,
  padding,
}) => {
  return (
    <div className={cn("flex flex-row p-2", className)}>
      <div className={cn(size)}>
        <Icon icon={icon}></Icon>
      </div>
      <div className="pb-4">
        <h2 className="font-bold pl-2 text-2xl">{title}</h2>
        <div></div>
        <p className={cn("text-xl", padding)}>{description}</p>
        <p className="text-xl -ml-5">{number}</p>
      </div>
    </div>
  );
};
