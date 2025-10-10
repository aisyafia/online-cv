"use client";

import Link from "next/link";
import { links } from "@/lib/data";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="relative top-0 ">
      <div className="text-violet-100 flex items-center justify-center gap-1 text-center ">
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
