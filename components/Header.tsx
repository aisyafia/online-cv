"use client";

import Link from "next/link";
import Image from "next/image";
import { links } from "@/lib/data";
import React from "react";
import { usePathname } from "next/navigation";
import icon from "@/public/LA_icon.png";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between">
      <Link href={"/"} className=" items-center space-x-2 hidden md:inline">
        <Image
          src={icon}
          alt="Lutfia Aisya icon"
          width={40}
          height={40}
          className="w-auto h-auto justify-end inline"
        />
        <span
          className={`${unbounded.className} ml-4 font-normal text-xl text-violet-300 dark:text-violet-200`}
        >
          Lutfia Aisya
        </span>
      </Link>
      <Link href={"/"} className="inline items-center md:hidden space-x-2">
        <Image
          src={icon}
          alt="Lutfia Aisya icon"
          width={30}
          height={30}
          className="w-auto h-auto justify-end"
        />
      </Link>

      <div className="text-violet-100 flex items-end justify-end gap-1 text-center ">
        {links.map((link) => {
          const isActive =
            pathname ===
            (link.hash.startsWith("/") ? link.hash : `/${link.hash}`);

          return (
            <Link
              className={`w-[10rem] hover:text-violet-300 ${
                isActive ? "border-b-2 border-[#676394] text-violet-300" : ""
              }`}
              href={`/${link.hash}`}
              key={link.hash}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export { Header };
