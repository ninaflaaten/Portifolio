import Link from "next/link";
import { Navlinks, NavlinksProps } from "./Navlinks";
import { MobileNavlinks } from "./MobileNavlinks";

export type Link = {
  title: string;
  href: string;
};

const navBarLinks: Link[] = [
  {
    title: "About",
    href: "#About",
  },
  {
    title: "Experience",
    href: "#Experience",
  },
  {
    title: "Projects",
    href: "#Projects",
  },
  {
    title: "Contact",
    href: "#Contact",
  },
];

export function Navbar() {
  return (
    <div className=" flex p-3 w-full mb-20 ">
      <p className=" grow font-bold text-4xl">Portifolio</p>
      <Navlinks links={navBarLinks}></Navlinks>
      <MobileNavlinks links={navBarLinks}></MobileNavlinks>
    </div>
  );
}
