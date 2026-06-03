import "./ContactCTASection.css";

import { ArrowRight } from "lucide-react";

const ContactCTASection = () => {
  return (
    <section className="contact-cta">

      <div className="container">

        <div className="contact-cta-card">

          <h2>
            Ready To Transform
            Your Future?
          </h2>

          <p>
            Join ETA and unlock confidence,
            communication and leadership.
          </p>

          <button>

            Book Consultation

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </section>
  );
};

export default ContactCTASection;