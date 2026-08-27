import philippine_destination from "./img/philippine-destination.png";
import betstarter from "./img/betstarter.png";
import mathgens from "./img/mathgens.png";
import mensaccessories from "./img/mensaccessories.png";

export interface Project {
  imgSrc: string;
  description: string;
  title: string;
  href: string;
}

const projects: Project[] = [
  {
    imgSrc: philippine_destination,
    description: "Travel App intended for Best of Philippine Tourist Spots.",
    title: "philippine-destination",
    href: "https://philippine-destination.vercel.app/",
  },
  {
    imgSrc: mathgens,
    description: "An open-source global time viewer and interactive planner.",
    title: "worldtime",
    href: "https://worldtime.vercel.app/",
  },
  {
    imgSrc: betstarter,
    description: "Real-time chat application built with React & Node.js.",
    title: "chatApp",
    href: "https://github.com/delatorrenelson/chatApp",
  },
  {
    imgSrc: mensaccessories,
    description: "Simple E-commerce website, a capstone project from Zuitt.",
    title: "MensAccessoriesEcommerce",
    href: "https://mens-accessories-ecommerce.vercel.app",
  },
];

export { projects };