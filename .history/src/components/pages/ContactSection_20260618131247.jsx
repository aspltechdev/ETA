// import "./ContactSection.css";

// const ContactSection = () => {
//   return (
//     <section className="contact">

//       <div className="container contact-container">

//         <div className="contact-info">

//           <span>Contact Us</span>

//           <h2>Let's Start Your Language Journey</h2>

//           <p>
//             Reach out to our team for course
//             guidance and enrollment assistance.
//           </p>

//           <div className="contact-item">
//             📍 Pondicherry, India
//           </div>

//           <div className="contact-item">
//             📞 +91 9876543210
//           </div>

//           <div className="contact-item">
//             ✉ hello@example.com
//           </div>

//         </div>

//         <form className="contact-form">

//           <input
//             type="text"
//             placeholder="Your Name"
//           />

//           <input
//             type="email"
//             placeholder="Email"
//           />

//           <input
//             type="tel"
//             placeholder="Phone Number"
//           />

//           <textarea
//             placeholder="Message"
//           ></textarea>

//           <button>
//             Send Message
//           </button>

//         </form>

//       </div>

//     </section>
//   );
// };

// export default ContactSection;


import "./ContactSection.css";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section
      className="contact-section"
      id="contact"
    >

      <div className="contact-glow"></div>

      <div className="container">

        <div className="contact-header">

          <span className="section-tag">
            Contact Us
          </span>

          <h2>
            Let's Start Your
            Transformation Journey
          </h2>

          <p>
            Get in touch with ETA for admissions,
            language programs, school partnerships
            and professional development programs.
          </p>

        </div>

        <div className="contact-wrapper">

          {/* Left */}

          <div className="contact-info">

            <div className="info-card">

              <Phone size={22} />

              <div>
                <h4>Phone</h4>
                <span>
                  +91 9176465416
                </span>
              </div>

            </div>

            <div className="info-card">

              <Mail size={22} />

              <div>
                <h4>Email</h4>
                <span>
                  endlesstransformationeta@gmail.com
                </span>
              </div>

            </div>

            <div className="info-card">

              <MapPin size={22} />

              <div>
                <h4>Location</h4>
                <span>
                  Visaka P block, 6th Avenue, Annanagar, Chennai - 600040
                </span>
              </div>

            </div>

            <div className="info-card">

              <Clock size={22} />

              <div>
                <h4>Working Hours</h4>
                <span>
                  Mon - Sat | 9AM - 7PM
                </span>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="contact-form-card">

            <h3>
              Send An Inquiry
            </h3>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
            >

              {/* Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="cfa4bada-b5c9-4ff9-a05d-5a0c6de2e1df"
              />

              {/* Optional Subject */}
              <input
                type="hidden"
                name="subject"
                value="New Inquiry from ETA Website"
              />

              {/* Disable Captcha (optional) */}
              <input
                type="hidden"
                name="from_name"
                value="ETA Website"
              />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
              />

              <select
                name="program"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select Program
                </option>

                <option value="Language Academy">
                  Language Academy
                </option>

                <option value="School Solutions">
                  School Solutions
                </option>

                <option value="Leadership Program">
                  Leadership Program
                </option>

                <option value="Communication Program">
                  Communication Program
                </option>
              </select>

              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your requirement..."
                required
              />

              <button type="submit">
                Send Inquiry
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;