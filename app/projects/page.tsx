import { projectsData } from "@/lib/data";
import { Motion } from "@/components/Motion";

const ProjectPage = () => {
  return (
    <main className="scroll-mt-16 max-w-[50rem]">
      {projectsData.map((project) => {
        return (
          <Motion
            key={project.title}
            className="entry-container"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button></button>
          </Motion>
        );
      })}
    </main>
  );
};

export default ProjectPage;
