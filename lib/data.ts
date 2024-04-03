import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Applied Data Science Bootcamp Program",
    location: "MIT Professioal Education",
    description:[
      "- 12 Week bootcamp with lectures by MIT faculty, hands-on projects and weekly assessments.",
      "- Data Analysis and Visualization, Linear Regression, Logistic Regression, K-Nearest Neighbors, Deep Learning, Neural Networks, Decision Trees, Random Forests, and Recommendation Systems"
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
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
    title: "Product Management Bootcamp",
    location: "LinkedIn Learning",
    description:[
      "- Agile product management",
      "- Prioritization methods, sprint planning"
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Program Manager @ Imperial Oil (ExxonMobil Affiliate)",
    location: "Alberta, Canada",
    description:[
      "Asset Reliability",
      "- Managed the reliability program for the mine's $300M loading fleet.",
      "- Introduced modern data analytics, machine learning, and visualization methods to identify, prioritize and track reliability initiatives.",
      "- Led $10M of cross-functional reliability projects alongside data science, engineering, and operations teams.",
      "- Oversaw the change management process.",
      "- Achieved record fleet reliability at lowest unit maintenance cost in 2020."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2022",
  },
  {
    title: "Web Development Bootcamp",
    location: "Lighthouse Labs",
    description: [
      "- 12 Week in-person bootcamp with daily lectures daily projects and assessments.",
      "- Full-stack web development, Javascript, Ruby, CSS, React, React-Native, Node.js, Express, SQL, Algorithms"
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "Program Manager @ Shell",
    location: "Alberta, Canada",
    description:[
      "Plant Maintenance",
      "- Optimized $10M of maintenance strategies by applying data analytics, risk analyses, and financial modelling.",
      "- Launched maintenance performance metrics dashboards.",
      "- Led cross-functional root cause analyses (RCAs), Failure Mode & Effect Analyses (FMEA), and Change Requests.",
      "- Produced annual maintenance budgets ($10M scope).",
      "- Reduced critical downtime by 40%, production loss by 55%, and maintenance expenditure by 30% over three years."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2013 - 2016",
  },
  {
    title: "Bachelor of Applied Sciences",
    location: "University of British Columbia",
    description: [
      "Mechatronics engineering w/ minor in commerce and 28 months of diverse internships",
      "3.4 GPA"
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2013",
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
  "Product Management",
  "Program Management",
  "Project Management",
  "Strategy Development",
  "Metrics & KPIs",
  "Value Stream Mapping",
  "Stakeholder Management",
  "Prioritization",
  "JIRA",
  "Asana",
  "Agile",
  "Scrum",
  "Sprints",
  "Six Sigma",
  "Data and Insights",
  "Data Analytics",
  "Data Science",
  "Tableau",
  "Power BI",
  "Quicksight",
  "Dashboards",
  "Pandas",
  "NumPy",
  "sklearn",
  "Machine Learning",
  "Full Stack Web",
  "SQL",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Figma",
  "SalesForce"
] as const;

export const introData = {
  profileImgUrl: "https://media.licdn.com/dms/image/C5603AQH2di4EIARlqQ/profile-displayphoto-shrink_400_400/0/1599249937678?e=1714608000&v=beta&t=1I9syG66G_vhEBNAL2Q5Xd9vZUwkQAOJqMa8knRZ1B0",
  linkedInLink: "https://www.linkedin.com/in/bazampour/",
  githubLink: "https://github.com/Behzad-Az"
} as const;

export const profile = {
  firstName: "Ben",
  lastName: "Azampour",
  copyRightYear: 2024
} as const;