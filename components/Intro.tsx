import Image from "next/image";
import profpic from "@/public/main-img.jpg";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Quicksand } from "next/font/google";
import { TextGenerateEffect } from "./ui/GenerateText";

const quicksand = Quicksand({ subsets: ["latin"] });

const Intro = () => {
  return (
    <section className="w-full flex flex-col items-center md:items-start md:w-[18rem] md:h-[97vh] p-4 ">
      <TextGenerateEffect
        className={`${quicksand.className} text-4xl`}
        words="Lutfia Aisya"
      />
      <h3 className={`${quicksand.className} font-light mb-4`}>
        Frontend Developer
      </h3>

      <div className="flex justify-center md:justify-start items-center mb-4">
        <Image
          src={profpic}
          alt="Lutfia picture"
          width={187}
          height={140}
          className="rounded-[20px] object-cover shadow-md shadow-neutral-400"
        />
      </div>

      <div className="text-center md:text-start">
        <TextGenerateEffect
          className="mb-2 text-2xl md:text-lg font-semibold"
          words="Curious, creative, adaptive — I strive to craft user-centric, scalable, and impactful digital solutions"
        />

        <span
          className={`${quicksand.className} font-light text-lg md:text-lg leading-snug text-wrap tracking-tight`}
        >
          Full-stack trained frontend developer.
        </span>
      </div>

      <div className="mt-6 flex gap-5">
        <Link
          href="/contact"
          className="flex flex-row gap-1 items-center rounded-full w-max outline-none text-md "
        >
          Contact me <BsArrowRightCircleFill />
        </Link>
        <a
          href="/LA_FE_2025_03.pdf"
          target="_blank"
          className="flex flex-row gap-1 items-center rounded-full w-max"
        >
          CV <BsDownload />
        </a>
        <a
          href="https://www.linkedin.com/in/aisyafia/"
          target="_blank"
          className="flex flex-row items-center rounded-full w-max"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/aisyafia"
          target="_blank"
          className="flex flex-row items-center rounded-full w-max"
        >
          <BsGithub />
        </a>
      </div>
    </section>
  );
};

export { Intro };
