import { useEffect } from "react";
import "./../css/App_Skill.css";
import javaIcon from "./../assets/Tech Icons/Java Icon.png";
import angularIcon from "./../assets/Tech Icons/Angular Icon.png";
import springbootIcon from "./../assets/Tech Icons/Springboot Icon.png";
import microServicesIcon from "./../assets/Tech Icons/MicroServices Icon.png"
import reactIcon from "./../assets/Tech Icons/React Icon.png";
import dbIcon from "./../assets/Tech Icons/DB Icon.png";
import mongoDBIcon from "./../assets/Tech Icons/MongoDB Icon.png";
import gitIcon from "./../assets/Tech Icons/Git Icon.png";
import jiraIcon from "./../assets/Tech Icons/Jira Icon.png";
import htmlIcon from "./../assets/Tech Icons/HTML Icon.png";
import cssIcon from "./../assets/Tech Icons/CSS Icon.png";
import javaScriptIcon from "./../assets/Tech Icons/JavaScript Icon.png";
import typescriptScriptIcon from "./../assets/Tech Icons/TypeScript Icon.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import AppProgressBar from "../utils/AppProgressBar";
import javaCertificate from "./../assets/Certificates/Java_Certificate.png";
import problemSolvingCertificate from "./../assets/Certificates/Problem_Solving_Certificate.png";
import angularCertificate from "./../assets/Certificates/Angular_Certificate.png";
import reactCertificate from "./../assets/Certificates/React_Certificate.png";
import javaScriptCertificate from "./../assets/Certificates/JavaScript_Certificate.png";
import microServicesCertificate from "./../assets/Certificates/MicroServices_Certificate.jpg";
import { useState } from "react";
const App_SKill = ({ activeRoute, handleMenuChange }) => {
  let [skillsViewGrid, setSkillsViewGrid] = useState(false);

  useEffect(() => {
    if (window.location.pathname !== activeRoute)
      handleMenuChange(window.location.pathname);
  });

  class Skill {
    constructor(icon, value, name) {
      this.icon = icon;
      this.value = value;
      this.name = name;
    }
  }
  class Certificate {
    constructor(image, url, topic) {
      this.image = image;
      this.url = url;
      this.topic = topic;
    }
  }
  let skills = [
    new Skill(javaIcon, 85, "Java"),
    new Skill(springbootIcon, 70, "SpringBoot"),
    new Skill(microServicesIcon, 67, "MicroServices"),
    new Skill(angularIcon, 65, "Angular"),
    new Skill(mongoDBIcon, 40, "MongoDB"),
    new Skill(dbIcon, 50, "SQL"),
    new Skill(reactIcon, 40, "React"),
    new Skill(gitIcon, 65, "GIT"),
    new Skill(jiraIcon, 65, "Jira"),
    new Skill(htmlIcon, 75, "HTML"),
    new Skill(cssIcon, 55, "CSS"),
    new Skill(javaScriptIcon, 75, "JavaScript"),
    new Skill(typescriptScriptIcon, 55, "TypeScript"),
  ];
  skills = skills.map((skill, index) => (
    <AppProgressBar
      icon={skill.icon}
      value={skill.value}
      name={skill.name}
      key={index}
    ></AppProgressBar>
  ));

  let certificates = [
    new Certificate(
      javaCertificate,
      "https://www.hackerrank.com/certificates/434371378a5d",
      "Java"
    ),
    new Certificate(
      microServicesCertificate,
      "https://www.udemy.com/certificate/UC-bc3f458b-13cd-439e-86c1-49c990669ff6/",
      "MicroServices"
    ),
    new Certificate(
      problemSolvingCertificate,
      "https://www.hackerrank.com/certificates/07a3f6563470",
      "Problem Solving"
    ),
    new Certificate(
      angularCertificate,
      "https://www.hackerrank.com/certificates/cdf5996c008d",
      "Angular"
    ),
    new Certificate(
      reactCertificate,
      "https://www.hackerrank.com/certificates/d039f1eba3c8",
      "React"
    ),
    new Certificate(
      javaScriptCertificate,
      "https://www.hackerrank.com/certificates/2c11f5fc8e38",
      "JavaScript"
    ),
  ];
  certificates = certificates.map((certi) => (
    <a
      href={certi.url}
      target={"_blank"} rel={"noreferrer"}
      className="text-decoration-none text-dark col-5 py-2"
      key={certi.url}
    >
      <img
        src={certi.image}
        className="w-100 rounded-bottom rounded rounded-3 "
        alt={certi.topic}
      ></img>
      <div className="text-center py-1 shadow-sm rounded-top rounded-pill">
        {certi.topic}
      </div>
    </a>
  ));
  return (
    <>
      <div className="page-item px-3">
        <div className="fs-4 mt-4 text-color-accent fw-bold">My Skills</div>
        <div className="faded_line_horizontal"></div>
        <div>
          I have rich skill set for Full Stack Development. I primarily do{" "}
          <span className="text-color-accent fw-semibold">Java</span> for
          backend services. Fast and secure RESTful Web Services and REST APIs
          are my key skill.
          <br />I use{" "}
          <span className="text-color-accent fw-semibold"> Angular</span> and
          Bootstrap for frontend to create beautiful and responsive websites.
          <br />I can handle both{" "}
          <span className="text-color-accent fw-semibold">SQL</span> and{" "}
          <span className="text-color-accent fw-semibold">NoSQL</span> Databases
          as required.
          <br />I even have little exposure to{" "}
          <span className="text-color-accent fw-semibold">Cloud</span>, with{" "}
          <span className="text-color-accent fw-semibold">AWS S3</span> &{" "}
          <span className="text-color-accent fw-semibold">EC2</span>.
        </div>
        {/* <div className="faded_line_horizontal"></div> */}
        <div className="fs-4 text-color-accent mt-5 d-flex align-items-center gap-3">
          <span>Tech and Tools</span>
          <span
            className={
              "arrow flex-grow-1 material-symbols-outlined " +
              (skillsViewGrid ? "opacity-0" : "")
            }
          >
            arrow_forward
          </span>
          <button
            className="btn btn-lg"
            onClick={() => {
              setSkillsViewGrid(!skillsViewGrid);
            }}
          >
            <i
              className={
                " fa-solid align-self-end fa-list " +
                (skillsViewGrid ? "" : "d-none")
              }
            ></i>
            <span
              className={
                "fs-2 material-symbols-outlined " +
                (skillsViewGrid ? "d-none" : "")
              }
            >
              apps
            </span>
            {/* <span className="fa-solid fa-grid"></span> */}
          </button>
        </div>
        <div className="faded_line_horizontal"></div>
        <div
          className={
            "skills-badges overflow-auto d-flex gap-3 pb-4 " +
            (skillsViewGrid ? "flex-wrap justify-content-start gap-md-5" : "")
          }
        >
          {skills}
        </div>

        <div className="d-flex gap-4 flex-column flex-md-row mt-5">
          <div className="flex-grow-1">
            <div className="fs-5 text-color-accent">Tech Skills</div>
            <div className="faded_line_horizontal"></div>

            <div className="my-3">
              <div>Back-End</div>
              <ProgressBar now={75} />
            </div>
            <div className="my-3">
              <div>Front-End</div>
              <ProgressBar now={70} />
            </div>
            <div className="my-3">
              <div>Databases</div>
              <ProgressBar now={60} />
            </div>
            <div className="my-3">
              <div>UX Design</div>
              <ProgressBar now={55} />
            </div>
          </div>
          <div className="faded_line_vertical"></div>
          <div className="flex-grow-1">
            <div className="fs-5 text-color-accent">Soft Skills</div>
            <div className="faded_line_horizontal"></div>
            <div className="my-3">
              <div>Communication</div>
              <ProgressBar now={75} />
            </div>
            <div className="my-3">
              <div>Problem Solving</div>
              <ProgressBar now={70} />
            </div>
            <div className="my-3">
              <div>Time Management</div>
              <ProgressBar now={75} />
            </div>
            <div className="my-3">
              <div>English</div>
              <ProgressBar now={70} />
            </div>
          </div>
        </div>

        <div className="faded_line_horizontal"></div>
        <div className="fs-5 text-color-accent">HackerRank Certificates</div>

        <div className="certificates d-flex flex-wrap justify-content-around mt-3 gap-2">
          {certificates}
        </div>
      </div>
    </>
  );
};
export default App_SKill;
