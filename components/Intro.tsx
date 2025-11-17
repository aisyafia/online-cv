import Image from "next/image";

import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Quicksand } from "next/font/google";
import { TextGenerateEffect } from "./ui/GenerateText";
import { IntroText } from "./IntroText";

const quicksand = Quicksand({ subsets: ["latin"] });

const Intro = () => {
  return (
    <section className="w-full flex justify-center items-between p-4 mt-16 ">
      {/* <div className="flex justify-center md:justify-start items-center mb-4">
        <Image
          src={profpic}
          alt="Lutfia picture"
          width={374}
          height={280}
          className="rounded-[20px] object-cover shadow-md shadow-neutral-400"
        />
      </div> */}

      <div className="text-right flex flex-col justify-between">
        <IntroText />

        {/* <div className="mt-6 flex gap-5">
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
        </div> */}
      </div>
    </section>
  );
};

export { Intro };
