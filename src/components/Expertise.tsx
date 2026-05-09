import "./styles/Expertise.css";

const Expertise = () => {
  return (
    <section className="expertise-section section-container" id="expertise">
      <header className="expertise-header">
        <h2>Cybersecurity Expertise</h2>
        <p>
          SOC Analyst and CEH focused on threat detection, incident response,
          SIEM/SOAR, penetration testing, IDS/IPS, and network security in Nepal.
        </p>
      </header>
      <div className="expertise-grid">
        <div className="expertise-card">
          <h3>Certifications</h3>
          <ul>
            <li>Certified Ethical Hacker (CEH)</li>
          </ul>
        </div>
        <div className="expertise-card">
          <h3>Specialties</h3>
          <ul>
            <li>SOC operations and security monitoring</li>
            <li>Threat hunting and incident response</li>
            <li>Vulnerability assessment and penetration testing</li>
            <li>SIEM/SOAR, IDS/IPS, and firewall management</li>
            <li>Network security and threat intelligence</li>
          </ul>
        </div>
        <div className="expertise-card">
          <h3>Tools &amp; Technologies</h3>
          <ul>
            <li>Splunk, FortiSIEM, Wazuh</li>
            <li>FortiGate, pfSense, Sophos XG</li>
            <li>LogRhythm, LogPoint, Zabbix</li>
            <li>Suricata, Snort, OWASP</li>
            <li>Nmap, Nessus, Burp Suite, Metasploit</li>
          </ul>
        </div>
      </div>
      <div className="expertise-availability">
        <p>Open to freelance and consulting projects in Nepal and remote.</p>
      </div>
    </section>
  );
};

export default Expertise;
