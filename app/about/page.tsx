import Image from "next/image";
import profpic from "@/public/main-img.jpg";
import { educationsData } from "@/lib/data";
import { ExpandableCard } from "@/components/ui/ExpandableCard";

const eduPage = () => {
  return (
    <main className=" flex gap-8 scroll-mt-16 p-2 md:p-4">
      <div className="flex justify-center md:justify-start items-center mb-4">
        <Image
          src={profpic}
          alt="Lutfia picture"
          width={210}
          className="rounded-[20px] object-contain shadow-md shadow-neutral-400"
        />
      </div>
      <div>
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
      </div>
    </main>
  );
};

export default eduPage;
