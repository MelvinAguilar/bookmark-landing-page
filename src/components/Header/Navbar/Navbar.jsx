import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import facebook from "../../../assets/images/icon-facebook.svg";
import twitter from "../../../assets/images/icon-twitter.svg";

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  return (
    <nav aria-label="Main">
      <HamburgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <ul
        id="navbar-menu"
        className={`transition-visibility invisible absolute top-0 left-0 z-40 flex h-full w-full flex-col items-center justify-between bg-very-dark-blue/90 tracking-widest opacity-0 md:visible md:static md:h-auto md:w-auto md:flex-row md:items-center md:justify-start md:gap-[3rem] md:bg-transparent md:p-0 md:text-[0.8125rem] md:opacity-100 ${
          isMenuOpen ? "!visible px-8  pt-24 pb-8 opacity-100" : ""
        }`}
      >
        <li>
          <a
            href="#"
            className="uppercase text-white transition duration-300 hover:text-soft-red md:text-slate-900"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#"
            className="uppercase text-white transition duration-300 hover:text-soft-red md:text-slate-900"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="uppercase text-white transition duration-300 hover:text-soft-red md:text-slate-900"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block border-soft-red uppercase text-white transition duration-300 hover:text-soft-red md:rounded-md md:border-[0.188rem] md:bg-soft-red md:py-[0.4995rem] md:px-[1.8745rem] md:hover:bg-white"
          >
            Login
          </a>
        </li>
        <li className="md:hidden">
          <ul className="flex items-center gap-8 ">
            <li>
              <a
                href="#"
                className="block text-2xl uppercase text-slate-900"
                aria-label="facebook"
              >
                <img
                  src={facebook}
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-2xluppercase block text-slate-900"
                aria-label="twitter"
              >
                <img
                  src={twitter}
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
