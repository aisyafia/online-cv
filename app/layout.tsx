import "./globals.css";
import { Noto_Sans, Raleway } from "next/font/google";
import { Header, Intro } from "@/components";
import { DialogProvider, useDialog } from "@/components/DialogProvider";
import ChildrenWrapper from "@/components/ChildrenWrapper";

const notosans = Noto_Sans({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

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
    <DialogProvider>
      <html lang="en">
        <body
          className={`${raleway.className} bg-sky-950 text-violet-50 p-10 mx-auto container flex justify-center gap-8 items-center h-[99vh] `}
        >
          <div className="bg-[#676394] absolute end-0.5 -z-10 left-0.5 h-[20rem] rounded-full blur-[10rem] sm:w-[40rem]"></div>
          <div className="bg-[#676394] absolute end-0.5 -z-10 left-2/3 h-[20rem] rounded-full blur-[10rem] sm:w-[28rem]"></div>

          <div>
            <Intro />
          </div>
          <div>
            <Header />
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </div>
        </body>
      </html>
    </DialogProvider>
  );
}
