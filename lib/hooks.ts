import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, inViewThreshold = 0.75) {
  const {ref, inView} = useInView({ threshold: inViewThreshold });
  const { setActiveSection, timeOfLastNavClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastNavClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastNavClick]);

  return ref;
};