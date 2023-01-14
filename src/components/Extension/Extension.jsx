import CardExtension from "./CardExtension/CardExtension";
import chromeLogo from "../../assets/images/logo-chrome.svg";
import firefoxLogo from "../../assets/images/logo-firefox.svg";
import operaLogo from "../../assets/images/logo-opera.svg";

const Extension = () => {
  return (
    <div className="px-4 md:px-8">
      <h2 className="mt-[2.6875rem] mb-[1.1875rem] text-center text-[1.5rem] font-bold text-very-dark-blue md:text-[2rem]">
        Download the extension
      </h2>
      <p className="mx-auto max-w-[51ch] text-center text-very-dark-blue/50 md:text-normal">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <div className="mt-[4rem] flex flex-col justify-center gap-[2.0625rem] md:flex-row">
        <CardExtension
          icon={chromeLogo}
          title="Add to Chrome"
          description="Minimum version 62"
        />
        <CardExtension
          icon={firefoxLogo}
          title="Add to Firefox"
          description="Minimum version 55"
          className="self-center md:mt-[2.6875rem] lg:self-start"
        />
        <CardExtension
          icon={operaLogo}
          title="Add to Opera"
          description="Minimum version 46"
          className="self-end md:mt-[4.75rem] lg:self-start"
        />
      </div>
    </div>
  );
};

export default Extension;
