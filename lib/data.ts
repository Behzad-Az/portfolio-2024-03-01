import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaAws } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Product Manager @ Amazon Web Services",
    location: "Seattle, WA",
    description: [
      "Partner Experience Delivery",
      "- Operationalized 4 data-centric partner investment programs at-scale, including automation, support and insights.",
      "- Launched 10 automation scripts and 7 Quicksight dashboards that reduced manual computations by 90%.",
      "- Consulted on six $10M+ partner strategic collaboration agreements.",
      "- Conducted change management plans for sales and partner support teams.",
      "- Led UAT for 2 mission critical, revenue reporting product launches."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present"
  },
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:[
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer."
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:[
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description: [
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities."
    ],
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const introData = {
  profileImgUrl: "https://media.licdn.com/dms/image/C5603AQH2di4EIARlqQ/profile-displayphoto-shrink_400_400/0/1599249937678?e=1714608000&v=beta&t=1I9syG66G_vhEBNAL2Q5Xd9vZUwkQAOJqMa8knRZ1B0",
  linkedInLink: "https://www.linkedin.com/in/bazampour/",
  githubLink: "https://github.com/Behzad-Az"
} as const;