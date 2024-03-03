"use client";

import React, { useEffect } from "react";
import SectionHeader from "./section-header";
import Project from "./project";
import { projectsData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section";

export default function Projects() {
  const {ref, inView} = useInView({ threshold: 0.3 });
  const { setActiveSection, timeOfLastNavClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastNavClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastNavClick]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeader>My Projects</SectionHeader>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  );
}