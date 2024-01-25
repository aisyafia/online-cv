import { Header, Intro } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="border w-[53rem] h-[37rem] bg-mudgreen -z-50">
      </section>
      <h1>Lutfia Aisya</h1>
      <h3>Full Stack/Frontend Developer</h3>
      <Intro />
    </main>
  );
}
