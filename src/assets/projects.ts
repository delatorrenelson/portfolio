import philippine_destination from "./img/philippine-destination.png";
import betstarter from "./img/betstarter.png";
import mathgens from "./img/mathgens.png";
import mensaccessories from "./img/mensaccessories.png"

export interface Project {
  imgSrc: string;
  description: string;
  title: string;
  href: string;
}

const projects: Project[] = [
  {
    imgSrc: philippine_destination,
    description: "Travel App intended for Best of Philippine Tourists Spot.",
    title: "Philippine Destination",
    href: "https://philippine-destination.vercel.app/",
  },
  {
    imgSrc: mathgens,
    description: "Simple math problem generator.",
    title: "MathGens",
    href: "https://mathgens.vercel.app/",
  },
  {
    imgSrc: betstarter,
    description: "Philippine lottery betting system and analysis",
    title: "Betstarter",
    href: "https://betstarter-web.vercel.app/",
  },
  {
    imgSrc: mensaccessories,
    description: "Simple E-commerce website, a capstone project from Zuit",
    title: "MensAccessories",
    href: "https://mens-accessories-ecommerce.vercel.app",
  },
];

export { projects }