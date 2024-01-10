import Image from "next/image";
import profpic from "@/public/main-img.jpg"
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Intro = () => {
    return (
        <section>
            <div className="flex justify-start items-center">
            <div>
                <Image 
                src={profpic}
                alt="Lutfia picture"
                width={187}
                height={193}
                className="rounded-[20px] object-cover shadow-xl"
                />
            </div>
            </div>

            <div className="w-[12rem] h-[20rem]">
            <h3 className="text-2xl text-center mb-4">Hello, I&apos;m Fia</h3>
            <p>I was born and raised in Indonesia. I moved to the Netherlands in 2020. </p>
            <br />
            <p>I started my code journey at the end of 2022. I joined a Full Stack Development bootcamp in Amsterdam.</p>
            <br />
            <p>I am now a Frontend Web Development intern in NLC Health Ventures.</p>
            <br />
            <p>Welcome to my page.</p>
            </div>

            <div className="flex flex-row gap-8">
                <Link href="#contact" className="flex flex-row gap-2 items-center">
                Contact me here <BsArrowRightCircleFill />
                </Link>
                <a href="/CV_Lutfia_A.pdf" target="_blank" className="flex flex-row gap-2 items-center">
                CV <BsDownload />
                </a>
                <a href="https://www.linkedin.com/in/aisyafia/" target="_blank" className="flex flex-row gap-2 items-center">
                <BsLinkedin />
                </a>
                <a href="https://github.com/aisyafia" target="_blank" className="flex flex-row gap-2 items-center">
                    <BsGithub />
                </a>
            </div>
        </section>
    )
}

export {  Intro }