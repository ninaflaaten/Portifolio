// utils/cn.js or lib/utils.js
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
