import "./CoreValuesSection.css";

const values = [
  "Transformation",
  "Communication",
  "Leadership",
  "Excellence",
  "Innovation",
  "Integrity",
];

const CoreValuesSection = () => {
  return (
    <section className="core-values">

      <div className="container">

        <span className="section-tag">
          Core Values
        </span>

        <h2>
          The Principles That Guide ETA
        </h2>

        <div className="values-grid">

          {values.map((value, index) => (
            <div
              key={index}
              className="value-card"
            >
              {value}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default CoreValuesSection;