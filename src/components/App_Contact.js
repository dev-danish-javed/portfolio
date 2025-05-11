import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';
import vibrateDevice from '../utils/VibrateDevices';
import resume from './../assets/Docs/Danish Javed Resume.pdf';
import './../css/App_Contact.css';
import { Link } from 'react-router-dom';
const App_Contact = ({ activeRoute, handleMenuChange }) => {
  const [name, setName] = useState('');
  let [message, setMessage] = useState('');
  const getMessage = (type) => {
    if (type === 'mail') {
      if (name && message){
        message += '\n\n Sent from Portfolio with 💖';
        return (
            'mailto:dev.danish.javed@gmail.com?subject=' +
            encodeURI(name + ' (via portfolio)') +
            '&body=' +
            encodeURI(message)
        );
      }
      else return 'mailto:dev.danish.javed@gmail.com';
    }

    if (type === 'whatsapp') {
      if (name && message)
        return (
          'http://wa.me/+917525057580?text=' +
          encodeURI('*' + name + ' From Portfolio* \n\n' + message)
        );
      else return 'http://wa.me/+917525057580';
    }
  };
  useEffect(() => {
    if (window.location.pathname !== activeRoute)
      handleMenuChange(window.location.pathname);
  });
  class ContactDetail {
    constructor(item, desc) {
      this.item = item;
      this.desc = desc;
    }
  }
  let contactDetails = [
    new ContactDetail('Phone No.', '+91-7525057580'),
    new ContactDetail('Email', 'danishjaved636@gmail.com'),
  ];

  contactDetails = contactDetails.map((item, index) => (
    <div className='d-flex align-items-center gap-2 col-12' key={index}>
      <div className='d-flex col-4 gap-2'>
        <div>{item.item}</div>
        <div className='flex-grow-1 border-dotted-bottom'></div>
      </div>
      <div className='text-nowrap text-dark'>{item.desc}</div>
    </div>
  ));

  return (
    <div className='page-item p-3 pb-5 pb-md-0 pb-lg-5'>
      <div className='h-100 pb-3'>
        <div className='h-50 mb-5'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224096.33663241914!2d77.25281390517094!3d28.645133432818064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1678040235576!5m2!1sen!2sin'
            className='w-100 h-100 border rounded rounded-3 map'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='map'
          ></iframe>
          <div className='text-center'>
            <a
              href='https://goo.gl/maps/D8mffzbxZgtD2FcC7'
              target={'_blank'}
              rel={'noreferrer'}
              className='text-secondary fw-bold text-decoration-none'
            >
              <i className='fa-solid fa-location-dot'></i> Noida, India
            </a>
          </div>
        </div>
        <div className='fs-5 text-center lead text-dark opacity-75 fw-semibold'>
         <blockquote>
           Code, collab, or coffee? Shoot me a mail below, let’s grow together.
         </blockquote>
        </div>
        <div className='d-flex justify-content-around align-items-center gap-4 px-2 gap-md-5 flex-wrap'>
          <div className=''>
            <div className='border-accent border-0 border-lg-0 mb-2 rounded rounded-xl py-3 px-3'>
              <TextField
                  id='subject'
                  label='Name'
                  variant='standard'
                  size='small'
                  color='success'
                  className='align-self-start col-6 col-md-5'
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
              ></TextField>
              <TextField
                  id='body'
                  label='Message'
                  variant='standard'
                  size='small'
                  color='success'
                  className='w-100'
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
              ></TextField>
              <div className='mt-3 mt-md-4 w-100 d-flex justify-content-end align-items-center gap-2'>
                <a
                    id='linkedIn-contact-link'
                    href='https://www.linkedin.com/in/devdanish/'
                    title='LinkedIn'
                    target={'_blank'}
                    rel={'noreferrer'}
                    className='text-dark text-opacity-75 fw-semibold
                    text-decoration-none shadow-sm align-self-end
                    fs-6 rounded-pill px-3 py-2 d-none d-lg-block'
                >
                  LinkedIn <i className='fa-brands fa-linkedin'></i>
                </a>
                <button
                    // href={getMessage('whatsapp')}
                    onClick={() => {
                      navigator.clipboard.writeText('dev.danish.javed@gmail.com');
                      toast("Email Copied", {
                        description: "Take next step and send me the mail.",
                      })
                    }}
                    className='align-self-end btn rounded rounded-pill shadow-sm text-dark '
                    // target={'_blank'}
                    // rel={'noreferrer'}
                >
                  dev.danish.javed@gmail.com <i className='fa-solid fa-copy'></i>
                </button>
                <Toaster />
                <a
                    href={getMessage('mail')}
                    className='align-self-end btn rounded rounded-pill border border-dark shadow-top-bottom-only'
                >
                  Send <i className='fa-solid fa-envelope shadow-none'></i>
                </a>
              </div>
            </div>
            <a
                href='https://www.linkedin.com/in/devdanish'
                target={'_blank'}
                rel={'noreferrer'}
                className='mt-2 d-lg-none btn btn-sm btn-outline-secondary w-100 rounded rounded-pill'
            >
              <i className='fa-brands fa-linkedin'></i> LinkedIn
            </a>
            <Link
                className='btn btn-sm border-accent text-color-accent shadow-sm
                fw-semibold w-100 rounded rounded-pill d-block d-lg-none mt-3'
                href={resume}
                download='Danish Javed Resume.pdf'
            >
              <i className='fa-solid fa-download'></i> Resume
            </Link>
          </div>


        </div>
      </div>
    </div>
  );
};
export default App_Contact;
