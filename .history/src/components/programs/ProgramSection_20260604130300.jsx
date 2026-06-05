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
      <div className={`program-wrapper ${reverse ? "reverse" : ""}`}>
        <div className="program-content">
          <span className="section-tag">{tag}</span>

          <h2>{title}</h2>

          <p>{description}</p>

          <div className="feature-grid">
            {features.map((item, index) => (
              <div key={index} className="feature-card">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="program-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;