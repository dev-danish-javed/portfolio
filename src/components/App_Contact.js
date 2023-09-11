import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import vibrateDevice from "../utils/VibrateDevices";
import resume from "./../assets/Docs/Danish Javed Resume.pdf";
import "./../css/App_Contact.css";
const App_Contact = ({ activeRoute, handleMenuChange }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const getMessage = (type) => {
    if (type === "mail") {
      if (name && message)
        return (
          "mailto:danishjaved636@gmail.com?subject=" +
          encodeURI(name + " From Portfolio") +
          "&body=" +
          encodeURI(message)
        );
      else return "mailto:danishjaved636@gmail.com";
    }

    if (type === "whatsapp") {
      if (name && message)
        return (
          "http://wa.me/+917525057580?text=" +
          encodeURI("*" + name + " From Portfolio* \n\n" + message)
        );
      else return "http://wa.me/+917525057580";
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
    new ContactDetail("Phone No.", "+91-7525057580"),
    new ContactDetail("Email", "danishjaved636@gmail.com"),
  ];

  contactDetails = contactDetails.map((item, index) => (
    <div className="d-flex align-items-center gap-2 col-12" key={index}>
      <div className="d-flex col-4 gap-2">
        <div>{item.item}</div>
        <div className="flex-grow-1 border-dotted-bottom"></div>
      </div>
      <div className="text-nowrap text-dark">{item.desc}</div>
    </div>
  ));

  return (
    <div className="page-item p-3">
      <div className="h-100">
        <div className="h-50 mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224096.33663241914!2d77.25281390517094!3d28.645133432818064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1678040235576!5m2!1sen!2sin"
            className="w-100 h-100 border rounded rounded-3 map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
          <div className="text-center">
            <a
              href="https://goo.gl/maps/D8mffzbxZgtD2FcC7"
              target={"_blank"} rel={"noreferrer"}
              className="text-secondary fw-bold text-decoration-none"
            >
              <i className="fa-solid fa-location-dot"></i> Noida, India
            </a>
          </div>
        </div>
        <div className="fs-5 text-center lead text-dark opacity-75 py-2 d-md-block d-none">
          "I would love to get in touch with you.
          <br />
          We can discuss projects, ideas, tech and concepts."
        </div>
        <div className="d-flex justify-content-around justify-content-md-end align-items-center gap-2 gap-md-5 mt-2 flex-wrap">
          <div className="mt-3 col-11 col-md-5 d-flex flex-column flex-md-row flex-wrap gap-2 justify-content-between">
            <div className="d-flex gap-2 justify-content-between flex-wrap">
              {contactDetails}
            </div>
            <a
              href="https://www.linkedin.com/in/mr-danish/"
              target={"_blank"} rel={"noreferrer"}
              className="mt-2 btn btn-sm btn-outline-secondary w-100 rounded rounded-pill"
            >
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
            <a
              className="btn btn-sm border-accent text-color-accent shadow-sm fw-semibold w-100 rounded rounded-pill d-block d-md-none"
              href={resume}
              download="Danish Javed Resume"
            >
              <i className="fa-solid fa-download"></i> Resume
            </a>
          </div>
          <div className="mt-3 d-block d-md-none">
            <a
              href="tel:+917525057580"
              className="display-4 rounded rounded-circle border border-secondary shadow-top-bottom-only p-3"
              onClick={() => {
                vibrateDevice(150);
              }}
            >
              <i className="fa-solid fa-phone text-dark"></i>
            </a>
          </div>
          <div className="d-block d-md-none small px-2">OR</div>
          <div className="d-flex flex-grow-1 flex-column gap-1">
            <TextField
              id="subject"
              label="Name"
              variant="standard"
              size="small"
              color="success"
              className="align-self-start col-6 col-md-5"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></TextField>
            <TextField
              id="body"
              label="Message"
              variant="standard"
              size="small"
              color="success"
              className="w-100"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></TextField>
            <div className="mt-2 w-100 d-flex justify-content-end gap-2">
              <a
                href={getMessage("whatsapp")}
                className="align-self-end btn rounded rounded-pill shadow-sm text-dark"
                target={"_blank"} rel={"noreferrer"}
              >
                <i className="fa-brands fa-whatsapp"></i> Whatsapp
              </a>
              <a
                href={getMessage("mail")}
                className="align-self-end btn rounded rounded-pill border border-dark"
              >
                Send <i className="fa-solid fa-paper-plane"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App_Contact;
