"use client";

import Link from "next/link";
import Image from "next/image";
import { links } from "@/lib/data";
import React from "react";
import { usePathname } from "next/navigation";
import icon from "@/public/LA_icon.png";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-end justify-between">
      <Link href={"/"} className="flex items-end">
        <Image
          src={icon}
          alt="Lutfia Aisya icon"
          width={50}
          height={50}
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
