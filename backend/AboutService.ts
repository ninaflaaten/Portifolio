import { AboutItem } from "../types/About";

interface IAboutService {
  myfavoriteNumber: number;
  getAboutInfo: () => AboutItem[]; // () => for at det er en funksjon
  getExprTime: (input: string) => string;
}

export const AboutService: IAboutService = {
  myfavoriteNumber: 5,
  getAboutInfo: () => {
    return [
      {
        title: "Hvem er jeg?",
        description: "Nina Flaaten, 24 år...",
        icon: "charm:person",
      },
      {
        title: "Student",
        description: "Studerer på NTNU, bachelor i informatikk fra UiB",
        icon: "mdi:school",
      },
      {
        title: "Interesser",
        description: "Lage spill i Java, lærer meg for tiden React",
        icon: "line-md:star-alt",
      },
    ];
  },

  getExprTime: (input: string) => {
    const today = new Date();
    const java = new Date("2021-07-01");
    const python = new Date("2021-07-01");
    const react = new Date("2025-09-01");

    if (input.toLowerCase() == "python") {
      return milliSecToTime(today.getTime() - python.getTime()).toString(); // gjøre om til måneder....?? evt år for de to andre
    } else if (input.toLowerCase() == "java") {
      return milliSecToTime(today.getTime() - java.getTime()).toString();
    } else if (input.toLowerCase() == "react") {
      return milliSecToTime(today.getTime() - react.getTime()).toString();
    } else {
      return "Ikke lært enda.";
    }
  },
};

const milliSecToTime = (milliSecs: number): string => {
  const milliSecsPerMonth = 30.44 * 24 * 60 * 60 * 1000;
  const months = milliSecs / milliSecsPerMonth;

  if (months >= 12) {
    const years = Math.floor(months / 12);
    return `${years} år`;
  } else {
    const roundedMonths = Math.floor(months);
    return `${roundedMonths} mnd`;
  }
};
