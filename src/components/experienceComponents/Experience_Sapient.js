const Experience_Sapient = () => {
  let tools = [
    "Java",
    "Selenium",
    "Rest Assured",
    "jUnit",
    "Cucumber",
    "Jenkins",
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
          Publicis Sapient
        </span>
        <small> ( Jan 2020 - June 2020)</small>
      </div>
      <div className="faded_line_horizontal"></div>
      <p>
        Publicis Sapient is a digital transformation partner helping established
        organizations get to their future, digitally-enabled state, both in the
        way they work and the way they serve their customers.
        <br />
        I have been a part of a e-commerce project. The client used its own
        website to sell its specialty measurement tools.
        <br />I was a part of the QA team and used to handle automation testing
        with Selenium and Cucumber.
      </p>
      <div>
        <div className="fw-bold mt-2">My Roles and responsibilities</div>
        <div className="faded_line_horizontal my-1"></div>
        <ul>
          <li>Worked on web automation testing with Selenium</li>
          <li>Added API test cases with Rest Assured</li>
          <li>Wrote multiple cucumber test suits</li>
          <li>Handled reports with Surefire and Cucumber</li>
          <li>Reported multiple test scenarios missed by manual testers</li>
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
export default Experience_Sapient;
