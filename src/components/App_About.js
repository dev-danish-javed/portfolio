import { useEffect } from "react";
import "./../css/App_About.css";
import websiteIcon from "./../assets/Tech Icons/WebSite Icon.png";
import serverIcon from "./../assets/Tech Icons/Server Icon.png";
import stackIcon from "./../assets/Tech Icons/FullStack Icon.png";
import deploymentIcon from "./../assets/Tech Icons/Deployment Icon.png";
const App_About = ({ activeRoute, handleMenuChange }) => {
  class AboutItem {
    constructor(item, desc) {
      this.item = item;
      this.desc = desc;
    }
  }
  let aboutItems = [
    new AboutItem("EXPERIENCE", "2 years"),
    new AboutItem("PROFILE", "Java Full Stack Dev."),
    new AboutItem("RESIDENCE", "Noida, India"),
    new AboutItem("AGE", "25 years"),
  ];

  aboutItems = aboutItems.map((item, index) => (
    <div className="d-flex gap-2 col-12 col-lg-6" key={index}>
      <div className="d-flex col-6 gap-2">
        <div>{item.item}</div>
        <div className="flex-grow-1 border-dotted-bottom"></div>
      </div>
      <div className="text-nowrap">{item.desc}</div>
    </div>
  ));

  useEffect(() => {
    if (window.location.pathname !== activeRoute)
      handleMenuChange(window.location.pathname);
  });

  return (
    <>
      <div className="page-item px-4">
        <div className="fs-4 fw-bold pt-4">
          <span className="text-color-accent">About Me</span>
        </div>
        <div className="faded_line_horizontal"></div>
        <div className="mt-2">
          <strong className="">Hello! I'm Danish Javed</strong>
          <span>
            , Full-Stack Developer from Noida, India. I have rich experience in
            Java, <span className="fw-bold">SpringBoot</span>, <span className="fw-bold">MicrosServices</span> and Angular. I have understanding of databases as well.
            <br />
            Currently, I am exploring AWS and React.
          </span>
          <span className="mt-3 d-block">
            I would love to hear back from you.
          </span>
        </div>
        <div className="faded_line_horizontal"></div>
        <div className="mt-3 d-flex flex-column flex-md-row flex-wrap gap-2 justify-content-between">
          <div className="d-flex justify-content-between w-100 flex-wrap">
            {aboutItems}
          </div>
        </div>

        <div className="fs-4 mt-4 text-color-accent fw-bold">My Services</div>
        <div className="faded_line_horizontal"></div>
        <div className="d-flex flex-column flex-md-row flex-wrap justify-content-start">
          <div className="col-md-5 col-12">
            <div className="d-flex flex-row flex-md-column justify-content-start align-items-md-start align-items-center">
              <img src={stackIcon} alt="" className="pngIcon service-icon" />
              <div className="h5">Full Stack Development</div>
            </div>

            <p className="service-description">
              I can help develop and maintain full stack application. From
              interactive & beautiful UI to fast and secure APIs, I can do it
              all for you. And I can take care of databases as well.
            </p>
          </div>
          <div className="faded_line_vertical"></div>
          <div className="col-md-5 flex-md-grow-1 col-12">
            <div className="d-flex flex-row flex-md-column justify-content-start align-items-md-start align-items-center">
              <img src={serverIcon} alt="" className="pngIcon service-icon" />
              <div className="h5">Back-End Development</div>
            </div>
            <p className="service-description">
              I can help develop and maintain backend services. Along with
              strong understanding of programming concept and APIs, I have
              familiarity with cloud in AWS EC2 and S3. Also I can handle SQL
              and NoSQL databases as per requirements.
            </p>
          </div>
          <div className="col-12 faded_line_horizontal"></div>
          <div className="col-md-5 col-12">
            <div className="d-flex flex-row flex-md-column justify-content-start align-items-md-start align-items-center">
              <img src={websiteIcon} alt="" className="pngIcon service-icon" />
              <div className="h5">Front-End Development</div>
            </div>
            <p className="service-description">
              Responsive web design is one of key skills. I can help develope
              and maintain interactive and beautiful UI. I can make your
              websites look beautiful on any device be it mobile, desktop,
              laptop or tab or what-so-ever.
            </p>
          </div>
          <div className="faded_line_vertical"></div>
          <div className="col-md-5 col-12">
            <div className="d-flex flex-row flex-md-column justify-content-start align-items-md-start align-items-center">
              <div className="d-flex flex-row flex-md-column justify-content-start align-items-md-start align-items-center">
                <img
                  src={deploymentIcon}
                  alt=""
                  className="pngIcon service-icon opacity-75"
                />
                <div className="h5">Website Deployment</div>
              </div>
            </div>
            <p className="service-description">
              I can deploy and host your static websites for a broader reach.
              Add your Website url to cards and receipts and attract much more
              potential buyers.
            </p>
          </div>
        </div>
        <div className="mb-5 pb-5"></div>
      </div>
    </>
  );
};
export default App_About;
