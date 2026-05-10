import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <section className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SUJAL
              <br />
              <span>LAMICHHANE</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Certified Ethical Hacker</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">SOC</div>
              <div className="landing-h2-2">Security</div>
            </h2>
            <h2 className="landing-info-line">
              <div className="landing-h2-info">Analyst</div>
              <div className="landing-h2-info-1">Researcher</div>
            </h2>
          </div>
        </div>
        {children}
      </section>
    </>
  );
};

export default Landing;
