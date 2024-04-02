"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (index: number) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { delay: 0.05 * (index + 1) } 
  })
};

export default function Skills() {
  const ref = useSectionInView("Skills");
  return (
    <section ref={ref} id="skills" className="max-w-[53rem] scroll-mt-28 text-center">
      <SectionHeader>My Skills</SectionHeader>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {
          skillsData.map((skill, index) => (
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              key={index}
              className="bg-white border-black-custom rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            >
              {skill}
            </motion.li>
          ))
        }
      </ul>
    </section>
  );
}
