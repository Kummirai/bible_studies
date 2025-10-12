import Link from "next/link";

const Header = () => {
  const links = ["Home", "Curriculum", "About", "Contact"];

  return (
    <header className="flex justify-between items-center max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold ">
        <Link href="/">BS</Link>
      </h1>
      <nav>
        <ul className="flex items-center gap-6 text-gray-600">
          {links.map((link) => (
            <li key={link}>
              <Link href={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4 text-white">
        <button className="border border-gray-500 px-5 py-[0.2rem] text-black rounded-md hover:bg-black hover:text-white hover:cursor-pointer">
          Log In
        </button>
        <button className="bg-black border px-5 py-[0.2rem] rounded-md hover:cursor-pointer hover:bg-transparent hover:border hover:border-gray-500 hover:text-black">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
