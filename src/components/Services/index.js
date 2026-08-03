import "./index.css";
import {
  FiPlusCircle,
  FiCode,
  FiBarChart2,
  FiTool,
  FiFilm,
} from "react-icons/fi";

const services = [
  {
    icon: <FiPlusCircle />,
    badge: "DESIGN",
    title: "UI/UX Design",
    tags: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Mobile App Design",
      "Web App Design",
      "Design Systems",
      "Usability Testing",
    ],
  },
  {
    icon: <FiCode />,
    badge: "ENGINEERING",
    title: "Web Development",
    tags: [
      "Business Websites",
      "Landing Pages",
      "Portfolio Websites",
      "Ecommerce",
      "CMS",
      "React",
      "Next.js",
      "WordPress",
    ],
  },
  {
    icon: <FiBarChart2 />,
    badge: "GROWTH",
    title: "Digital Marketing",
    tags: [
      "SEO",
      "Social Media Marketing",
      "Google Ads",
      "Meta Ads",
      "Branding",
      "Content Marketing",
    ],
  },
  {
    icon: <FiTool />,
    badge: "CARE",
    title: "Maintenance & Support",
    tags: [
      "Monthly Maintenance",
      "Security Updates",
      "Backup",
      "Performance Optimization",
    ],
  },
  {
    icon: <FiFilm />,
    badge: "CONTENT",
    title: "Professional Reel Production",
    tags: [
      "Creative Concepts",
      "Script Writing",
      "Cinematic Editing",
      "Motion Graphics",
    ],
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="card-top">
              <div className="icon-box">{service.icon}</div>

              <span className="badge">{service.badge}</span>
            </div>

            <h2>{service.title}</h2>

            <div className="tag-list">
              {service.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}