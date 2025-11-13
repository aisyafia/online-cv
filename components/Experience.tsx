import { experiencesData } from "@/lib/data";
import { ExpandableCard } from "./ui/ExpandableCard";
import { timelineData } from "./ui/timelineData";
import { Timeline } from "./ui/timeline";

const Experience = () => {
  return (
    <main className="scroll-mt-16 p-2 gap-4 md:p-4">
      <Timeline data={timelineData} />
    </main>
  );
};

export { Experience };
