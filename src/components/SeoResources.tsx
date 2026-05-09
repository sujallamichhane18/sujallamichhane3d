import "./styles/SeoResources.css";

const seoPages = [
  {
    title: "Penetration Testing Reports",
    description: "Sample reporting formats, findings, and remediation guidance.",
    href: "/seo/penetration-testing-reports.html",
  },
  {
    title: "SOC Dashboards",
    description: "Detection coverage, alert triage workflows, and KPIs.",
    href: "/seo/soc-dashboards.html",
  },
  {
    title: "SIEM Implementations",
    description: "Wazuh and Splunk deployments with correlation rules.",
    href: "/seo/siem-implementations.html",
  },
  {
    title: "Firewall & Security Labs",
    description: "Perimeter defense labs with FortiGate, pfSense, and Sophos.",
    href: "/seo/firewall-security-labs.html",
  },
  {
    title: "Wazuh & Splunk Projects",
    description: "Use cases, integrations, and threat detection workflows.",
    href: "/seo/wazuh-splunk-projects.html",
  },
];

const SeoResources = () => {
  return (
    <section className="seo-resources section-container" id="resources">
      <div className="seo-resources-header">
        <h2>Cybersecurity Labs &amp; Case Studies</h2>
        <p>
          Practical write-ups covering SOC dashboards, SIEM deployments,
          penetration testing reports, and firewall labs.
        </p>
      </div>
      <div className="seo-resources-grid">
        {seoPages.map((page) => (
          <a
            key={page.title}
            className="seo-resource-card"
            href={page.href}
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
          >
            <h3>{page.title}</h3>
            <p>{page.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SeoResources;
