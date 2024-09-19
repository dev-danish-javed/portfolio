const Project_My_Space = () => {
  let tools = [
    'Java',
    'SpringBoot',
    'RestFul APIs',
    'Thymeleaf',
    'Google Charts',
    'Bootstrap',
    'HTML',
    'CSS',
    'JavaScript',
    'Tomcat Server',
  ];

  tools = tools.map((tool) => (
    <div className='rounded rounded-pill px-2 py-1 shadow-sm' key={tool}>
      {tool}
    </div>
  ));

  return (
    <div className='slide-in pb-5'>
      <div className='mt-3'>
        <div className='d-flex justify-content-between gap-3 align-items-center '>
          <span className='fs-4  about-redirect-button text-color-accent fw-bold'>
            My Space{' '}
          </span>
          <a
            href='https://github.com/dev-danish-javed/My-Space-App'
            target={'_blank'}
            rel={'noreferrer'}
            className='shadow-sm rounded rounded-pill btn btn-sm border border-secondary px-4 d-flex align-items-center'
          >
            <i className='fa-brands fa-github fs-2 me-2'></i> Github
          </a>
        </div>
      </div>
      <div className='faded_line_horizontal mt-0'></div>
      <p>
        My Space is an open source solution to the problem of sharing data
        across our multiple devices.
        <br />I developed it solve my problem with file sharing across my mobile
        laptop. With this I can share my Photos, Videos, PDFs or any other type
        of file simply and without any quality loss.
      </p>

      <div>
        <div className='fw-bold mt-2'>Tech and Tools Used</div>
        <div className='faded_line_horizontal mt-1 mb-2'></div>
        <div className='d-flex flex-wrap gap-2 gap-md-3 mt-3'>{tools}</div>
      </div>

      <div className='mb-5'>
        <div className='fw-bold mt-4'>Challenges and Learnings</div>
        <div className='faded_line_horizontal my-1'></div>
        <ul>
          <li>Got hand on with Spring Boot</li>
          <li>Gained familiarity with Java MVC</li>
          <li>Leaned about Thymeleaf</li>
          <li>Got stuck with transfer failures of large files</li>
          <li>Fixed the above issue by learning about BufferedReader</li>
        </ul>
      </div>
    </div>
  );
};
export default Project_My_Space;
