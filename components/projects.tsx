import React from "react";
import SectionHeader from "./section-header";
import Project from "./project";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section>
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