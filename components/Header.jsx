import Link from "next/link";

const Header = () => {
  const links = ["Home", "Curriculum", "About", "Contact"];

  return (
    <header className="flex justify-between items-center">
      <h1 className="text-xl font-bold ">
        <Link href="/">BS</Link>
      </h1>
      <nav>
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link}>
              <Link href={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
