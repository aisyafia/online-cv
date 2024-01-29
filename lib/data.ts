import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import moviexplorer from "@/public/moviexplorer.jpg";
import bs4ss from "@/public/bs4ss.jpg";
import cocktailogy from "@/public/cocktailogy.jpg";
import hangmanovie from "@/public/moviexplorer.jpg";

export const links = [
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Web Development Intern",
    company: "NLC Health Ventures",
    location: "Amsterdam, NL",
    description:
      "A venture capital company focusing on healthtech innovations. My project was to design, create, and style the pages and components of their internal applications.",
    icon: React.createElement(LuGraduationCap),
    date: "09/23 - 02/24",
  },
  {
    title: "Full Stack Development",
    company: "Techmongers (formerly Codaisseur)",
    location: "Amsterdam, NL",
    description:
      "Highest ranked tech academy in the Netherlands. 10 intensive weeks where I learnt and applied modern technologies from back-end to front-end to build full-stack web.  Scored 90% in the final assessment.",
    icon: React.createElement(LuGraduationCap),
    date: "10/22 - 01/23",
  },
  {
    title: "Warehouse Supervisor",
    company: "Gorillas",
    location: "Amsterdam, NL",
    description:
      "An on-demand grocery delivery service. My key responsibilities were daily operations management, including performance, fleet, and inventory management, data administration, and customer service.",
    icon: React.createElement(LuGraduationCap),
    date: "01/22 - 10/22",
  },
  {
    title: "Store Assistant",
    company: "Bayu Food and Art",
    location: "Amsterdam, NL",
    description:
      "An Indonesian restaurant and art gallery. My responsibilities were daily customer service and inventory management",
    icon: React.createElement(LuGraduationCap),
    date: "01/21 - 12/21",
  },
  {
    title: "Article editor",
    company:
      "GIZ (German Corporation for International Cooperation) - Brussels Office",
    location: "Remote, NL",
    description:
      "A freelance work on policy research papers. The project is titled Strategic Partnership for the Implementation of Paris Agreement (SPIPA). I edited documents related to climate change and energy policy in Indonesia.",
    icon: React.createElement(LuGraduationCap),
    date: "08/20 - 09/20",
  },
  {
    title: "Business Development Lead",
    company: "TaniFund",
    location: "Jakarta, ID",
    description:
      "A financial technology company serving as crowdlending platform, focusing on agriculture industry. I initiated the Business Development and Project Management teams, created standardized process for projects/loans application, approval, monitoring, and reporting system, and I also developed strategies for users retention and acquisition.",
    icon: React.createElement(LuGraduationCap),
    date: "01/19 - 01/20",
  },
  {
    title: "Business Process Improvement Specialist",
    company: "TaniHub",
    location: "Jakarta, ID",
    description:
      "An ecommerce platform for fresh produce. I conducted Impact Assesment research and represented the company in public events.",
    icon: React.createElement(LuGraduationCap),
    date: "01/18 - 01/19",
  },
  {
    title: "Sourcing Encodage",
    company: "Bureau van Dijk - A Moody's Analytics",
    location: "Brussels, BE",
    description:
      "A part-time student job, I administered research on Indonesian companies' ownership data.",
    icon: React.createElement(LuGraduationCap),
    date: "10/16 - 08/17",
  },
  {
    title: "Researcher",
    company: "MICRA Indonesia",
    location: "Jakarta, ID",
    description:
      "Microfinance Innovation Center for Research and Alternatives (MICRA) is a consultancy.",
    icon: React.createElement(LuGraduationCap),
    date: "01/14 - 08/15",
  },
] as const;

export const projectsData = [
  {
    title: "Cocktailogy",
    description:
      "A self-practice project using Typescript, Next.js, and Tailwind.",
    tags: ["React", "Next.js", "Tailwind", "Vercel"],
    imageUrl: cocktailogy,
  },
  {
    title: "Big Sister for Small Sister",
    description:
      "A website for women volunteers, focusing on supporting young, marginalised girls in Northern Kenya. Their first project was fundraising, to provide sustainable and reusable menstrual kits for school girls in Samburu.",
    tags: ["React", "TypeScript", "MUI", "Netlify"],
    imageUrl: bs4ss,
  },
  {
    title: "MoviExplorer",
    description: "A hobby project for self-practice.",
    tags: ["React", "Typescript", "Redux", "MUI"],
    imageUrl: moviexplorer,
  },
  {
    title: "Hangman: Movie Edition",
    description: "A group project during the bootcamp.",
    tags: ["React", "Axios", "Styled Components"],
    imageUrl: hangmanovie,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
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
  },
  {
    degree: "Bachelor of Economy",
    school: "Indonesia Banking School",
    location: "Jakarta, ID",
    description:
      "Major: banking, finance, and risk management. Final thesis theme: stock market, optimum portfolio, Initial Public Offerings.",
    year: "2008-2012",
  },
] as const;
