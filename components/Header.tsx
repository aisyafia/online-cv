"use client";

import Link from "next/link";
import { links } from "@/lib/data";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="z-[999] relative">
      <div className="fixed top-[6rem] end-[9rem] rounded-none text-violet-100 flex items-center justify-center gap-2 sm:flex-nowrap sm:rounded-full text-center">
        {links.map((link) => {
          return (
            <Link  className="trapezoid w-[10rem]" href={link.hash} key={link.hash}>
              {link.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export { Header };
