"use client";

import Image from "next/image";
import HeroImage from "../assets/Hero.png";
import Button from "./Button";

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full">
      <div className="space-y-4 text-center md:text-left">
        <p className="font-bold text-3xl md:text-4xl bg-gradient-to-r from-white bg-clip-text text-transparent">
          Nina Flaaten
        </p>
        <p className="text-base md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button
          onClick={() => console.log("Printes når jeg trykker på knappen")}
          className="mx-auto md:mx-0"
        >
          hej
        </Button>
      </div>

      <div className="pl-0 md:pl-10">
        <Image
          src={HeroImage}
          alt="beskrivende tekst dersom bildet ikke vises"
          className="rounded-full animate-bounce [animation-duration:5s]"
          width={250}
          height={250}
          sizes="(max-width: 768px) 160px, 250px"
        />
      </div>
    </div>
  );
};
