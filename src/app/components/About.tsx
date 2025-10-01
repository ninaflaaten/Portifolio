import Image from "next/image";
import AboutImage from "../assets/About.png";
import { AboutField, aboutFieldSchema, AboutFieldType } from "./AboutField";

const aboutMeData: AboutFieldType[] = [
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
    title: "Interesser",
    description: "Lærer meg React og Next.js",
    icon: "line-md:coffee-half-empty-twotone-loop",
  },
];

const aboutMe = aboutFieldSchema.array().parse(aboutMeData);

export const About = () => {
  return (
    <div
      className="flex flex-row p-10 bg-white/8 rounded-2xl w-250 mt-10
                 max-sm:flex-col max-sm:items-start max-sm:w-full max-sm:gap-6"
    >
      <div className="pr-15 max-sm:pr-0 max-sm:self-start max-sm:ml-4">
        <Image
          src={AboutImage}
          alt="Beskrivende tekst dersom bildet ikke vises"
          className="rounded-full"
          width={200}
          height={200}
        />
      </div>

      {/* for mobilskjerm */}
      <div className="text-left max-sm:w-full">
        {aboutMe.map((item) => (
          <AboutField
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};
