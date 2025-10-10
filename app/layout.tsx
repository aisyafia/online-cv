import "./globals.css";
import { Poppins } from "next/font/google";
import { Header, Intro } from "@/components";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        className={`${poppins.className} bg-sky-950 text-violet-50  p-10 w-full items-center`}
      >
        {/* <div className="bg-[#676394] absolute end-0.5 -z-10 left-0.5 h-[20rem] rounded-full blur-[10rem] sm:w-[40rem]"></div>
        <div className="bg-[#676394] absolute end-0.5 -z-10 left-2/3 h-[20rem] rounded-full blur-[10rem] sm:w-[28rem]"></div> */}
        <Header />
        <div className="flex justify-center">
          <Intro />
        </div>

        <div className="max-w-full">
          <div>{children}</div>
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
            closeButton
          />
        </div>
      </body>
    </html>
  );
}
