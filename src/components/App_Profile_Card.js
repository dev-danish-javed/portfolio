import React from 'react';
import { Link } from 'react-router-dom';
import App_Routes from '../App_Routes';
import profileTexts from '../utils/Profile_Texts';
import resume from './../assets/Docs/Danish Javed Resume.pdf';
import my_pic from './../assets/images/My Pic.png';
import './../css/App_Profile_Card.css';

class App_Profile_Card extends React.Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  profileTexts = profileTexts;

  componentDidMount() {
    this.timeout = setInterval(() => {
      this.setState((previousIndex) => ({
        textIdx: previousIndex.textIdx + 1,
      }));
    }, 150);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }
  render() {
    let title = profileTexts[this.state.textIdx % profileTexts.length];

    return (
      <>
        <div
          className={
            (this.props.isMobile ? 'page-item ' : '') +
            'profile-card bg-light h-100 text-center rounded rounded-3 d-flex flex-column justify-content-between'
          }
        >
          <div className='profile-image-container rounded rounded-3'>
            <img
              src={my_pic}
              id='profile-pic'
              className=''
              alt='profile-pic'
            ></img>
          </div>
          <div className='name text-nowrap text-truncate'>Danish Javed</div>
          <div className='d-flex justify-content-center gap-4 py-2 fs-5'>
            <a
              href='https://github.com/dev-danish-javed'
              title='Github'
              target={'_blank'}
              rel={'noreferrer'}
            >
              <i className='fa-brands fa-github'></i>
            </a>
            <a
              href='https://www.hackerrank.com/Danish_Javed'
              title='HackerRank'
              target={'_blank'}
              rel={'noreferrer'}
            >
              <i className='fa-brands fa-hackerrank'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/devdanish/'
              title='LinkedIn'
              target={'_blank'}
              rel={'noreferrer'}
            >
              <i className='fa-brands fa-linkedin'></i>
            </a>
            <a
              href='https://stackoverflow.com/users/11842836/danish-javed'
              title='Stackoverflow'
              target={'_blank'}
              rel={'noreferrer'}
            >
              <i className='fa-brands fa-stack-overflow'></i>
            </a>
          </div>
          <div>{title}</div>
          <div className='d-flex justify-content-center'>
            <a
              className='col-8 border-top fw-bold py-3 text-decoration-none text-dark pointer-event'
              href={resume}
              download='Danish Javed Resume.pdf'
            >
              DOWNLOAD RESUME <i className='fa-solid fa-download'></i>
            </a>
          </div>
        </div>
        <div
          className={
            this.props.isMobile
              ? 'about-redirect-button mt-3 me-3 fw-bolder text-end'
              : 'd-none'
          }
        >
          <Link
            to={App_Routes.ABOUT}
            onClick={() => this.props.handleMenuChange(App_Routes.ABOUT)}
            className='d-flex justify-content-end text-end py-2'
          >
            <div className='rounded rounded-pill border border-2 px-3 border-dark bg-gradient bg-black mb-2'>
              <span className='fs-5 me-4'>Know me more</span>
              <i className='fa-solid fa-arrow-right fs-2'></i>
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default App_Profile_Card;
