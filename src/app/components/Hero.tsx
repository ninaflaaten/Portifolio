"use client";

import Image from "next/image";
import HeroImage from "../assets/Cartoon.png";
import Button from "./Button";

export const Hero = () => {
  return (
    <div className="flex items-center">
      <div className="grow space-y-5">
        <p className="font-bold text-4xl bg-gradient-to-r from-white to-state-700 bg-clip-text text-transparent">
          Navn blabla..
        </p>
        <p className="text-3xl">Tekst her...</p>
        <Button
          onClick={() => console.log("Printes når jeg trykker på knappen")}
        >
          hei
        </Button>
      </div>
      <div className="grow pl-5">
        <Image
          src={HeroImage}
          alt={"beskrivende tekst dersom bildet ikke vises"}
          className="rounded-full animate-bounce"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};
