import "./globals.css";
import { Noto_Sans, Lexend } from "next/font/google";
import { Intro } from "@/components";

const notosans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Lutfia Aisya | Resume",
  description: "Lutfia junior full stack/front end developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${notosans.className} bg-sky-950 text-violet-50 px-[77px] py-[86px]`}
      >
        <h1>Lutfia Aisya</h1>
        <h3>Full Stack/Frontend Developer</h3>
        <Intro />
        <div className="absolute left-1/4 px-2">{children}</div>
      </body>
    </html>
  );
}
