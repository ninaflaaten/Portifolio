import z from "zod";
import { Icon } from "@iconify/react";
import { FC } from "react";
import { cn } from "../../../utils/cn.js";

export const footerFieldSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(), // 👈 lagt til igjen
});

export type FooterFieldType = z.infer<typeof footerFieldSchema>;

export const FooterField: FC<FooterFieldType> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className={cn("space-y-2 text-white")}>
      <div className="flex items-center gap-2">
        {icon && <Icon icon={icon} className="text-2xl md:text-3xl" />}
        <h3 className="font-extrabold text-2xl md:text-3xl leading-tight">
          {title}
        </h3>
      </div>

      <p className="text-lg md:text-xl leading-relaxed text-white/90 break-words">
        {description}
      </p>
    </div>
  );
};
