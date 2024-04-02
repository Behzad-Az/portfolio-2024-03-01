"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const target = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["0 1", "1.33 1"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.section 
      ref={target} 
      style={{ scale, opacity }}
      className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 sm:even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20"
    >
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {description}
        </p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {
            tags.map((tag, index) => (
              <li key={index} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                {tag}
              </li>
            ))
          }
        </ul>
      </div>

      <Image
        src={imageUrl} 
        alt={title} 
        quality={95} 
        className="
        absolute hidden sm:block
        top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] 
        group-even:-left-40 
        group-hover:-translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-1
        group-even:group-hover:translate-x-3 
        group-even:group-hover:rotate-1
        group-hover:scale-105 
        transition"
      />

    </motion.section>
  );
}