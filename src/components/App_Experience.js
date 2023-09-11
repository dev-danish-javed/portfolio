import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import App_Routes from "../App_Routes";
import vibrateDevice from "../utils/VibrateDevices";
import "./../css/App_Experience.css";

const App_Experience = ({ activeRoute, handleMenuChange }) => {
  let navigate = useNavigate();

  class Tab {
    constructor(title, url) {
      this.title = title;
      this.url = url;
    }
  }

  let tabs = [
    new Tab("Paymentus", App_Routes.EXPERIENCE.PAYMENTUS),
    new Tab("Mindfire", App_Routes.EXPERIENCE.MINDFIRE),
    new Tab("Projects", App_Routes.EXPERIENCE.PROJECTS.ROOT),
    new Tab("Sapient", App_Routes.EXPERIENCE.SAPIENT),
  ];

  const [activeTab, setActiveTab] = useState(
    tabs.filter((tab) => window.location.pathname?.includes(tab.url))[0]?.title
  );

  let tabsView = tabs.map((tab, index) => (
    <div
      className={
        "company-tab col " + (tab.title === activeTab ? " active" : "")
      }
      key={tab.title}
    >
      <button className="btn btn-sm" onClick={() => handleTabChange(tab.url)}>
        {tab.title}
      </button>
    </div>
  ));
  const handleTabChange = (tabUrl) => {
    setActiveTab(tabs.filter((tab) => tab.url === tabUrl)[0].title);
    vibrateDevice(35);
    navigate(tabUrl);
  };

  useEffect(() => {
    if (window.location.pathname === App_Routes.EXPERIENCE.ROOT) {
      setActiveTab(
        tabs.filter((tab) => tab.url === App_Routes.EXPERIENCE.default)[0].title
      );
      navigate(App_Routes.EXPERIENCE.default);
    }
    if (window.location.pathname !== activeRoute)
      handleMenuChange(window.location.pathname);
  });

  return (
    <div className="page-item px-4 experience-component pb-4">
      <div className="shadow-top-bottom-only rounded rounded-3 w-100 companies-tabs text-center d-flex align-items-center font-poppins mt-3 flex-wrap border-end-0 border-start-0">
        {tabsView}
      </div>
      <Outlet />
    </div>
  );
};
export default App_Experience;
