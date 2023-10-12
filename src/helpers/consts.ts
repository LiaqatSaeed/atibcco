export const PROJECT_TYPES = [
  "show all",
  "commercial",
  "education",
  "goverment",
  "infrastructure",
  "residential",
  "healthcare",
];

import Project1 from "@/app/assets/images/projects/project1.jpg";
import Project2 from "@/app/assets/images/projects/project2.jpg";
import Project3 from "@/app/assets/images/projects/project3.jpg";
import Project4 from "@/app/assets/images/projects/project4.jpg";
import Project5 from "@/app/assets/images/projects/project5.jpg";
import Project6 from "@/app/assets/images/projects/project6.jpg";

export const PROJECTS = [
  {
    title: "Capital Teltway Building",
    imgUrl: Project1.src,
    category: ["commercial", "interiors"],
  },
  {
    title: "Ghum Touch Hospital",
    imgUrl: Project2.src,
    category: ["healthcare"],
  },
  {
    title: "TNT East Facility",
    imgUrl: Project3.src,
    category: ["goverment"],
  },
  {
    title: "Narriot Headquarters",
    imgUrl: Project4.src,
    category: ["infrastructure"],
  },
  {
    title: "Kalas Metrorail",
    imgUrl: Project5.src,
    category: ["infrastructure"],
  },
  {
    title: "Ancraft Avenue House",
    imgUrl: Project6.src,
    category: ["residential"],
  },
];
