import { Navlinks } from "./Navlinks";
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
    title: "Skills",
    href: "#Skills",
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
    <div className="fixed top-0 left-0 w-full p-3 shadow-md z-50 bg-[#aa647b]">
      <p className="grow font-bold text-4xl">Portifolio</p>
      <Navlinks links={navBarLinks}></Navlinks>
      <MobileNavlinks links={navBarLinks}></MobileNavlinks>
    </div>
  );
}
