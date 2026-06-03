const challenges = [
  "Communication Gaps",
  "Low Student Confidence",
  "Leadership Development",
  "Future Readiness",
  "Emotional Intelligence",
  "Public Speaking Skills",
];

const WhySchoolsNeedETASection = () => {
  return (
    <section className="school-needs">

      <div className="container">

        <span className="section-tag">
          Why Schools Need ETA
        </span>

        <h2>
          Beyond Academics,
          Students Need Life Skills
        </h2>

        <div className="needs-grid">

          {challenges.map((item, index) => (
            <div
              key={index}
              className="need-card"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhySchoolsNeedETASection;