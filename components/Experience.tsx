"use client";

import { experiencesData } from "@/lib/data";
import { Motion } from "./Motion";
import { useState } from "react";
import { Prompt } from "next/font/google";

const prompt = Prompt({ subsets: ["latin"], weight: ["300"] });

const Experience = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="scroll-mt-16 max-w-[50rem] grid grid-cols-2 gap-4">
      {experiencesData.map((exp) => {
        return (
          <button
            key={exp.title}
            onClick={() => setOpen(!open)}
            className="w-full text-left p-1 border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:shadow-neutral-300 transition"
          >
            <Motion
              key={exp.title}
              className="entry-container"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-2">
                {exp.icon}
                <h4 className={`${prompt.className} text-left text-lg`}>
                  {exp.title}
                </h4>
              </div>
              <div className="flex justify-start items-center gap-2">
                <h5>
                  {exp.company} - {exp.location}
                </h5>
              </div>
              <div>
                <h5 className="text-base font-light">{exp.date}</h5>
              </div>

              <p className="text-left">{exp.description}</p>
            </Motion>
          </button>
        );
      })}
    </section>
  );
};

export { Experience };
