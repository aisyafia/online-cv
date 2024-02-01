import Link from "next/link";
import { links } from "@/lib/data";

const Header = () => {
  return (
    <header className="z-[999] relative">
      <div className="fixed top-[6rem] left-1/4 ml-4 rounded-none text-violet-100 flex items-center justify-center gap-1 sm:flex-nowrap sm:rounded-full text-center">
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
