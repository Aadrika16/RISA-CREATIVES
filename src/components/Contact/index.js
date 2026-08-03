import "./index.css";
import { FiMail, FiPhone, FiChevronDown } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="contact-section">

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-left">

          <h2>
            Let's build
            <br />
            something
            <br />
            extraordinary.
          </h2>

          <p>
            Ready to elevate your digital presence?
            Reach out today for a discovery call.
          </p>

          <div className="contact-info">

            <div className="info-item">
              <div className="info-icon">
                <FiMail />
              </div>

              <div>
                <span>EMAIL US</span>
                <h4>info@risacreatives.com</h4>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FiPhone />
              </div>

              <div>
                <span>CALL US</span>
                <h4>+91 98765 43210</h4>
              </div>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="contact-right">

          <form>

            <div className="row">

              <div className="field">
                <label>FULL NAME</label>
                <input type="text" placeholder="John Doe" />
              </div>

              <div className="field">
                <label>COMPANY</label>
                <input type="text" placeholder="Acme Inc." />
              </div>

            </div>

            <div className="field">
              <label>SERVICE NEEDED</label>

              <div className="select-box">
                <select>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Digital Marketing</option>
                  <option>Branding</option>
                </select>

                <FiChevronDown />
              </div>

            </div>

            <div className="field">
              <label>MESSAGE</label>

              <textarea
                rows="4"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button type="submit">
              Send Enquiry
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;