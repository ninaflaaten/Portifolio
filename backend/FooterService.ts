import { FooterItem } from "../types/Footer";

interface IFooterService {
  myfavoriteNumber: number;
  getFooterInfo: () => FooterItem[]; // () => for at det er en funksjon
  getExprTime: (input: string) => string;
}

export const FooterService: IFooterService = {
  myfavoriteNumber: 5,
  getFooterInfo: () => {
    return [
      {
        title: "LinkedIn",
        description: "https://www.linkedin.com/in/ninaflaaten/",
        icon: "carbon:logo-linkedin",
      },
      {
        title: "Mail",
        description: "nina.flaaten@stud.ntnu.no",
        icon: "carbon:email",
      },
      {
        title: "Github",
        description: "https://github.com/ninaflaaten",
        icon: "carbon:logo-github",
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
