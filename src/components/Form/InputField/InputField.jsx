import exclamation from "../../../assets/images/icon-error.svg";

const inputField = ({
  children,
  className,
  label,
  nameGroup,
  validation,
  innerRef,
  ...rest
}) => {
  return (
    <div className={`w-full ${className}`}>
      <input
        className={`relative z-[4] h-[3rem] w-full rounded-lg border-2 border-very-dark-blue/10 px-4 py-3 text-very-dark-blue focus:border-very-dark-blue/50  ${
          validation ? "!border-red-500 pr-10" : ""
        }`}
        name={nameGroup}
        {...rest}
        {...innerRef}
      />

      <label className="sr-only" htmlFor={nameGroup}>
        {label}
      </label>
      {validation && (
        <img
          src={exclamation}
          className="absolute right-3 top-1/2 z-[4] -translate-y-1/2 transform"
          alt=""
          aria-hidden="true"
        />
      )}
      {/* Set the react-hook validation here */}
      {children}
    </div>
  );
};

export default inputField;
