import "./index.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="tag tag1">
        UI Design
      </div>

      <div className="tag tag2">
        Website
      </div>

      <div className="tag tag3">
        Marketing
      </div>

      <div className="tag tag4">
        Analytics
      </div>

      <div className="hero-content">

        <h1>
          We build digital
          <br />
          experiences that
          <br />
          <span>drive growth.</span>
        </h1>

        <p>
          From intuitive UI/UX and high-performance websites to digital
          marketing and professional content — we help brands stand out
          and grow online.
        </p>

        <button>
          Get Free Consultation →
        </button>

      </div>

    </section>
  );
}