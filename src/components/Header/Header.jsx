import logo from "../../assets/images/logo-bookmark.svg";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("lock-scroll");
  };

  return (
    <header className="mx-auto flex max-w-[73.375rem] items-center justify-between p-5 md:py-[2.9375rem] md:px-8">
      <a
        href="#main"
        className="absolute left-0 z-[100] m-3 -translate-x-[150%] bg-soft-blue p-3 text-white transition focus:translate-x-0"
      >
        Skip to main content
      </a>
      <a href="#" className="z-50 ml-[0.375rem]">
        <img
          src={logo}
          alt="Bookmark"
          width={148}
          height={25}
          className={`transition duration-300 ease-in-out md:filter-none ${
            isMenuOpen ? "filter-logo-white" : ""
          }`}
        />
      </a>

      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
