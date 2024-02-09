import { projectsData } from "@/lib/data";

const ProjectPage = () => {
  return (
    <main className="scroll-mt-16 max-w-[50rem]">
      {projectsData.map((project) => {
        return (
          <div key={project.title} className="entry-container">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        );
      })}
    </main>
  );
};

export default ProjectPage;
