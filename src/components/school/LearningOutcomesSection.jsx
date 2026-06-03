const outcomes = [
  "Improved Communication",
  "Leadership Skills",
  "Confidence",
  "Team Collaboration",
  "Emotional Intelligence",
  "Future Readiness",
];

const LearningOutcomesSection = () => {
  return (
    <section className="learning-outcomes">

      <div className="container">

        <span className="section-tag">
          Learning Outcomes
        </span>

        <h2>
          Measurable Student Growth
        </h2>

        <div className="outcomes-grid">

          {outcomes.map((item, index) => (
            <div
              key={index}
              className="outcome-card"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default LearningOutcomesSection;