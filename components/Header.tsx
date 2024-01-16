import Link from "next/link";
import { links } from "@/lib/data";

const Header = () => {
  return (
    <header className="z-[999] relative">
      <div className="fixed top-[6rem] end-[9rem] h-[2rem] max-w-[72rem] rounded-none bg-purple text-violet-100 flex flex-wrap gap-2 sm:flex-nowrap sm:rounded-full text-center">
        {links.map((link) => {
          return (
            <Link  className="w-[10rem] py-1" href={link.hash} key={link.hash}>
              {link.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export { Header };
