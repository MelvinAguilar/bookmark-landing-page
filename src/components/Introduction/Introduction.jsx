import hero from "../../assets/images/illustration-hero.svg";

const Introduction = () => {
  return (
    <div className="mx-auto mt-[3.5625rem] flex max-w-[73.375rem] flex-col items-center justify-center px-4 md:flex-row-reverse md:justify-between md:gap-16 md:px-8">
      <div className="width-fill-available banner-1 flex-[1.08]">
        <img
          src={hero}
          alt=""
          aria-hidden="true"
          width={657}
          height={466}
          className="mx-auto lg:max-w-[125%]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-[1.625rem] text-center md:text-left">
        <h1 className="mt-8 text-[1.5rem] font-[500] leading-[1.05] text-very-dark-blue md:mt-0 md:text-[3rem]">
          A Simple Bookmark Manager
        </h1>
        <p className="text-very-dark-blue/50 md:text-normal">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 md:my-[0.5625rem] md:flex-row md:justify-start">
          <a
            href="#"
            className="rounded-md bg-soft-blue py-[0.8438rem] px-[1.7081rem] text-[0.875rem] font-bold text-white"
          >
            Get it on Chrome
          </a>
          <a
            href="#"
            className="rounded-md bg-white py-[0.8438rem] px-[1.7081rem] text-[0.875rem] font-bold text-gray-700 shadow-2xl"
          >
            Get it on Firefox
          </a>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
