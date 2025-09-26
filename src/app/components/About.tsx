import Image from "next/image";
import AboutImage from "../assets/About.png";

// idk hvordan bruke denne, men endre så bruke den....
const aboutme = {
  title: "Fronted developer",
  description: "Backend developer",
  icon: "?",
};

export const About = () => {
  return (
    <div className="w-full pl-30 pt-20 grow flex">
      <div className=" text-2xl w-250">
        <p className="font-bold">About me</p>
        <p>
          Finne ut hvordan gjlre med teksten her ejrhbejhrbgjebrgj erhbgjebrgjhb
          jhberjhbejrb behb hbejhr fungerer vel egt sånn hre da jejem men skal
          bruke den funksjonen da... idk hvordan
        </p>
      </div>

      <div className="grow absolute pl-250">
        <Image
          src={AboutImage}
          alt={"beskrivende tekst dersom bildet ikke vises"}
          className="rounded-full"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};
