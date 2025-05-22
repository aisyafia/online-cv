import { projectsData } from "@/lib/data";
import { ExpandableCard } from "@/components/ui/ExpandableCard";

const ProjectPage = () => {
  return (
    <main className="scroll-mt-16 max-w-[50rem] grid grid-cols-1 p-2 gap-4 md:grid-cols-2 md:p-4">
      {projectsData.map((project) => {
        return (
          <ExpandableCard
            title={project.title}
            description={project.description}
            src={project.imageUrl}
            ctaText="Visit website"
            ctaLink={project.web}
            content={project.intro}
            key={project.title}
          />
        );
      })}
    </main>
  );
};

export default ProjectPage;
