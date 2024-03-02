"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.section 
      className="mb-28 max-w-[45rem] text-center leading-7 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h2 className="text-3xl font-medium capitalize mb-8">
        About Me
      </h2>
      <p className="mb-3">
        I am a mechatronics engineer with 8+ years of product/program experience. Recently, I have upskilled in modern data science and software development.
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
