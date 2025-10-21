import Image from "next/image";
import HeroImage from "../assets/Footer.png";
import { FooterField, footerFieldSchema } from "./FooterField";
import { FooterService } from "../../../backend/FooterService";

const data = FooterService.getFooterInfo();
const footerInfo = footerFieldSchema.array().parse(data);

export const Footer = () => {
  return (
    <footer id="About" className="mt-10">
      <section
        className="
          relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
          w-screen bg-[#b7788b]
        "
      >
        <div className="mx-auto max-w-screen-xl px-8 py-12">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 flex-1 text-white">
              {footerInfo.map((item) => (
                <FooterField
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>

            <div className="flex justify-end lg:w-auto animate-bounce [animation-duration:5s]">
              <Image
                src={HeroImage}
                alt="beskrivende tekst dersom bildet ikke vises"
                width={300}
                height={300}
                className="rounded-b-[200px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
