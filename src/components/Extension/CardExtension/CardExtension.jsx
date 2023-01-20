const CardExtension = ({ icon, title, description, className = "" }) => {
  return (
    <div
      className={`${className} bg-line flex h-fit w-full max-w-[17.75rem] flex-col items-center gap-[1.875rem] rounded-2xl border border-very-dark-blue/10  p-6 pt-[2rem]`}
    >
      <img src={icon} alt="" aria-hidden="true" width={100} height={100} />
      <div className="mt-[0.1875rem] mb-[1.875rem] text-center">
        <h3 className="text-[1.125rem] font-bold tracking-[0.09em] text-very-dark-blue">
          {title}
        </h3>
        <p className="mt-[0.3125rem] text-normal tracking-[-0.07em] text-very-dark-blue/50">
          {description}
        </p>
      </div>

      <a
        href="#"
        className="w-full rounded-md border-[0.188rem] border-soft-blue bg-soft-blue py-[0.6558rem] px-[1.437rem] text-center text-[0.875rem] text-white transition  duration-300 hover:bg-white hover:text-soft-blue"
      >
        Add & Install Extension
      </a>
    </div>
  );
};

export default CardExtension;
