import "./TransformationFrameworkSection.css";

const steps = [
  "Communication",
  "Leadership",
  "Behavior",
  "Emotional Intelligence",
  "Future Readiness",
];

const TransformationFrameworkSection = () => {
  return (
    <section className="framework-section">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            Transformation Framework
          </span>

          <h2>
            The ETA Learning Journey
          </h2>

          <p>
            Every ETA program follows a
            structured transformation framework
            that develops confidence,
            communication and leadership.
          </p>

        </div>

        <div className="framework-flow">

          {steps.map((step, index) => (
            <div
              key={index}
              className="framework-card"
            >
              <span>
                {index + 1}
              </span>

              <h3>
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TransformationFrameworkSection;