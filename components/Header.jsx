"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const links = ["Home", "Curriculum", "About", "Contact"];
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (pathname === "/auth/login" || pathname === "/auth/signup") {
    return null;
  }

  return (
    <>
      <header className="relative flex justify-between items-center max-w-4xl mx-auto sm:px-0 px-5 pt-8 pb-8">
        <h1 className="text-2xl font-bold text-slate-900 ">
          <Link href="/">BS</Link>
        </h1>

        <nav>
          <ul
            className={
              isOpen
                ? "max-sm:flex flex-col absolute top-18 right-4 bg-white p-2"
                : "hidden sm:flex items-center gap-6 text-slate-600"
            }
          >
            {links.map((link) => (
              <li
                key={link}
                className={
                  isOpen
                    ? "border-b-1 text-slate-900 border-b-slate-200 hover:border-b-2 hover:border-black"
                    : "border-b-2  hover:border-b-2 hover:border-black"
                }
              >
                <Link className="text-slate-900 font-semibold text-[0.85rem]" href={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden sm:flex items-center gap-4 text-white ">
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
        <div className="hidden max-sm:block">
          <Image
            onClick={toggleMenu}
            src={!isOpen ? "/menu.png" : "/close.png"}
            width={"28"}
            height={"28"}
            alt="menu icon"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
