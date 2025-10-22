"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const links = ["Home", "Curriculum", "About", "Contact"];
  const pathname = usePathname();

  if (pathname === "/auth/login" || pathname === "/auth/signup") {
    return null;
  }

  return (
    <>
      <header className="flex justify-between items-center max-w-4xl mx-auto pt-8 pb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          <Link href="/">BS</Link>
        </h1>
        <nav>
          <ul className="flex items-center gap-6 text-slate-600">
            {links.map((link) => (
              <li
                key={link}
                className="border-b-2 border-b-transparent hover:border-b-2 hover:border-black"
              >
                <Link href={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4 text-white">
          <Link
            href={"/auth/login"}
            className="border border-slate-500 px-5 py-[0.2rem] text-black rounded-md hover:bg-slate-900 hover:text-white hover:cursor-pointer"
          >
            Log In
          </Link>
          <Link
            href={"/auth/signup"}
            className="bg-slate-900 border px-5 py-[0.2rem] rounded-md hover:cursor-pointer hover:bg-transparent hover:border hover:border-slate-500 hover:text-slate-900"
          >
            Sign Up
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
