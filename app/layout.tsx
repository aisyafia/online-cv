import "./globals.css";
import { Noto_Sans, Lexend } from "next/font/google";
import { Header, Intro } from "@/components";

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
        className={`${notosans.className} bg-sky-950 text-violet-50 p-10 mx-auto container flex justify-start gap-2 items-center border-2`}
      >
        <div>
          <Intro />
        </div>
        <div>
          <Header />
          <div className="container border-2 w-[53rem] h-[35rem] bg-mudgreen -z-50 p-2 overflow-y-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
