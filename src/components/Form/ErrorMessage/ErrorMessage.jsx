const ErrorMessage = ({ children, className = "", ...props }) => {
  return (
    <span
      className={`z-1 absolute -bottom-[1.75rem] left-0 w-full rounded-md bg-red-500 px-2 pb-1 pt-3 text-sm text-white transition-all duration-300 ease-in-out ${className}`}
      {...props}
      id="error-message"
    >
      {children}
    </span>
  );
};

export default ErrorMessage;
