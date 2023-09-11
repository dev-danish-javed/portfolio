import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import App_Routes from "../App_Routes";
import vibrateDevice from "../utils/VibrateDevices";
import "./../css/App_Education.css";
const App_Education = ({ activeRoute, handleMenuChange }) => {
  useEffect(() => {
    if (window.location.pathname !== activeRoute)
      handleMenuChange(window.location.pathname);
  });
  return (
    <div className="page-item px-4 slide-in">
      <div className="row">
        <div className="ed-sec b-tech">
          <div className="mt-3 d-flex align-items-center justify-content-between gap-3">
            <div className="fs-4  text-color-accent fw-bold">B.Tech - NIET</div>
            <div>
              <div className=" fw-bold"> Computer Science </div>
              <div className="small"> June 2016 - Sept 2020</div>
            </div>
          </div>
          <div className="faded_line_horizontal"></div>
          <p>
            <span className="fw-bold">
              Noida Institute of Engineering and Technology
            </span>
            , is a self financed Institute. It is situated in Greater Noida. It
            is is affiliated to
            <span className="fw-bold">
              {" "}
              Abdul Kalam Technical University (AKTU)
            </span>{" "}
            and is accredited by the National Board of Accreditation (NBA)
            <br />
            <br />
            Apart from Programming and assignments and projects I learned a lot
            about life as well. It taught me how to handle pressure,how to keep
            up with deadlines, how to work with team, how not to handle
            rejection, how to remain consistent (through attendance😁) and much
            much more.
            <br />
            <br />I scored <span className="fw-bold">76%</span> and after my
            course completion, I received campus placement with{" "}
            <Link
              to={App_Routes.EXPERIENCE.SAPIENT}
              className=" text-color-accent fw-bold text-nowrap"
              onClick={() => {
                vibrateDevice(35);
              }}
            >
              Publicis Sapient
            </Link>
          </p>
        </div>
      </div>
      <div className="faded_line_horizontal mt-0 d-none d-md-block"></div>
      <div className="d-flex flex-column flex-md-row gap-2 gap-md-4">
        <div className="col ed-sec">
          <div className="my-3 d-flex justify-content-between align-items-center">
            <div className="fs-4  text-color-accent fw-bold">
              12<sup className="">th</sup> - RLB
            </div>
            <div className=" fw-bold"> PCM - 2016 </div>
          </div>
          <div className="faded_line_horizontal d-block d-md-none"></div>
          <p>
            <span className="fw-bold">
              Rani Laxmi Bai Memorial Senior Secondary School
            </span>
            , is one the most reputed and prestigious schools in Lucknow. Its
            affiliated with
            <span className="fw-bold">
              {" "}
              Central Board of Secondary Education (CBSE)
            </span>
            <br />
            Here I was introduced to programming for the first time. I learned
            C++ and gained some familiarity with OOPs.
            <br />I joined here in May 2014 and left with{" "}
            <span className="fw-bold">68.4%</span> and{" "}
            <span className="fw-bold">Passion for Programming</span>.
          </p>
        </div>
        <div className="faded_line_vertical mx-0 d-none d-md-block"></div>
        <div className="col ed-sec">
          <div className="my-3 d-flex justify-content-between align-items-center">
            <div className="fs-4  text-color-accent fw-bold">
              10<sup className="">th</sup> - Galaxy
            </div>
            <div className=" fw-bold">2014</div>
          </div>
          <div className="faded_line_horizontal d-block d-md-none"></div>
          <p>
            Galaxy Residential Public School is where I got my basic foundations
            from.Its affiliated with
            <span className="fw-bold">
              {" "}
              Central Board of Secondary Education (CBSE)
            </span>
            <br />
            Along with the academics I learned the morals and behavioral
            mannerism.
            <br />I did pretty well and score{" "}
            <span className="fw-bold">10 CGPA</span> and became the{" "}
            <span className="fw-bold">Head Boy</span> / School Captain as well.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App_Education;
