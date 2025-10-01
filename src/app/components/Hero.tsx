"use client";

import Image from "next/image";
import HeroImage from "../assets/Hero.png";
import Button from "./Button";

// fikse litt dybde spotblur halvparten av far-diven plassere to? absolute
export const Hero = () => {
  return (
    <div className="flex items-center w-160">
      <div className="grow space-y-4">
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
      <div className="grow pl-10">
        <Image
          src={HeroImage}
          alt={"beskrivende tekst dersom bildet ikke vises"}
          className="rounded-full animate-bounce [animation-duration:5s]"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};
