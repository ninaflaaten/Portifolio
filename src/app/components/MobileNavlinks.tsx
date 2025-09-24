"use client"; // hvis brukeren skal kunne klikke og interagere med ting

import Link from "next/link";
import { NavlinksProps } from "./Navlinks";
import { Icon } from "@iconify/react";
import { useState } from "react";

export function MobileNavlinks({ links }: NavlinksProps) {
  const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <div className="grow flex justify-end gap-5 pr-5 text-2xl sm:hidden">
      <Icon
        icon={"fxemoji:hamburger"}
        onClick={() => {
          setOpen(!open);
          setCounter(counter + 1);
        }}
      />{" "}
      {/* !open motsatt av open verdi*/}
      {open && (
        <div className="absolute z-10 flex flex-col bg-emerald-500 rounded-lg p-3 pl-4 top-10">
          {links.map((link) => {
            return <Link href={link.href}>{link.title}</Link>;
          })}
        </div>
      )}
    </div>
  );
}
