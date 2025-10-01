"use client"; // hvis brukeren skal kunne klikke og interagere med ting

import Link from "next/link";
import { NavlinksProps } from "./Navlinks";
import { Icon } from "@iconify/react";
import { useState } from "react";

export function MobileNavlinks({ links }: NavlinksProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="grow flex justify-end gap-5 text-2xl sm:hidden">
      <Icon
        icon={"fxemoji:hamburger"}
        onClick={() => {
          setOpen(!open);
        }}
      />{" "}
      {/* !open motsatt av open verdi*/}
      {open && (
        <div className="absolute z-10 flex flex-col bg-red-300 rounded-lg pl-4 top-10 ">
          {links.map((link) => {
            return (
              <Link key={link.href} href={link.href}>
                {link.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
