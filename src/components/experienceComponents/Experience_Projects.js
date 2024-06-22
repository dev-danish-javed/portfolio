import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import App_Routes from "../../App_Routes";
import vibrateDevice from "../../utils/VibrateDevices";

const Experience_Projects = ({ activeRoute, handleMenuChange }) => {
  let navigate = useNavigate();
  let [activeProject, setActiveProject] = useState(
    App_Routes.EXPERIENCE.PROJECTS.default
  );
  class Project {
    constructor(title, url) {
      this.title = title;
      this.url = url;
    }
  }
  let projects = [
    new Project("My Space", App_Routes.EXPERIENCE.PROJECTS.MY_SPACE),
    new Project("Baan Baini", App_Routes.EXPERIENCE.PROJECTS.BAAN_BAINI),
    new Project("Portfolio", App_Routes.EXPERIENCE.PROJECTS.PORTFOLIO),
  ];

  const handleProjectChange = (activeProjectUrl) => {
    vibrateDevice(35);
    setTimeout(() => {
      let newActiveProject = projects.filter(
        (project) => project.url === activeProjectUrl
      )[0];
      setActiveProject(newActiveProject.title);
      navigate(newActiveProject?.url);
    }, 200);
  };
  let projectsNavView = projects.map((project) => (
    <button
      className={
        "btn btn-sm font-poppins rounded rounded-pill projects-button" +
        (project.title === activeProject ? " active-project" : "")
      }
      onClick={() => {
        handleProjectChange(project.url);
      }}
      key={project.title}
    >
      {project.title}
    </button>
  ));
  useEffect(() => {
    if (window.location.pathname === App_Routes.EXPERIENCE.PROJECTS.ROOT) {
      setActiveProject(
        projects.filter(
          (project) => project.url === App_Routes.EXPERIENCE.PROJECTS.default
        )[0].title
      );
      navigate(App_Routes.EXPERIENCE.PROJECTS.default);
    }
    if (window.location.pathname !== activeRoute)
      handleMenuChange(window.location.pathname);
  });

  return (
    <div className="slide-in h-100">
      <div className="d-flex flex-column project-container h-100">
        <div className="mt-4 mb-2 d-flex justify-content-around font-poppins border-accent rounded rounded-5  shadow-top-bottom-only  bg-light">
          {projectsNavView}
        </div>
        <div className="h-100">
          <Outlet />
        </div>
        
      </div>
    </div>
  );
};
export default Experience_Projects;
