import { experiencesData } from "@/lib/data";
import { ExpandableCard } from "./ui/ExpandableCard";

const Experience = () => {
  return (
    <main className="scroll-mt-16 md:max-w-[60rem] grid grid-cols-1 p-2 md:grid-cols-2 gap-4 md:p-4">
      {experiencesData.map((exp) => {
        return (
          <ExpandableCard
            title={exp.title}
            subtitle
            description={exp.description}
            src={exp.imageUrl}
            location={exp.location}
            duration={exp.date}
            content={exp.intro}
            subcontent={exp.details}
            ctaLink={exp.web}
            ctaText="Visit website"
            key={exp.title}
          />
        );
      })}
    </main>
  );
};

export { Experience };
