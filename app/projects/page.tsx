"use client";

import { projectsData } from "@/lib/data";
import { Motion } from "@/components/Motion";
import { useState } from "react";
import { useDialog } from "@/components/DialogProvider";
import { DetailsCard } from "@/components";

const ProjectPage = () => {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const { isDialogOpen, openDialog, closeDialog } = useDialog();
  return (
    <main className="scroll-mt-16 max-w-[50rem] grid grid-cols-1 p-2 gap-4 md:grid-cols-2 md:p-4">
      {projectsData.map((project) => {
        const isOpen = openProject === project.title;
        return (
          <button
            key={project.title}
            onClick={() => {
              setOpenProject(project.title);
              openDialog();
            }}
            className="w-full text-left p-1 border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:shadow-neutral-400 hover:text-violet-300 transition"
          >
            <Motion
              key={project.title}
              className="entry-container"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h3>{project.title}</h3>
            </Motion>
            {isDialogOpen && isOpen && (
              <DetailsCard
                open={isOpen}
                closeDialog={() => {
                  setOpenProject(null);
                  closeDialog();
                }}
                description={project.description}
                title={project.title}
                logo={project.imageUrl}
                web={project.web}
              />
            )}
          </button>
        );
      })}
    </main>
  );
};

export default ProjectPage;
