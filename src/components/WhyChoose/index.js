import "./index.css";
import {
  FiShield,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";

const features = [
  {
    icon: <FiShield />,
    title: "Secure Development",
    description:
      "Enterprise-grade security protocols in every line of code.",
  },
  {
    icon: <FiUsers />,
    title: "Client-Focused Solutions",
    description:
      "Dedicated project managers for every stage of your journey.",
  },
  {
    icon: <FiTrendingUp />,
    title: "High-Performance Tech",
    description:
      "Optimized for sub-second load times and flawless SEO.",
  },
];

const WhyChoose = () => {
  return (
    <section className="why-section">

      <div className="why-left">

        <span className="why-subtitle">
          WHY RISA CREATIVES
        </span>

        <h2>
          We don't just build,
          <br />
          we engineer growth.
        </h2>

        <p>
          Our methodology combines data-driven insights with
          world-class aesthetics to create digital products that
          don't just look good, but perform exceptionally.
        </p>

        <div className="stats">

          <div className="stat">
            <h3>10+</h3>
            <span>PROJECTS DELIVERED</span>
          </div>

          <div className="stat">
            <h3>98%</h3>
            <span>CLIENT SATISFACTION</span>
          </div>

        </div>

      </div>

      <div className="why-right">

        {features.map((item, index) => (
          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {item.icon}
            </div>

            <div className="feature-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default WhyChoose;