import "./GalleryCTASection.css";
import { ArrowRight } from "lucide-react";

const GalleryCTASection = () => {
  return (
    <section className="gallery-cta">

      <div className="container">

        <div className="gallery-cta-card">

          <h2>
            Want To Be Part Of
            The ETA Experience?
          </h2>

          <p>
            Join transformational learning
            programs designed to build confidence,
            communication and leadership.
          </p>

          <div className="cta-actions">

            <button className="primary">

              Join ETA

              <ArrowRight size={18} />

            </button>

            <button className="secondary">
              Book Consultation
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default GalleryCTASection;