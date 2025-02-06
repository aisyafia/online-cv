"use client";

import { experiencesData } from "@/lib/data";
import { Motion } from "./Motion";
import { useState } from "react";

const Experience = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="scroll-mt-16 max-w-[50rem]">
      <button onClick={() => setOpen(!open)}>
        {experiencesData.map((exp) => {
          return (
            <Motion
              key={exp.title}
              className="entry-container"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-left">{exp.title}</h3>
              <div className="flex justify-start items-center gap-2">
                <h5>
                  {exp.company} - {exp.location} -
                </h5>
                <h5 className="text-base font-light">{exp.date}</h5>
              </div>

              <p className="text-left">{exp.description}</p>
            </Motion>
          );
        })}
      </button>
    </section>
  );
};

export { Experience };
