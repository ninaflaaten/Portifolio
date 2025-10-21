import {
  AboutField,
  aboutFieldSchema,
  AboutFieldType as FieldType,
} from "./AboutField";
import { AboutService } from "../../../backend/AboutService";

const style =
  "transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_25px_-5px_rgba(236,72,153,0.3)] hover:bg-white/15 hover:backdrop-blur-sm rounded-2xl";

const size = "text-7xl p-1";
const padding = "pl-2";

const aboutMeData: FieldType[] = [
  {
    title: "React",
    description: `${AboutService.getExprTime("react")} erfaring (NTNU)`,
    icon: "skill-icons:react-light",
    className: style,
    size: size,
    padding: padding,
  },
  {
    title: "Java",
    description: `${AboutService.getExprTime("Java")} erfaring (UiB)`,
    icon: "skill-icons:java-light",
    className: style,
    size: size,
    padding: padding,
  },
  {
    title: "Python",
    description: `${AboutService.getExprTime("python")} erfaring (UiB)`,
    icon: "skill-icons:python-light",
    className: style,
    size: size,
    padding: padding,
  },
];

const aboutMe = aboutFieldSchema.array().parse(aboutMeData);

export const Skills = () => {
  return (
    <section id="Skills">
      <div
        className="flex flex-row p-10 bg-white/8 rounded-2xl w-250 mt-10
                 max-sm:flex-col max-sm:items-start max-sm:w-full max-sm:gap-6 "
      >
        <div className="text-left max-sm:w-full w-250">
          {aboutMe.map((item) => (
            <AboutField
              key={item.title}
              title={item.title}
              description={item.description}
              number={item.number}
              icon={item.icon}
              className={item.className}
              size={item.size}
              padding={item.padding}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
