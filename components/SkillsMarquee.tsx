import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
  MarqueeFade,
} from "@/components/ui/marquee";
import { skillsData } from "@/lib/data";

export default function SkillsMarquee() {
  return (
    <div className="relative group">
      <Marquee className="py-4">
        <MarqueeContent speed={60} pauseOnHover>
          {skillsData.map(({ label, icon: Icon }) => (
            <MarqueeItem key={label}>
              <div className="flex items-center gap-2 px-4">
                <Icon className="text-2xl text-violet-300" />
                <span>{label}</span>
              </div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>

      {/* Optional gradient fades */}
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
    </div>
  );
}
