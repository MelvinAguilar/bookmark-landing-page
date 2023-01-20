import logo from "../../assets/images/logo-bookmark-light.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-very-dark-blue">
      <div className="mx-auto flex max-w-[73.375rem] flex-col items-center gap-8 px-8 pt-[2.0625rem] pb-[1.875rem] md:flex-row md:gap-0">
        <a href="#" className="z-50">
          <img
            src={logo}
            alt="Bookmark"
            width={148}
            height={25}
            className="transition duration-300 ease-in-out"
          />
        </a>
        <nav aria-label="Footer">
          <ul className="flex flex-col items-center justify-center gap-4 tracking-[0.05em] md:ml-[4rem] md:flex-row md:gap-[2.75rem]">
            <li>
              <a
                href="#"
                className="text-sm uppercase text-white transition duration-300 hover:text-soft-red"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm uppercase text-white transition duration-300 hover:text-soft-red"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="ml-0.5 text-sm uppercase text-white transition duration-300 hover:text-soft-red"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex-1">
          <ul className="flex items-center justify-end gap-[2.5rem]">
            <li>
              <a href="#" aria-label="Facebook" className="block">
                <img
                  src={facebook}
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                  className="hover:filter-orange"
                />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter" className="block">
                <img
                  src={twitter}
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                  className="hover:filter-orange"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
