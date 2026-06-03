import "./AboutCTASection.css";

const AboutCTASection = () => {
  return (
    <section className="about-cta">

      <div className="container">

        <h2>
          Join The Transformation Movement
        </h2>

        <p>
          Whether you are a student, professional
          or institution, ETA is here to support
          your growth journey.
        </p>

        <div className="cta-buttons">

          <button>
            Explore Programs
          </button>

          <button className="secondary">
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
};

export default AboutCTASection;