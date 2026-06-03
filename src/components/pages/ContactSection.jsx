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
                  +91 98765 43210
                </span>
              </div>

            </div>

            <div className="info-card">

              <Mail size={22} />

              <div>
                <h4>Email</h4>
                <span>
                  info@endlessacademy.com
                </span>
              </div>

            </div>

            <div className="info-card">

              <MapPin size={22} />

              <div>
                <h4>Location</h4>
                <span>
                  Puducherry, India
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

            <form>

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="text"
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

                <option>
                  Communication Program
                </option>

              </select>

              <textarea
                rows="5"
                placeholder="Tell us about your requirement..."
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