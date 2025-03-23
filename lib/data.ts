import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import moviexplorer from "@/public/moviexplorer.jpg";
import bs4ss from "@/public/bs4ss.jpg";
import cocktailogy from "@/public/cocktailogy.jpg";
import hangmanovie from "@/public/hangmanovie.jpg";
import atabix from "@/public/atabix-logo-black.svg";
import nlc from "@/public/nlc-new-orange.svg";
import coda from "@/public/coda.png";
import gorillas from "@/public/gorillas2.png";
import bayu from "@/public/bayu.png";
import giz from "@/public/giz.png";
import tanifund from "@/public/tanifund.jpg";
import tanihub from "@/public/tanihub.svg";
import bvd from "@/public/bvd.png";
import micra from "@/public/micra.png";
import iob from "@/public/iobuniantwerp.jpeg";
import ibs from "@/public/ibs.png";

export const links = [
  {
    name: "Experience",
    hash: "/",
  },
  {
    name: "Projects",
    hash: "projects",
  },
  {
    name: "Education",
    hash: "education",
  },
  {
    name: "Skills",
    hash: "skills",
  },

  {
    name: "Contact",
    hash: "contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer",
    company: "Atabix",
    location: "Amsterdam, NL",
    description:
      "A Dutch software provider and knowledge partner for (semi)-governments.",
    icon: React.createElement(CgWorkAlt),
    date: "04/24 - present",
    imageUrl: atabix,
    web: "https://www.atabix.nl/",
  },
  {
    title: "Frontend Web Development Intern",
    company: "NLC Health Ventures",
    location: "Amsterdam, NL",
    description:
      "A venture capital company focusing on healthtech innovations. My project was to design, create, and style the pages and components of their internal applications.",
    icon: React.createElement(CgWorkAlt),
    date: "09/23 - 02/24",
    imageUrl: nlc,
    web: "https://www.nlc.health/",
  },
  {
    title: "Full Stack Development",
    company: "Codaisseur",
    location: "Amsterdam, NL",
    description:
      "Highest ranked tech academy in the Netherlands. 10 intensive weeks where I learnt and applied modern technologies from back-end to front-end to build full-stack web.  Scored 90% in the final assessment.",
    icon: React.createElement(LuGraduationCap),
    date: "10/22 - 01/23",
    imageUrl: coda,
  },
  {
    title: "Warehouse Supervisor",
    company: "Gorillas",
    location: "Amsterdam, NL",
    description:
      "An on-demand grocery delivery service. My key responsibilities were daily operations management, including performance, fleet, and inventory management, data administration, and customer service.",
    icon: React.createElement(CgWorkAlt),
    date: "01/22 - 10/22",
    imageUrl: gorillas,
  },
  {
    title: "Store Assistant",
    company: "Bayu Food and Art",
    location: "Amsterdam, NL",
    description:
      "An Indonesian restaurant and art gallery. My responsibilities were daily customer service and inventory management",
    icon: React.createElement(CgWorkAlt),
    date: "01/21 - 12/21",
    imageUrl: bayu,
    web: "https://www.bayufoodandart.com/",
  },
  {
    title: "Article editor",
    company: "GIZ (German Development Agency) - Brussels Office",
    location: "Remote, NL",
    description:
      "A freelance work on policy research papers. The project is titled Strategic Partnership for the Implementation of Paris Agreement (SPIPA). I edited documents related to climate change and energy policy in Indonesia.",
    icon: React.createElement(CgWorkAlt),
    date: "08/20 - 09/20",
    imageUrl: giz,
    web: "https://www.bayufoodandart.com/",
  },
  {
    title: "Business Development Lead",
    company: "TaniFund",
    location: "Jakarta, ID",
    description:
      "A financial technology company serving as crowdlending platform, focusing on agriculture industry. I initiated the Business Development and Project Management teams, created standardized process for projects/loans application, approval, monitoring, and reporting system, and I also developed strategies for users retention and acquisition.",
    icon: React.createElement(CgWorkAlt),
    date: "01/19 - 01/20",
    imageUrl: tanifund,
  },
  {
    title: "Process Improvement Specialist",
    company: "TaniHub",
    location: "Jakarta, ID",
    description:
      "An ecommerce platform for fresh produce. I conducted Impact Assesment research and represented the company in public events.",
    icon: React.createElement(CgWorkAlt),
    date: "01/18 - 01/19",
    imageUrl: tanihub,
  },
  {
    title: "Sourcing Encodage",
    company: "Bureau van Dijk - A Moody's Analytics",
    location: "Brussels, BE",
    description:
      "A part-time student job, I administered research on Indonesian companies' ownership data.",
    icon: React.createElement(CgWorkAlt),
    date: "10/16 - 08/17",
    imageUrl: bvd,
    web: "https://www.moodys.com/web/en/us/capabilities/company-reference-data/orbis.html",
  },
  {
    title: "Researcher",
    company: "MICRA Indonesia",
    location: "Jakarta, ID",
    description:
      "Microfinance Innovation Center for Research and Alternatives (MICRA) is a consultancy.",
    icon: React.createElement(CgWorkAlt),
    date: "01/14 - 08/15",
    imageUrl: micra,
    web: "https://www.micra-indo.org/",
  },
] as const;

export const projectsData = [
  {
    title: "Cocktailogy",
    description:
      "A self-practice project using Typescript, Next.js, and Tailwind.",
    tags: ["React", "Next.js", "Tailwind", "Vercel"],
    imageUrl: cocktailogy,
    web: "https://cocktailogy.vercel.app/",
  },
  {
    title: "Big Sister for Small Sister",
    description:
      "A website for women volunteers, focusing on supporting young, marginalised girls in Northern Kenya. Their first project was fundraising, to provide sustainable and reusable menstrual kits for school girls in Samburu.",
    tags: ["React", "TypeScript", "MUI", "Netlify"],
    imageUrl: bs4ss,
    web: "https://bigsis4smallsis.com/",
  },
  {
    title: "MoviExplorer",
    description: "A hobby project for self-practice.",
    tags: ["React", "Typescript", "Redux", "MUI"],
    imageUrl: moviexplorer,
    web: "https://cinemoviexplorer.netlify.app/",
  },
  {
    title: "Hangman: Movie Edition",
    description: "A group project during the bootcamp.",
    tags: ["React", "Axios", "Styled Components"],
    imageUrl: hangmanovie,
    web: "https://hangmanmovies.netlify.app/hangman",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Vue",
  "React",
  "Next.js",
  "Node.js",
  "HTML",
  "CSS",
  "Git",
  "Github",
  "Tailwind",
  "MUI",
  "Styled Components",
  "SASS",
  "Bootstrap",
  "Redux",
  "PostgreSQL",
  "Sequelize",
  "Express",
  "Axios",
  "Figma",
  "Python",
] as const;

export const educationsData = [
  {
    degree: "MSc in Development Studies",
    school: "University Antwerp - Institute of Development Policy",
    location: "Antwerp, BE",
    description:
      "Development Evaluation and Management - Local Institution and Poverty Reduction track. Final thesis theme: microfinance, climate change, development policy.",
    year: "2015-2017",
    imageUrl: iob,
  },
  {
    degree: "Bachelor of Economy",
    school: "Indonesia Banking School",
    location: "Jakarta, ID",
    description:
      "Major: banking, finance, and risk management. Final thesis theme: stock market, optimum portfolio, Initial Public Offerings.",
    year: "2008-2012",
    imageUrl: ibs,
  },
] as const;
