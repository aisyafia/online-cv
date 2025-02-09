"use client";

import { experiencesData } from "@/lib/data";
import { Motion } from "./Motion";
import { useState } from "react";
import { Prompt } from "next/font/google";
import { DetailsCard } from "./DetailsCard";

const prompt = Prompt({ subsets: ["latin"], weight: ["300"] });

const Experience = () => {
  const [openExp, setOpenExp] = useState<string | null>(null);

  return (
    <section className="scroll-mt-16 max-w-[60rem] grid grid-cols-2 gap-4 p-4">
      {experiencesData.map((exp) => {
        const isOpen = openExp === exp.title;

        return (
          <button
            key={exp.title}
            onClick={() => setOpenExp(isOpen ? null : exp.title)}
            className="w-full text-left p-1 border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:shadow-neutral-400 transition"
          >
            <Motion
              key={exp.title}
              className="entry-container"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-2">
                {exp.icon}
                <h4
                  className={`${prompt.className} text-left text-lg font-bold`}
                >
                  {exp.title}
                </h4>
              </div>
              <div className="text-center gap-2">
                <h5 className="text-base font-light">
                  {exp.company} - {exp.location}
                </h5>
              </div>
              <div>
                <h5 className="text-base font-light">{exp.date}</h5>
              </div>
            </Motion>
            {isOpen && (
              <DetailsCard
                open={isOpen}
                closeDialog={() => setOpenExp(null)}
                description={exp.description}
                title={exp.title}
                logo={exp.imageUrl}
              />
            )}
          </button>
        );
      })}
    </section>
  );
};

export { Experience };
