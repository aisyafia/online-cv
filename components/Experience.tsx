"use client";

import { experiencesData } from "@/lib/data";
import { motion, useScroll } from "framer-motion";

const Experience = () => {
  return (
    <section className="scroll-mt-16 max-w-[50rem]">
      {experiencesData.map((exp) => {
        return (
          <div key={exp.title} className="entry-container">
            <h3>{exp.title}</h3>
            <div className="flex justify-start items-center gap-2">
              <h5>
                {exp.company} - {exp.location} -
              </h5>
              <h5 className="text-base font-light">{exp.date}</h5>
            </div>

            <p>{exp.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export { Experience };
