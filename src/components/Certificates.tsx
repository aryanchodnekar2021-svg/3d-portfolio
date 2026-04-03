import "./styles/Certificates.css";
import { MdArrowForward } from "react-icons/md";

const certificatesData = [
  {
    title: "Google Analytics Certification",
    link: "https://skillshop.credential.net/9b4f70f3-a405-4ef3-b582-e774308445c1#acc.7nTZFHG2",
  },
  {
    title: "ESG Job Simulation (Tata - Forage)",
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/N8Muuhk6XsXgMTeu2_ifobHAoMjQs9s6bKS_694144d6fa99b0ad203a0ced_1767418133567_completion_certificate.pdf",
  },
  {
    title: "Data Visualisation: Empowering Business with Effective Insights (Tata - Forage)",
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_694144d6fa99b0ad203a0ced_1767202326724_completion_certificate.pdf",
  },
  {
    title: "Technology Job Simulation (Deloitte Australia - Forage)",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_694144d6fa99b0ad203a0ced_1767414708028_completion_certificate.pdf",
  },
  {
    title: "Project Manager Job Simulation (Siemens Mobility - Forage)",
    link: "https://www.theforage.com/completion-certificates/YtWaumzWHmKiqP63y/zSefEeEKvojiQqiaH_YtWaumzWHmKiqP63y_694144d6fa99b0ad203a0ced_1767414708028_completion_certificate.pdf",
  },
  {
    title: "Operations Industrial Engineer Job Simulation (Siemens Mobility - Forage)",
    link: "https://www.theforage.com/completion-certificates/YtWaumzWHmKiqP63y/pH8NRjPQN55KWunfb_YtWaumzWHmKiqP63y_694144d6fa99b0ad203a0ced_1767100082104_completion_certificate.pdf",
  },
  {
    title: "Commercial Project Manager Job Simulation (Siemens Mobility - Forage)",
    link: "https://www.theforage.com/completion-certificates/YtWaumzWHmKiqP63y/6kHAwSGXGCZuiFXKb_YtWaumzWHmKiqP63y_694144d6fa99b0ad203a0ced_1767095607730_completion_certificate.pdf",
  },
  {
    title: "Cybersecurity Job Simulation (Deloitte Australia - Forage)",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_694144d6fa99b0ad203a0ced_1766075349439_completion_certificate.pdf",
  },
  {
    title: "Cybersecurity Analyst Job Simulation (Tata - Forage)",
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_694144d6fa99b0ad203a0ced_1765974054692_completion_certificate.pdf",
  },
  {
    title: "Data Analytics Job Simulation (Deloitte Australia - Forage)",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_694144d6fa99b0ad203a0ced_1765890025192_completion_certificate.pdf",
  },
  {
    title: "Solutions Architecture Job Simulation (AWS - Forage)",
    link: "https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_694144d6fa99b0ad203a0ced_1769927090651_completion_certificate.pdf",
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation (Tata - Forage)",
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_694144d6fa99b0ad203a0ced_1766033780073_completion_certificate.pdf",
  },
];

const Certificates = () => {
  return (
    <div className="certificates-section" id="certificates">
      <div className="certificates-container">
        <h2>
          Our <span>Certificates</span>
        </h2>
        <div className="certificates-grid">
          {certificatesData.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-card"
            >
              <h3 className="certificate-title">{cert.title}</h3>
              <div className="certificate-link">
                View Certificate <MdArrowForward />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
