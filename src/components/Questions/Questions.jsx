import arrow from "../../assets/images/icon-arrow.svg";

const Questions = () => {
  return (
    <div className="px-4 md:px-8">
      <h2 className="mt-[9.25rem] mb-[1.3125rem] text-center text-[1.5rem] font-bold text-very-dark-blue md:text-[2rem]">
        Frequently Asked Questions
      </h2>
      <p className="mx-auto max-w-[46ch] text-center text-very-dark-blue/50 md:text-normal">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>

      <div className="mx-auto mt-[3.5rem] mb-[3.125rem] max-w-[33.75rem]">
        <details className="border-t border-very-dark-blue/50">
          <summary className="bg-very-light-gray flex w-full cursor-pointer items-center justify-between rounded-md py-[1.1875rem] font-bold tracking-[-0.02em] text-very-dark-blue transition duration-300 hover:text-soft-red md:pr-[1.3125rem] md:text-normal">
            What is bookmark?
            <img
              src={arrow}
              alt=""
              aria-hidden="true"
              className="transition-all duration-300 ease-in-out"
              width={18}
              height={10}
            />
          </summary>
          <p className="px-4 py-3 text-very-dark-blue/50 transition-all duration-500 ease-in-out md:text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </details>
        <details className="border-t border-very-dark-blue/50">
          <summary className="bg-very-light-gray flex w-full cursor-pointer items-center justify-between rounded-md pt-[1.1875rem] pb-[1.375rem] font-bold tracking-[-0.01em] text-very-dark-blue transition duration-300 hover:text-soft-red md:pr-[1.3125rem] md:text-normal">
            How can i request a new browser?
            <img
              src={arrow}
              alt=""
              aria-hidden="true"
              className="transition-all duration-300 ease-in-out"
              width={18}
              height={10}
            />
          </summary>
          <p className="px-4 py-3 text-very-dark-blue/50 md:text-[1rem]">
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </details>
        <details className="border-t border-very-dark-blue/50">
          <summary className="bg-very-light-gray flex w-full cursor-pointer items-center justify-between rounded-md pt-[1.375rem] pb-[1rem] font-bold tracking-[-0.02em] text-very-dark-blue transition duration-300 hover:text-soft-red md:pr-[1.3125rem] md:text-normal">
            Is there a mobile app?
            <img
              src={arrow}
              alt=""
              aria-hidden="true"
              className="transition-all duration-300 ease-in-out"
              width={18}
              height={10}
            />
          </summary>
          <p className="px-4 py-3 text-very-dark-blue/50 md:text-[1rem]">
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </p>
        </details>
        <details className="border-y border-very-dark-blue/50">
          <summary className="bg-very-light-gray flex w-full cursor-pointer items-center justify-between rounded-md py-[1.3125rem] font-bold tracking-[-0.02em] text-very-dark-blue transition duration-300 hover:text-soft-red md:pr-[1.3125rem] md:text-normal">
            What about other Chromium browsers?
            <img
              src={arrow}
              alt=""
              aria-hidden="true"
              className="transition-all duration-300 ease-in-out"
              width={18}
              height={10}
            />
          </summary>
          <p className="px-4 py-3 text-very-dark-blue/50 md:text-[1rem]">
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </p>
        </details>
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="#"
          className="rounded-md border-[0.188rem] border-soft-blue bg-soft-blue py-[0.6558rem] px-[1.5201rem] text-[0.875rem] text-white transition duration-300 hover:bg-white hover:text-soft-blue"
        >
          More info
        </a>
      </div>
    </div>
  );
};

export default Questions;
