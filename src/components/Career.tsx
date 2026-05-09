import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SOC Analyst</h4>
                <h5>CryptoGen Nepal · Full-time · Kathmandu, Nepal</h5>
              </div>
              <h3>Apr 2026 - Present</h3>
            </div>
            <p>
              24/7 security monitoring using FortiSIEM, LogRhythm, and LogPoint
              platforms. SOC L1 analyst responsibilities: alert triage, initial
              investigation, and escalation. Security orchestration and automated
              response with FortiSOAR, including playbook creation. Log analysis and
              correlation for threat detection across network infrastructure.
              Reporting, threat intelligence, OSINT investigations, and MITRE ATT&CK
              based analysis. Incident detection, analysis, response, and report
              submission.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Security Operation Intern</h4>
                <h5>CryptoGen Nepal · Internship · Kathmandu, Nepal</h5>
              </div>
              <h3>Dec 2025 - Mar 2026</h3>
            </div>
            <p>
              24/7 security monitoring and alert triage. FortiSOAR playbook
              creation for automated incident response, log analysis, and threat
              intelligence with OSINT investigations. MITRE ATT&CK framework
              application for threat analysis. Incident detection, analysis,
              response, and report submission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
