import { ICard, ICases, IMenuLink } from "@/types";

export const menuLinks: IMenuLink[] = [
  {
    id: "main",
    label: "Main",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "cases",
    label: "Cases",
  },
  {
    id: "faq",
    label: "FAQ",
  },
  {
    id: "contactus",
    label: "Contact Us",
  },
];

export const VALUES_PART1: ICard[] = [
  {
    title: "Openness",
    description: "to the world, people, new ideas and projects",
    iconId: "maximize-circle",
  },
  {
    title: "Responsibility",
    description:
      "we are aware that the results of our work have an impact on our lives and the lives of future generations",
    iconId: "global-edit",
  },
];

export const VALUES_PART2: ICard[] = [
  {
    title: "Innovation",
    description:
      "we use the latest technology to implement non-standard solutions",
    iconId: "cpu-charge",
  },
  {
    title: "Quality",
    description:
      "we do not strive to be the first among others, but we want to be the best in our business",
    iconId: "ranking",
  },
];

export const CASES: ICases[] = [
  {
    title: `Lviv Region, Radekhiv town Private Enterprise "ZAKHIDNYI BUH"`,
    description: "Wind Power for auto field irrigation",
    date: "July 2023",
    imgTag: "case1",
  },
  {
    title: `Zhytomyr city Private Enterprise “Bosch”`,
    description: "Solar Panels for industrial use",
    date: "November 2023",
    imgTag: "case2",
  },
  {
    title: `Rivne city Private Enterprise “Biotech”`,
    description: "Thermal modules",
    date: "October 2023",
    imgTag: "case3",
  },
  {
    title: `Kherson city Private Enterprise “HealthyFarm”`,
    description: "Wind power",
    date: "September 2021",
    imgTag: "case4",
  },
  {
    title: `Zaporizhia city Private Enterprise “Biotech”`,
    description: "Mini nuclear stations",
    date: "May 2021",
    imgTag: "case5",
  },
];
