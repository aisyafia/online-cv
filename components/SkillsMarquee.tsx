import { skillsData } from "@/lib/data";
import { Marquee } from "@/components/ui/Marquee";

export default function SkillsMarquee() {
  return (
    <Marquee pauseOnHover className="py-6">
      {skillsData.map(({ label, icon: Icon }) => (
        <div
          key={label}
          className="flex items-center gap-2 px-4 text-lg font-medium"
        >
          <Icon className="text-2xl text-muted-foreground" />
          <span>{label}</span>
        </div>
      ))}
    </Marquee>
  );
}
