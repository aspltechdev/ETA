import "./LearningJourney.css";

const LearningJourney = () => {
  const steps = [
    "Choose Language",
    "Book Trial",
    "Attend Classes",
    "Practice Daily",
    "Become Fluent",
  ];

  return (
    <section className="journey">
      <div className="container">

        <div className="section-title">
          <h2>Your Learning Journey</h2>
        </div>

        <div className="journey-row">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <span>0{index + 1}</span>
              <h4>{step}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearningJourney;