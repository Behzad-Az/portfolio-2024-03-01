"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { introData } from "@/lib/data";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section";

export default function Intro() {
  const ref = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastNavClick } = useActiveSectionContext();


  return (
    <section ref={ref} id="home" className="max-w-[50rem] text-center scroll-mt-96">
      
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2
            }}
          >
            <Image 
              src={introData.profileImgUrl} 
              alt="Ben Profile Photo" 
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-32 w-32 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span 
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium sm:text-3xl !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
          Hello, I'm Ben.{" "}
        </span>
        <span>
          Welcome to my page! I'm a{" "} 
        </span>
        <span className="font-bold">
          Technical Product and Program Manager{" "}
        </span>
        <span>
          with{" "}
        </span>
        <span className="font-bold">
          8 years{" "}
        </span>
        <span>
          of experience. I'm particularly passionate about AI and data products.
        </span>
      </motion.h1>

      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >

        <Link 
          href="#contact" 
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-3 rounded-full outline-none hover:scale-105 hover:bg-gray-950 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastNavClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight />
        </Link>

        <a 
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 transition cursor-pointer border-black-custom dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV
          <HiDownload />
        </a>

        <a 
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none hover:scale-110 transition cursor-pointer border-black-custom dark:bg-white/10 dark:text-white/80"
          href={introData.linkedInLink}
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a 
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none hover:scale-110 transition cursor-pointer border-black-custom dark:bg-white/10 dark:text-white/80"
          href={introData.githubLink}
          target="_blank"
        >
          <FaGithubSquare />
        </a>

      </motion.div>

    </section>
  );
}