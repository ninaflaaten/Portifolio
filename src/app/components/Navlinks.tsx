import Link from "next/link";
import React from "react";


import { Link as CustomLink } from "./Navbar";

export interface NavlinksProps {
  links: CustomLink[];
}

export function Navlinks({ links }: NavlinksProps) {
  return (
    <div className="border grow flex justify-end gap-5 pr-5 text-2xl max-sm:hidden">
    
      {links.map((link) => {
        return <Link href={link.href}>{link.title}</Link>;
      })}
    </div>
  );
}
