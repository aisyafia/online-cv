import { educationsData } from "@/lib/data";
import { ExpandableCard } from "@/components/ui/ExpandableCard";

const eduPage = () => {
  return (
    <main className="scroll-mt-16 max-w-[50rem] grid grid-cols-1 p-2 gap-4 md:grid-cols-2 md:p-4">
      {educationsData.map((edu) => {
        return (
          <ExpandableCard
            title={edu.degree}
            description={edu.school}
            duration={edu.year}
            src={edu.imageUrl}
            ctaText="Learn more"
            ctaLink={edu.web}
            content={edu.description}
            key={edu.location}
            location={edu.location}
          />
        );
      })}
    </main>
  );
};

export default eduPage;
