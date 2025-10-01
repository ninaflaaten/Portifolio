import Image from "next/image";
import AboutImage from "../assets/About.png";
import { AboutField } from "./AboutField";
// import { AboutFieldProps } from "./AboutField";
import { AboutFieldType } from "./AboutField";

const aboutMe: AboutFieldType[] = [
  // bruker typen for safety (kunne tatt inn array, men bruker heller interfacet vårt)
  {
    title: "Hvem er jeg?",
    description: "Jeg er Nina.....",
    icon: "charm:person",
  },
  {
    title: "Student",
    description: "Studerer på NTNU, bachelor i informatikk fra UiB",
    icon: "mdi:school",
  },
  {
    title: "Frontend interesser",
    description: "Lærer meg React og Next.js",
    icon: "line-md:coffee-half-empty-twotone-loop",
  },
];

export const About = () => {
  return (
    <div className="flex flex-row p-10  bg-white/8 rounded-2xl w-250 mt-5">
      <div className="pr-15">
        <Image
          src={AboutImage}
          alt="Beskrivende tekst dersom bildet ikke vises"
          className="rounded-full"
          width={200}
          height={200}
        />
      </div>
      <div>
        {aboutMe.map((item) => {
          return (
            <AboutField
              title={item.title}
              description={item.description}
              icon={item.icon}
            ></AboutField>
          );
        })}
      </div>
    </div>
  );
};
