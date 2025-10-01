import Link from "next/link";
import React from "react";

import { Link as CustomLink } from "./Navbar";

export interface NavlinksProps {
  links: CustomLink[];
}

export function Navlinks({ links }: NavlinksProps) {
  return (
    <div className="grow flex justify-end gap-5 pr-5 text-2xl max-sm:hidden">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-red-200 transition-colors hover-drop focus:text-red-300 font-bold"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
