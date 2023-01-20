import { useState } from "react";

const TabPanel = ({ title, description, index, selectedTab, image }) => {
  return (
    <div
      role="tabpanel"
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-button-${index}`}
      hidden={selectedTab !== index ? true : false}
      tabIndex={selectedTab === index ? "0" : "-1"}
      className="md:pd-[4.1875rem] grid min-h-[29.8125rem] items-center justify-center gap-8 px-[0.25rem] md:grid-cols-[1.1fr_1fr] md:justify-between md:gap-[1.4375rem] lg:items-start"
    >
      <div className="width-fill-available">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          width={538}
          height={347}
          className="mx-auto lg:mx-0"
        />
      </div>
      <div className="text-center md:flex md:flex-col md:gap-[1.5625rem] md:text-left lg:pt-[3.25rem] lg:pl-[4.5rem]">
        <h3 className="mt-[1.125rem] text-[1.375rem] font-bold leading-none text-very-dark-blue md:text-[2rem]">
          {title}
        </h3>
        <p className="leading-[1.57] text-very-dark-blue/50 md:text-normal">
          {description}
        </p>
        <div className="">
          <a
            href="#"
            className="mx-auto mt-[0.5rem] block w-max rounded-md border-[0.188rem] border-soft-blue bg-soft-blue py-[0.6558rem] px-[1.437rem] text-[0.875rem] font-bold text-white transition duration-300 hover:bg-white hover:text-soft-blue md:mx-0"
          >
            More info
          </a>
        </div>
      </div>
    </div>
  );
};

export default TabPanel;
