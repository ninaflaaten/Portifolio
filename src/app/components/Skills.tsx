import {
  AboutField,
  aboutFieldSchema,
  AboutFieldType as FieldType,
} from "./AboutField";
import { AboutService } from "../../../backend/AboutService";

const style = "{hover:bg-gradient-to-l from-pink-600";

const aboutMeData: FieldType[] = [
  {
    title: "React",
    description: `${AboutService.getExprTime("react")} erfaring`,
    icon: "skill-icons:react-light",
    className: style,
  },
  {
    title: "Java",
    description: `${AboutService.getExprTime("Java")} erfaring`,
    icon: "skill-icons:java-light",
    className: style,
  },
  {
    title: "Python",
    description: `${AboutService.getExprTime("python")} erfaring`,
    icon: "skill-icons:python-light",
    className: style,
  },
];

const aboutMe = aboutFieldSchema.array().parse(aboutMeData);

export const Skills = () => {
  return (
    <div
      className="flex flex-row p-10 bg-white/8 rounded-2xl w-250 mt-10
                 max-sm:flex-col max-sm:items-start max-sm:w-full max-sm:gap-6"
    >
      {/* for mobilskjerm */}
      <div className="text-left max-sm:w-full">
        {aboutMe.map((item) => (
          <AboutField
            key={item.title}
            title={item.title}
            description={item.description}
            number={item.number}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};
