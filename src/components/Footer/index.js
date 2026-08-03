import "./index.css";
import { FiFacebook, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* Left */}

        <div className="footer-about">

          <div className="footer-logo">
            <div className="logo-circle">R</div>
            <h2>RISA CREATIVES</h2>
          </div>

          <p>
            Crafting premium digital experiences that push boundaries
            and deliver measurable growth.
          </p>

          <div className="msme-badge">
            ✦ MSME REGISTERED AGENCY
          </div>

          <div className="msme-logo">
            MSME
          </div>

        </div>

        {/* Capabilities */}

        <div className="footer-column">

          <h3>Capabilities</h3>

          <a href="/">UI/UX Design</a>
          <a href="/">Web Development</a>
          <a href="/">Marketing Strategy</a>
          <a href="/">Content Creation</a>

        </div>

        {/* Company */}

        <div className="footer-column">

          <h3>Company</h3>

          <a href="/">Our Work</a>
          <a href="/">Process</a>
          <a href="/">About Us</a>
          <a href="/">Careers</a>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Let's Connect</h3>

          <p className="small">
            Ready to scale your brand?
          </p>

          <a
            className="email"
            href="mailto:info@risacreatives.com"
          >
            info@risacreatives.com
          </a>

          <div className="socials">

            <a href="/">
              <FiFacebook />
            </a>

            <a href="/">
              <FiTwitter />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          © 2026 RISA CREATIVES. ALL RIGHTS RESERVED.
        </p>

        <div className="footer-links">

          <a href="/">Privacy Policy</a>

          <a href="/">Terms of Service</a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;