const programs = [
  "Communication Club",
  "Leadership Forum",
  "Student Showcase",
  "Public Speaking Program",
  "Teacher Development",
  "Future Readiness Program",
];

const InstitutionalSolutionsSection = () => {
  return (
    <section className="institutional-solutions">

      <div className="container">

        <span className="section-tag">
          Institutional Solutions
        </span>

        <h2>
          Comprehensive School Programs
        </h2>

        <div className="solutions-grid">

          {programs.map((item, index) => (
            <div
              key={index}
              className="solution-card"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default InstitutionalSolutionsSection;