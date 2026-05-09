import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Let's Connect</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Available for Hire</h4>
            <p>Want me in your team?</p>
            <p>Get in Touch</p>
            <p>
              <a
                href="https://www.linkedin.com/in/sujal-lamichhane/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — sujal-lamichhane
              </a>
            </p>
            <p>
              <a
                href="https://github.com/sujallamichhane18"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                GitHub — sujallamichhane18
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Roles</h4>
            <p>SOC Analyst</p>
            <p>Blue Team</p>
            <p>Red Team</p>
            <p>Penetration Tester</p>
          </div>
          <div className="contact-box">
            <h2>
              Sujal <span>Lamichhane</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
