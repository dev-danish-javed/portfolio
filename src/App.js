import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import App_Routes from "./App_Routes";
import App_About from "./components/App_About";
import App_Contact from "./components/App_Contact";
import App_Education from "./components/App_Education";
import App_Experience from "./components/App_Experience";
import App_Nav from "./components/App_Nav";
import App_Profile_Card from "./components/App_Profile_Card";
import App_Skill from "./components/App_Skill";
import "./index.css";
import bubbles from "./utils/Bubbles";
import menuItems from "./utils/MenuItems";
import Experience_Payemntus from './components/experienceComponents/Experience_Paymentus';
import Experience_Mindfire from './components/experienceComponents/Experience_Mindfire';
import Experience_Projects from './components/experienceComponents/Experience_Projects';
import Experience_Sapient from './components/experienceComponents/Experience_Sapient';
import Project_My_Space from "./components/experienceComponents/projectComponents/Project_My_Space";
import Project_Portfolio from "./components/experienceComponents/projectComponents/Project_Portfolio";
import Project_Baan_Baini from "./components/experienceComponents/projectComponents/Project_Baan_Baini";

function App() {
  const [activeRoute, setActiveRoute] = useState(window.location.pathname);

  // let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  let [isMobile,setIsMobile]=useState(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  
  let resizeObserver=new ResizeObserver(entries=>{
    setIsMobile(window.screen.width <800);
  });
  resizeObserver.observe(document.body);
  const handleMenuChange = (route) => {
    setActiveRoute(route);
  };
  useEffect(() => {
    if (window.location.pathname !== activeRoute)
      handleMenuChange(window.location.pathname);
  });

  return (
    <div className="app-container d-flex flex-column flex-lg-row justify-content-between gap-2">
      <div className="bg-bubbles mx-auto vh-100 d-flex flex-wrap">
        {bubbles}
      </div>
      <div className="position-absolute vw-100">
        <div className="app d-flex flex-column flex-lg-row justify-content-lg-center w-100">
          <div className="mt-lg-5 pt-lg-0">
            <App_Nav
              menuItems={menuItems}
              handleMenuChange={handleMenuChange}
              isMobile={isMobile}
              activeRoute={activeRoute}
            />
          </div>
          <div className={"mt-3 mt-lg-0 d-none d-lg-block"}>
            <App_Profile_Card />
          </div>
          <div className="mt-3 mt-lg-0 rounded-3 align-self-center overflow-hidden">
            <div className="page-background">
            <Routes>
              <Route
                path={App_Routes.ROOT}
                element={
                  isMobile ? (
                    <App_Profile_Card
                      isMobile={isMobile}
                      handleMenuChange={handleMenuChange}
                      activeRoute={activeRoute}
                    />
                  ) : (
                    <App_About
                      handleMenuChange={handleMenuChange}
                      activeRoute={activeRoute}
                    />
                  )
                }
              />
              <Route
                path={App_Routes.ABOUT}
                element={
                  <App_About
                    handleMenuChange={handleMenuChange}
                    activeRoute={activeRoute}
                  />
                }
              />
              <Route
                path={App_Routes.SKILLS}
                element={
                  <App_Skill
                    handleMenuChange={handleMenuChange}
                    activeRoute={activeRoute}
                  />
                }
              />
              <Route
                path={App_Routes.EDUCATION}
                element={
                  <App_Education
                    handleMenuChange={handleMenuChange}
                    activeRoute={activeRoute}
                  />
                }
              />
              <Route
                path={App_Routes.EXPERIENCE.ROOT}
                element={
                  <App_Experience
                    handleMenuChange={handleMenuChange}
                    activeRoute={activeRoute}
                  />
                }
              >
                
                <Route
                  path={App_Routes.EXPERIENCE.PAYMENTUS}
                  element={
                    <Experience_Payemntus
                      handleMenuChange={handleMenuChange}
                      activeRoute={activeRoute}
                    />
                  }
                />
                <Route
                  path={App_Routes.EXPERIENCE.MINDFIRE}
                  element={
                    <Experience_Mindfire
                      handleMenuChange={handleMenuChange}
                      activeRoute={activeRoute}
                    />
                  }
                />
                <Route
                  path={App_Routes.EXPERIENCE.PROJECTS.ROOT}
                  element={
                    <Experience_Projects
                      handleMenuChange={handleMenuChange}
                      activeRoute={activeRoute}
                    />
                  }
                >
                <Route
                  path={App_Routes.EXPERIENCE.PROJECTS.MY_SPACE}
                  element={
                    <Project_My_Space
                      handleMenuChange={handleMenuChange}
                      activeRoute={activeRoute}
                    />
                  }
                />
                <Route
                  path={App_Routes.EXPERIENCE.PROJECTS.BAAN_BAINI}
                  element={
                    <Project_Baan_Baini
                      handleMenuChange={handleMenuChange}
                      activeRoute={activeRoute}
                    />
                  }
                />
                <Route
                  path={App_Routes.EXPERIENCE.PROJECTS.PORTFOLIO}
                  element={
                    <Project_Portfolio
                      handleMenuChange={handleMenuChange}
                      activeRoute={activeRoute}
                    />
                  }
                />
                </Route>
                <Route
                  path={App_Routes.EXPERIENCE.SAPIENT}
                  element={
                    <Experience_Sapient
                      handleMenuChange={handleMenuChange}
                      activeRoute={activeRoute}
                    />
                  }
                />

              </Route>
              <Route
                path={App_Routes.CONTACT}
                element={
                  <App_Contact
                    handleMenuChange={handleMenuChange}
                    activeRoute={activeRoute}
                  />
                }
              />
            </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
