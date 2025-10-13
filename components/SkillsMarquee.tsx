// import { skillsData } from "@/lib/data";
// import { Marquee } from "@/components/ui/marquee";

// export default function SkillsMarquee() {
//   return (
//     <Marquee className="py-6" reverse>
//       {skillsData.map(({ label, icon: Icon }) => (
//         <div
//           key={label}
//           className="flex items-center gap-2 px-4 text-lg font-medium"
//         >
//           <Icon className="text-2xl text-muted-foreground" />
//           <span>{label}</span>
//         </div>
//       ))}
//     </Marquee>
//   );
// }

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
                <Icon className="text-2xl text-muted-foreground" />
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
