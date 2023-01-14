const HamburgerMenu = ({ toggleMenu, isMenuOpen }) => {
  return (
    <button
      type="button"
      onClick={toggleMenu}
      className="pointer z-50 flex h-[1.15rem] w-7 flex-col justify-between md:hidden"
      aria-haspopup="true"
      aria-expanded={isMenuOpen}
      aria-controls="navbar-menu"
    >
      <span className="sr-only">Open menu</span>
      <span
        className={`z-50 h-0.5 w-7 transform transition duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-2 rotate-45 bg-white" : "bg-slate-900"
        }`}
        aria-hidden="true"
      ></span>
      <span
        className={`z-50 h-0.5 w-7 bg-slate-900 transition duration-300 ease-in-out ${
          isMenuOpen ? " opacity-0" : ""
        }`}
        aria-hidden="true"
      ></span>
      <span
        className={`z-50 h-0.5 w-7 transform transition duration-300 ease-in-out ${
          isMenuOpen ? "-translate-y-2 -rotate-45 bg-white" : "bg-slate-900"
        }`}
        aria-hidden="true"
      ></span>
    </button>
  );
};

export default HamburgerMenu;
