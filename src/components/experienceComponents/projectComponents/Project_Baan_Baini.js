const Project_Baan_Baini = () => {
  let tools = [
    "Java",
    "SpringBoot",
    "Spring Security",
    "JWT",
    "RestFul APIs",
    "Tomcat Server",
    "AWS S3",
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
            Baan Baini{" "}
          </span>
          <a
            href="https://github.com/mr-danish-javed/BaanBaini"
            target={"_blank"} rel={"noreferrer"}
            className="shadow-sm rounded rounded-pill btn btn-sm border border-secondary px-4 d-flex align-items-center"
          >
            <i className="fa-brands fa-github fs-2 me-2"></i> Github
          </a>
        </div>
      </div>
      <div className="faded_line_horizontal mt-0"></div>
      <p>
        Baan Baini is an small e-commerce application.
        <br />
        This projects help me learn the basics of application design and
        architecture. I get to build the entrie system from scratch and that
        help me understand the challenges of designing robust and scaleable
        projects. I think, working on dummy projects seems to be the best way to
        learn.
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
          <li>Strugged and learned Spring Security</li>
          <li>Gained familarity with Application Design</li>
          <li>Learned basics of AWS S3</li>
          <li>Practiced Spring Boot and securtiy</li>
        </ul>
      </div>
    </div>
  );
};
export default Project_Baan_Baini;
