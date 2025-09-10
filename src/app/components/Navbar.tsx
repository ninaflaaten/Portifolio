import Link from "next/link";

export function Navbar() {
    return (
        <div className="border flex p-3">
            <p className="border grow font-bold text-4xl">Portifolio</p>
            <div className="border grow flex justify-end gap-5 pr-5 text-2xl">
                <Link href={"#About"}>About</Link>
                <Link href={"#Experience"}>Experience</Link>
                <Link href={"#Projects"}>Projects</Link>
                <Link href={"#Contact"}>Contact</Link>
            </div>
        </div>
    )
}