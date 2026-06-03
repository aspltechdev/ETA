const grades = [
  {
    title: "Grade 1-2",
    points: [
      "Expression Skills",
      "Listening Skills",
      "Confidence Building",
    ],
  },

  {
    title: "Grade 3-5",
    points: [
      "Communication Skills",
      "Leadership Basics",
      "Creative Thinking",
    ],
  },

  {
    title: "Grade 6-8",
    points: [
      "Leadership Development",
      "Team Building",
      "Emotional Intelligence",
    ],
  },

  {
    title: "Grade 9-12",
    points: [
      "Public Speaking",
      "Interview Readiness",
      "Future Readiness",
    ],
  },
];

const GradeProgramsSection = () => {
  return (
    <section className="grade-programs">

      <div className="container">

        <span className="section-tag">
          Programs By Grade
        </span>

        <h2>
          Customized Learning
          For Every Stage
        </h2>

        <div className="grades-grid">

          {grades.map((grade, index) => (
            <div
              key={index}
              className="grade-card"
            >

              <h3>
                {grade.title}
              </h3>

              <ul>

                {grade.points.map(
                  (point, idx) => (
                    <li key={idx}>
                      {point}
                    </li>
                  )
                )}

              </ul>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default GradeProgramsSection;