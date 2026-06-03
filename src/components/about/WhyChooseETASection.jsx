import "./WhyChooseETASection.css";

const features = [
  "Communication Excellence",
  "Leadership Development",
  "Experiential Learning",
  "Global Certifications",
  "Future Readiness",
  "Emotional Intelligence",
];

const WhyChooseETASection = () => {
  return (
    <section className="why-about">

      <div className="container">

        <span className="section-tag">
          Why Choose ETA
        </span>

        <h2>
          What Makes ETA Different
        </h2>

        <div className="features-grid">

          {features.map((item, index) => (
            <div
              key={index}
              className="feature-card"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseETASection;