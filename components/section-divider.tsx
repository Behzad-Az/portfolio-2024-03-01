"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div 
      className="bg-gray-200 my-14 h-0 w-0 rounded-full sm:h-16 sm:w-1 sm:my-24 dark:bg-opacity-20"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.125
      }}
    />
  );
}
