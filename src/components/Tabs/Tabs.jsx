import { useState } from "react";
import TabPanel from "./TabPanel/TabPanel";
import illustrationFeaturesTab1 from "../../assets/images/illustration-features-tab-1.svg";
import illustrationFeaturesTab2 from "../../assets/images/illustration-features-tab-2.svg";
import illustrationFeaturesTab3 from "../../assets/images/illustration-features-tab-3.svg";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const [tabsNames] = useState([
    {
      title: "Simple Bookmarking",
    },
    {
      title: "Speedy Searching",
    },
    {
      title: "Easy Sharing",
    },
  ]);
  const [tabs] = useState([
    {
      title: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      image: illustrationFeaturesTab1,
    },
    {
      title: "Speedy Searching",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      image: illustrationFeaturesTab2,
    },
    {
      title: "Easy Sharing",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      image: illustrationFeaturesTab3,
    },
  ]);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const handleNextTab = () => {
    if (selectedTab === tabs.length - 1) {
      setSelectedTab(0);
    } else {
      setSelectedTab(selectedTab + 1);
    }
  };

  return (
    <div>
      <ul
        role="tablist"
        className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-0"
        aria-label="Bookmark features"
      >
        {tabsNames &&
          tabsNames.map((tab, index) => (
            <li role="presentation" className="text-center" key={`b-${index}`}>
              <button
                id={`tab-button-${index}`}
                role="tab"
                aria-selected={selectedTab === index}
                aria-controls={`tab-panel-${index}`}
                tabIndex={selectedTab === index ? "0" : "-1"}
                className={`border-tab relative min-w-[15.2325rem] border-b-2 px-6 py-4 tracking-[0.04em] text-very-dark-blue/50 transition duration-300 hover:text-soft-red md:px-[2.6875rem] md:py-[1.625rem] ${
                  selectedTab === index && "border-selected"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </button>
            </li>
          ))}
      </ul>

      <div className="banner-2 py-[4.3125rem]">
        {tabs &&
          tabs.map((tab, index) => (
            <TabPanel
              key={`t-${index}`}
              selectedTab={selectedTab}
              index={index}
              title={tab.title}
              description={tab.description}
              image={tab.image}
            />
          ))}
      </div>
    </div>
  );
};

export default Tabs;
