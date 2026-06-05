import "./ProgramSection.css";

const ProgramSection = ({
  tag,
  title,
  description,
  features,
  image,
  reverse = false,
}) => {
  return (
    <section className="program-section">

      <div
        className={`program-wrapper ${
          reverse ? "reverse" : ""
        }`}
      >

        <div className="program-content">

          <span className="section-tag">
            {tag}
          </span>

          <h2>
            {title}
          </h2>

          <p>
            {description}
          </p>

          <div className="feature-grid">

            {features.map(
              (item, index) => (
                <div
                  key={index}
                  className="feature-card"
                >
                  {item}
                </div>
              )
            )}

          </div>

        </div>

        <div className="program-image">

          <img
            src={image}
            alt={title}
          />

        </div>

      </div>
<div className="program-slider">

  <div className="slide">
    <ProgramSection
      tag="Communication Excellence"
      title="Master The Art Of Communication"
      description="Build speaking, presentation and interpersonal communication skills."
      image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200"
      features={[
        "Public Speaking",
        "Presentation Skills",
        "Stage Confidence",
        "Professional Communication",
        "Interpersonal Skills",
      ]}
    />
  </div>

  <div className="slide">
    <ProgramSection reverse ... />
  </div>

  <div className="slide">
    <ProgramSection ... />
  </div>

  <div className="slide">
    <ProgramSection reverse ... />
  </div>

  <div className="slide">
    <ProgramSection ... />
  </div>

</div>
    </section>
  );
};

export default ProgramSection;