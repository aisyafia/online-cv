import { Experience, Intro } from "@/components";
import Image from "next/image";
import SkillsMarquee from "@/components/SkillsMarquee";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center">
        <Intro />
      </div>
      <SkillsMarquee />
    </main>
  );
}
