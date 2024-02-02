import Link from "next/link";
import { links } from "@/lib/data";
import React from "react";

const Header = () => {
  return (
    <header className="relative">
      <div className="text-violet-100 flex items-center justify-center gap-1 text-center">
        {links.map((link) => {
          return (
            <Link
              className="trapezoid w-[10rem] "
              href={link.hash}
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
