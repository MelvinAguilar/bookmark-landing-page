import Tabs from "../Tabs/Tabs";

const Features = () => {
  return (
    <div className="mx-auto mt-[6.875rem] max-w-[73.375rem] px-4 md:px-8 ">
      <h2 className="text-center text-[1.5rem] font-bold text-very-dark-blue md:text-[2rem]">
        Features
      </h2>
      <p className="mx-auto mt-[1.25rem] mb-[2.875rem] max-w-[47ch] text-center text-very-dark-blue/50 md:text-normal">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <Tabs />
    </div>
  );
};

export default Features;
