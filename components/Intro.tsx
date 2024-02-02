import Image from "next/image";
import profpic from "@/public/main-img.jpg";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Intro = () => {
  return (
    <section className="w-[18rem] p-4">
      <h1>Lutfia Aisya</h1>
      <h3>Full Stack/Frontend Developer</h3>
      <div className="flex justify-start items-center">
        <div>
          <Image
            src={profpic}
            alt="Lutfia picture"
            width={187}
            height={140}
            className="rounded-[20px] object-cover shadow-xl"
          />
        </div>
      </div>

      <div className="w-[12rem] h-[20rem]">
        <h3 className="text-2xl text-center mb-4">Hello, I&apos;m Fia</h3>
        <p className="mb-2">
          I was born and raised in Indonesia. I moved to the Netherlands in
          2020.{" "}
        </p>

        <p className="mb-2">
          I started my code journey at the end of 2022. I joined a Full Stack
          Development bootcamp in Amsterdam.
        </p>

        <p className="mb-2">
          I am now a Frontend Web Development intern in NLC Health Ventures.
        </p>

        <p>Welcome to my page.</p>
      </div>

      <div className="">
        <Link
          href="#contact"
          className="group flex flex-row gap-2 items-center bg-purple rounded-full w-max outline-none"
        >
          Contact me here <BsArrowRightCircleFill />
        </Link>
        <a
          href="/CV_Lutfia_A.pdf"
          target="_blank"
          className="flex flex-row gap-2 items-center bg-purple rounded-full w-max"
        >
          CV <BsDownload />
        </a>
        <a
          href="https://www.linkedin.com/in/aisyafia/"
          target="_blank"
          className="flex flex-row items-center bg-purple rounded-full w-max"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/aisyafia"
          target="_blank"
          className="flex flex-row items-center bg-purple rounded-full w-max"
        >
          <BsGithub />
        </a>
      </div>
    </section>
  );
};

export { Intro };
