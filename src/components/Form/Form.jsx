import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import InputField from "./InputField/InputField";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { url } = data;
    onHandleSubmit(url).then((res) => {
      if (res === true) {
        reset();
      }
    });
  };

  return (
    <div className="form mt-[3.75rem] bg-soft-blue px-4 pt-[4.375rem] pb-[4.625rem] text-white md:px-8 lg:mt-[9.3125rem]">
      <div className="flex flex-col-reverse">
        <h2 className="mx-auto mt-[2.125rem] max-w-[22ch] text-center text-[1.5rem] font-bold leading-[1.25] md:text-[2rem]">
          Stay up-to-date with what we’re doing
        </h2>
        <p className="text-center text-[0.75rem] uppercase tracking-[0.46em]">
          35,000+ already joined
        </p>
      </div>

      <div className="mx-auto mt-[2.25rem] flex max-w-[27.625rem] flex-col items-center">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid items-center gap-8 md:grid-cols-[2.4fr_1fr] md:flex-row md:justify-between md:gap-4">
            <InputField
              id="mail"
              className="relative"
              nameGroup="mail"
              autoComplete="off"
              placeholder="Enter your email address"
              label="Input your email"
              innerRef={{
                ...register("mail", {
                  required: {
                    value: true,
                    message: "Please add an email",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email",
                  },
                }),
              }}
              validation={errors.mail}
              aria-invalid={errors.mail ? "true" : "false"}
              aria-describedby={errors.mail ? "mail-error" : null}
            >
              <div aria-live="polite" aria-atomic="true" className="w-full">
                {errors.mail?.type === "required" && (
                  <ErrorMessage>{errors.mail.message}</ErrorMessage>
                )}
                {errors.mail?.type === "pattern" && (
                  <ErrorMessage>{errors.mail.message}</ErrorMessage>
                )}
              </div>
            </InputField>
            <button
              type="submit"
              className="h-[3rem] w-full rounded-lg border-[0.188rem] border-soft-red bg-soft-red py-[0.6558rem] text-white transition duration-300 hover:bg-white hover:text-soft-red"
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
