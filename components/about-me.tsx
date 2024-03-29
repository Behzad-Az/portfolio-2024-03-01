"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";
import { useSectionInView } from "@/lib/hooks";

export default function AboutMe() {
  const ref = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      id="about"
      className="max-w-[45rem] text-center leading-7 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3">
        <span>
          I am a mechatronics engineer with{" "}
        </span>
        <span className="font-medium">
          8+ years of technical product and program experience.{" "}
        </span>
        <span>
          Recently, I have upskilled in{" "}
        </span>
        <span className="font-medium">
          modern data science{" "}
        </span>
        <span>
          and{" "}
        </span>
        <span className="font-medium">
          software development.
        </span>
      </p>
      <p className="mb-3">
        I am recognized for diving deep into complex cross-functional problems, inventing simple incremental solutions, and optimizing delivery roadmaps in both Waterfall and Agile projects.
      </p>
      <p>
        Achieving record production KPIs as a Reliability Program Engineer in the energy sector, and automating four partner incentive programs in one year as a Product Manager at AWS are my career highlights.
      </p>
    </motion.section>
  );
}
