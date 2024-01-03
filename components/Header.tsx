import Link from "next/link";
import { links } from "@/lib/data";

const Header = () => {
  return (
    <header className="z-[999] relative">
      <div className="fixed top-0 left-1/2 h-[2rem] w-full rounded-none bg-[#473E66] text-violet-100 flex flex-wrap gap-2">
        {links.map((link) => {
          return (
            <Link href={link.hash} key={link.hash}>
              {link.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export { Header };
