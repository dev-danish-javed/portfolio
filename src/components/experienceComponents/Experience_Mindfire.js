const Experience_Mindfire = () => {
  let tools = [
    "Java",
    "SpringBoot",
    "RestFul APIs",
    "Angular",
    "Bootstrap",
    "HTML",
    "CSS",
    "JavaScript",
    "Mongo DB",
    "Tomcat Server",
    "Jira",
    "Git",
    "Github",
  ];

  tools = tools.map((tool) => (
    <div className="rounded rounded-pill px-2 py-1 shadow-sm" key={tool}>
      {tool}
    </div>
  ));

  return (
    <div className="slide-in">
      <div className="mt-3">
        <span className="fs-4 mt-4 text-color-accent fw-bold">
          Mindfire Solutions{" "}
        </span>
        <small> (Dec 2020 - Nov 2022)</small>
      </div>
      <div className="faded_line_horizontal"></div>
      <p>
        Mindfire Solutions is a 22 years old software development & IT services
        company. It specialize in offering customized technological and digital
        solutions to enable.
        <br />I have been a part of a health care domain project. The project
        provided end to end solution for any hospital's digital needs. From
        patient data management to Insurance claims and Reports, it was capable
        of handling it all.
      </p>
      <div>
        <div className="fw-bold mt-2">My Roles and responsibilities</div>
        <div className="faded_line_horizontal my-1"></div>
        <ul>
          <li>Working on front-end and back-end technical solutions</li>
          <li>Implemented a dashboard to provide application insights</li>
          <li>Implemented reports export in PDF and Excel Format</li>
          <li>Actively participated in client calls</li>
          <li>Provided guidance to teammates</li>
        </ul>
      </div>
      <div>
        <div className="fw-bold mt-2">Tech and Tools Used</div>
        <div className="faded_line_horizontal my-1"></div>
        <div className="d-flex flex-wrap gap-2 gap-md-3 mt-2">{tools}</div>
      </div>
    </div>
  );
};
export default Experience_Mindfire;
