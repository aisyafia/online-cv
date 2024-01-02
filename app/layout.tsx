import "./globals.css";
import { Noto_Sans, Lexend } from "next/font/google";

const notosans = Noto_Sans({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

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
      <body className={`${lexend.className} bg-sky-950 text-violet-50`}>
        {children}
      </body>
    </html>
  );
}
