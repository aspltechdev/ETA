const careers = [
  "International Jobs",
  "Translation",
  "Teaching",
  "Tourism",
  "BPO",
  "Study Abroad",
];

const CareerOpportunitiesSection = () => {
  return (
    <section className="career-section">

      <div className="container">

        <span className="section-tag">
          Career Opportunities
        </span>

        <h2>
          Build A Global Career
        </h2>

        <div className="career-grid">

          {careers.map((item, index) => (
            <div
              key={index}
              className="career-card"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default CareerOpportunitiesSection;