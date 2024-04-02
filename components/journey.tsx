"use client";

import React from "react";
import SectionHeader from "./section-header";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Journey() {
  const ref = useSectionInView("Experience", 0.3);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28">
      <SectionHeader>My Journey</SectionHeader>
      <VerticalTimeline lineColor="">
        {
          experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement 
                contentStyle={{
                  backgroundColor: "#f3f4f6",
                  // backgroundColor: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0,0,0,0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem"
               }}
               contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af"
               }}
               date={item.date}
               icon={item.icon}
               iconStyle={{
                background: "white",
                fontSize: "1.5rem"
               }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                {
                  item.description.map((text, index) => (
                    <p key={index} className="!mt-1 !font-normal text-gray-700">{text}</p>
                  ))
                }
              </VerticalTimelineElement>
            </React.Fragment>
          ))
        }
      </VerticalTimeline>
    </section>
  );
}
