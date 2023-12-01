import { ICard, ICases, IFAQs, IMenuLink } from "@/types";

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

export const FAQs: IFAQs[] = [
  {
    question:
      "How do wind turbines and solar panels work together in a renewable energy system?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    question:
      "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    answer:
      "EcoSolution excels with innovative tech, efficiency, and a commitment to sustainability.",
  },
  {
    question:
      "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
    answer:
      "Businesses gain cost savings, communities get cleaner environments with EcoSolution's renewables.",
  },
  {
    question:
      "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
    answer:
      "EcoSolution prioritizes eco-friendly materials, production, and disposal for sustainable products.",
  },
  {
    question:
      "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
    answer:
      "EcoSolution fosters community partnerships, ensuring equitable access and aiding the renewable shift.",
  },
];

export const CONTACT_INFO = {
  phones: ["38 (098) 12 34 567", "38 (063) 12 34 567"],
  email: "office@ecosolution.com",
  address: "79005, Ukraine, Lvivstreet. Shota Rustaveli, 7",
  socialNetworks: [
    { name: "Facebook", link: "https://facebook.com/" },
    { name: "Instagram", link: "https://www.instagram.com/" },
  ],
};
