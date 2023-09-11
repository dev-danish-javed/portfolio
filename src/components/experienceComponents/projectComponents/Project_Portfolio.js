const Project_Portfolio =() =>{
    let tools = [
        "React",
        "JavaScript",
        "Bootstrap",
        "Font Awesome",
        "HTML",
        "CSS",
      ];
    
      tools = tools.map((tool) => (
        <div className="rounded rounded-pill px-2 py-1 shadow-sm" key={tool}>
          {tool}
        </div>
      ));
    
      return (
        <div className="slide-in">
          <div className="mt-3">
            <div className="d-flex justify-content-between gap-3 align-items-center ">
              <span className="fs-4  about-redirect-button text-color-accent fw-bold">
                Portfolio{" "}
              </span>
              <a
                href="https://github.com/mr-danish-javed/portfolio_2.0"
                target={"_blank"} rel={"noreferrer"}
                className="shadow-sm rounded rounded-pill btn btn-sm border border-secondary px-4 d-flex align-items-center"
              >
                <i className="fa-brands fa-github fs-2 me-2"></i> Github
              </a>
            </div>
          </div>
          <div className="faded_line_horizontal mt-0"></div>
          <p>
            Its the website you are currently viewing.This website gives a little brief about me. 
            Its an attempt to describe who I am and what I do.
            <br />            
            This projects help me enhance my front end skills. As a Full-Stack Developer 
            I must have good front end capacity along with some UI/UX understaing.
            With this project I am exploring react. It also helps me understand responsive web design.
          </p>
          <p>
            This website is completely responsive and works flawlessly on any screen size.
          </p>
    
          <div>
            <div className="fw-bold mt-2">Tech and Tools Used</div>
            <div className="faded_line_horizontal mt-1 mb-2"></div>
            <div className="d-flex flex-wrap gap-2 gap-md-3 mt-3">{tools}</div>
          </div>
    
          <div>
            <div className="fw-bold mt-4">Challenges and Learnings</div>
            <div className="faded_line_horizontal my-1"></div>
            <ul>
              <li>Got started with React</li>
              <li>Learned React Routing</li>
              <li>Improved my responsive web design skills</li>
              <li>Gained some UI/UX experience</li>
              <li>Learned patience and consistency as this took me a good amount of time</li>
            </ul>
          </div>
        </div>
      );
    };
export default Project_Portfolio;