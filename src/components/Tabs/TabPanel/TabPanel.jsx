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
          loading="lazy"
          className="mx-auto lg:mx-0"
        />
      </div>
      <div className="text-center md:flex md:flex-col md:gap-[1.5625rem] md:text-left lg:pt-[3.25rem] lg:pl-[4.5rem]">
        <h2 className="mt-[1.125rem] text-[1.375rem] font-bold leading-none text-very-dark-blue md:text-[2rem]">
          {title}
        </h2>
        <p className="leading-[1.57] text-very-dark-blue/50 md:text-normal">
          {description}
        </p>
        <div className="">
          <a
            href="#"
            className="mx-auto mt-[0.5rem] block w-max rounded-md bg-soft-blue py-[0.8438rem] px-[1.625rem] text-[0.875rem] font-bold text-white md:mx-0"
          >
            More info
          </a>
        </div>
      </div>
    </div>
  );
};

export default TabPanel;
