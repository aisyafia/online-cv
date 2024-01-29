import { Experience, Header, Intro } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="border w-[53rem] h-[37rem] bg-mudgreen -z-50 fixed top-[8rem] end-[9rem]"></section>
      <Experience />
    </main>
  );
}
