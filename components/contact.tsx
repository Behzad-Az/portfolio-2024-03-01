"use client";

import React, { useRef } from "react";
import SectionHeader from "./section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const ref = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

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
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me using the form below.
      </p>
      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
        action={async formData => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
          formRef.current?.reset();
        }}
      >
        <input
          name="fromEmail"
          type="email"
          className="h-14 px-4 rounded-lg border-black-custom outline-gray-700 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          placeholder="Your email"
          required
          maxLength={100}
        />
        <textarea 
          name="message"
          className="h-52 my-3 rounded-lg border-black-custom p-4 outline-gray-700 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          placeholder="Your message..."
          required
          maxLength={5000}
          minLength={10}
        />
        
        <SubmitBtn />

      </form>
    </motion.section>
  );
}
