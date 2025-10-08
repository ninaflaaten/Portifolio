"use client";

import Image from "next/image";
import HeroImage from "../assets/Hero.png";
import Button from "./Button";

export const Hero = () => {
  return (
    <div
      className="flex items-center w-160 
             max-sm:flex-col max-sm:items-start max-sm:w-full max-sm:gap-6 
             max-sm:px-4"
    >
      <div className="grow space-y-4 text-left">
        <p className="font-bold text-4xl bg-gradient-to-r from-white bg-clip-text text-transparent">
          Nina Flaaten
        </p>
        <p className="text-1xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button
          onClick={() => console.log("Printes når jeg trykker på knappen")}
        >
          hej
        </Button>
      </div>

      <div className="grow pl-10 max-sm:pl-0 max-sm:self-end hover-pop">
        <Image
          src={HeroImage}
          alt="beskrivende tekst dersom bildet ikke vises"
          className="rounded-full animate-bounce [animation-duration:5s]"
          width={250}
          height={250}
          sizes="(max-width: 640px) 200px, 250px"
        />
      </div>
    </div>
  );
};
