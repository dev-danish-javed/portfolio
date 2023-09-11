const Experience_Paymentus = () => {
  let tools = [
    "Java",
    "SpringBoot",
    "Web APIs",
    "Microservices",
    "Freemarker",
    "Bootstrap",
    "HTML",
    "CSS",
    "JavaScript",
    "Oracle DB",
    "Tomcat Server",
    "Docker",
    "Jenkins",
    "Jira",
    "Git",
    "Bitbucket",
  ];

  tools=tools.map(tool=><div className="rounded rounded-pill px-2 py-1 shadow-sm" key={tool}>{tool}</div>);

  return (
    <div className="slide-in">
      <div className="mt-3">
        <span className="fs-4 mt-4 text-color-accent fw-lighter">Paxcom -</span>
        <span className="fs-4 mt-4 text-color-accent fw-bold">Paymentus </span>
        <small> (Dec 2022 - Current)</small>
      </div>
      <div className="faded_line_horizontal"></div>
      <p>
        Paymentus (NYSE: PAY) is a leading provider of cloud-based bill payment
        technology and solutions. It delivers next-generation product suite
        through a modern technology stack to more than 1,300 billers across
        North America. Its omni-channel platform provides consumers with
        easy-to-use, flexible and secure electronic bill payment experiences
        through their preferred payment channel and type.
      </p>
      <div>
        <div className="fw-bold mt-2">My Roles and responsibilities</div>
        <div className="faded_line_horizontal my-1"></div>
        <ul>
          <li>Working on front-end and back-end technical solutions</li>
          <li>Providing custom implementation of existing features</li>
          <li>Fixing bugs</li>
          <li>Actively participating and taking scrum calls</li>
          <li>Generating detailed PRs</li>
          <li>
            Keeping track for ticket's testing and release with QA and release
            team
          </li>
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

export default Experience_Paymentus;
