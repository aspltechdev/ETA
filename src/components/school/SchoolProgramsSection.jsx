const programs = [
  {
    title: "Communication Excellence",
    desc: "Build confident communicators.",
  },

  {
    title: "Leadership Development",
    desc: "Develop future leaders.",
  },

  {
    title: "Behavioral Transformation",
    desc: "Create positive mindsets.",
  },

  {
    title: "Emotional Intelligence",
    desc: "Build emotional resilience.",
  },
];

const SchoolProgramsSection = () => {
  return (
    <section className="school-programs">

      <div className="container">

        <h2>
          Programs For Schools
        </h2>

        <div className="program-grid">

          {programs.map((item, index) => (
            <div
              key={index}
              className="program-card"
            >

              <h3>
                {item.title}
              </h3>

              <p>
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default SchoolProgramsSection;