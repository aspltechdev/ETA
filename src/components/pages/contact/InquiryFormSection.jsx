import "./InquiryFormSection.css";

const InquiryFormSection = () => {
  return (
    <section className="inquiry-section">

      <div className="container">

        <div className="form-wrapper">

          <div className="form-content">

            <span className="section-tag">
              Send Inquiry
            </span>

            <h2>
              Speak With Our Experts
            </h2>

            <p>
              Our advisors will help you find the
              right program based on your goals.
            </p>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <select>

              <option>
                Select Program
              </option>

              <option>
                Language Academy
              </option>

              <option>
                School Solutions
              </option>

              <option>
                Leadership Program
              </option>

            </select>

            <textarea
              rows="6"
              placeholder="Message"
            />

            <button type="submit">
              Submit Inquiry
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default InquiryFormSection;