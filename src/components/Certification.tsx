import "./styles/Certification.css";

const Certification = () => {
  return (
    <section className="cert-section" id="certifications">
      <div className="cert-container section-container">
        <div className="cert-text">
          <p className="cert-eyebrow">Certification</p>
          <h2>CEH</h2>
          <p className="cert-title">Certified Ethical Hacker</p>
          <p className="cert-desc">
            Hands-on validation of offensive security skills including
            reconnaissance, vulnerability analysis, and exploitation.
          </p>
          <div className="cert-tags">
            <span className="cert-tag">Recon</span>
            <span className="cert-tag">Vuln Analysis</span>
            <span className="cert-tag">Exploitation</span>
            <span className="cert-tag">Reporting</span>
          </div>
        </div>
        <figure className="cert-card" data-cursor="disable">
          <div className="cert-card-inner">
            <img
              src="/images/ceh.webp"
              alt="Certified Ethical Hacker (CEH) certificate"
              loading="lazy"
            />
          </div>
          <figcaption>Certified Ethical Hacker (CEH)</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Certification;
