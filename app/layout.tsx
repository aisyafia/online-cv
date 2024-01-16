import "./globals.css";
import { Noto_Sans, Lexend } from "next/font/google";

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
      <body className={`${notosans.className} bg-sky-950 text-violet-50 px-[77px] py-[86px]`}>
        {children}
      </body>
    </html>
  );
}
