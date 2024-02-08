"use client"

import { experiencesData } from "@/lib/data";
import { motion, useScroll } from "framer-motion"

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-16">
      <div className="max-w-[50rem]">
        {experiencesData.map((exp) => {
          return (
            <div
              key={exp.title}
              className="border border-white rounded-md m-4 p-2"
            >
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
      </div>
    </section>
  );
};

export { Experience };
