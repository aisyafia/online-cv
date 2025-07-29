import "./globals.css";
import { Poppins } from "next/font/google";
import { Header, Intro } from "@/components";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

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
        className={`${poppins.className} bg-sky-950 text-violet-50 flex flex-col gap-12 p-10 w-full items-center md:flex-row md:items-start`}
      >
        <div className="bg-[#676394] absolute end-0.5 -z-10 left-0.5 h-[20rem] rounded-full blur-[10rem] sm:w-[40rem]"></div>
        <div className="bg-[#676394] absolute end-0.5 -z-10 left-2/3 h-[20rem] rounded-full blur-[10rem] sm:w-[28rem]"></div>
        <div className="flex justify-center md:justify-start">
          <Intro />
        </div>

        <div className="mt-6 md:mt-24 max-w-full">
          <Header />
          <div className="flex-grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
