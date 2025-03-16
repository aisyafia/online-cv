"use client";

import { educationsData } from "@/lib/data";
import { Motion } from "@/components/Motion";
import { useState } from "react";
import { useDialog } from "@/components/DialogProvider";
import { DetailsCard } from "@/components";

const eduPage = () => {
  const [openEdu, setOpenEdu] = useState<string | null>(null);
  const { isDialogOpen, openDialog, closeDialog } = useDialog();
  return (
    <main className="scroll-mt-16 max-w-[50rem] grid grid-cols-2 gap-4 p-4">
      {educationsData.map((edu) => {
        const isOpen = openEdu === edu.degree;
        return (
          <button
            key={edu.degree}
            onClick={() => {
              setOpenEdu(edu.degree);
              openDialog();
            }}
            className="w-full text-left p-1 border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:shadow-neutral-400 hover:text-violet-300 transition"
          >
            <Motion
              key={edu.degree}
              className="entry-container"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h3>{edu.degree}</h3>
              <h5>
                {edu.location} - {edu.year}
              </h5>
            </Motion>
            {isDialogOpen && isOpen && (
              <DetailsCard
                open={isOpen}
                closeDialog={() => {
                  setOpenEdu(null);
                  closeDialog();
                }}
                description={edu.description}
                title={edu.school}
                logo={edu.imageUrl}
              />
            )}
          </button>
        );
      })}
    </main>
  );
};

export default eduPage;
