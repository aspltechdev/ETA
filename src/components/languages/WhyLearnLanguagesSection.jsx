const benefits = [
  "Study Abroad",
  "Career Growth",
  "Global Opportunities",
  "Cultural Awareness",
  "Migration Benefits",
  "International Certifications",
];

const WhyLearnLanguagesSection = () => {
  return (
    <section className="why-languages">

      <div className="container">

        <span className="section-tag">
          Why Learn Languages
        </span>

        <h2>
          Language Skills Open
          Doors Across The World
        </h2>

        <div className="benefits-grid">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="benefit-card"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyLearnLanguagesSection;