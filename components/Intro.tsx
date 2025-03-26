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
    <section className="w-[18rem] h-[90vh] p-4">
      <TextGenerateEffect
        className={`${quicksand.className} text-4xl`}
        words="Lutfia Aisya"
      />
      <h3 className={`${quicksand.className} font-light mb-4`}>
        Frontend Developer
      </h3>

      <div className="flex justify-start items-center mb-4">
        <div>
          <Image
            src={profpic}
            alt="Lutfia picture"
            width={187}
            height={140}
            className="rounded-[20px] object-cover shadow-md shadow-neutral-400"
          />
        </div>
      </div>

      <div className="w-[12rem]">
        <TextGenerateEffect
          className="mb-2 text-sm"
          words="Curious, creative, adaptive — I strive to craft user-centric, scalable, and impactful digital solutions"
        />

        <span
          className={`${quicksand.className} font-light text-sm leading-tight mb-6 text-wrap tracking-tight lin`}
        >
          Started off my education in finance, grown into research and strategy,
          moved to the Netherlands in '20, switched into web development in '22.
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
