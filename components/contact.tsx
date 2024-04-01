"use client";

import React from "react";
import SectionHeader from "./section-header";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const ref = useSectionInView("Contact");

  return (
    <motion.section 
      id="contact" 
      ref={ref}
      className="scroll-mt-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeader>Contact Me</SectionHeader>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">example@gmail.com</a>{" "}
        or through this form.
      </p>
      <form 
        className="mt-10 flex flex-col"
        action={async formData => {
          await sendEmail(formData);
        }}
      >
        <input
          name="fromEmail"
          type="email"
          className="h-14 px-4 rounded-lg border-black-custom outline-gray-700"
          placeholder="Your email"
          required
          maxLength={100}
        />
        <textarea 
          name="message"
          className="h-52 my-3 rounded-lg border-black-custom p-4 outline-gray-700"
          placeholder="Your message..."
          required
          maxLength={5000}
          minLength={10}
        />
        <button 
          type="submit" 
          className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-800 rounded-full outline-none transition-all text-white hover:scale-105 hover:bg-gray-950">
            Submit 
            <FaPaperPlane className="text-sm opacity-70 transition-all" />
          </button>
      </form>
    </motion.section>
  );
}
