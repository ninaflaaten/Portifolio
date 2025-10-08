import Image from "next/image";
import AboutImage from "../assets/About.png";
import { AboutField, aboutFieldSchema, AboutFieldType } from "./AboutField";
import { AboutService } from "../../../backend/AboutService";

const data = AboutService.getAboutInfo();

const aboutMe = aboutFieldSchema.array().parse(data);

export const About = () => {
  return (
    <div
      className="flex flex-row p-10 bg-white/8 rounded-2xl w-250 mt-10
                 max-sm:flex-col max-sm:items-start max-sm:w-full max-sm:gap-6"
    >
      <div className="pr-15 pl-4 max-sm:pr-0 max-sm:self-start max-sm:ml-4 hover-pop">
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
            className="hover:bg-gradient-to-l from-pink-600"
          />
        ))}
      </div>
    </div>
  );
};
