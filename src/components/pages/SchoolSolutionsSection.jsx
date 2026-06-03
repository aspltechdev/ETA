import "./SchoolSolutionsSection.css";

import {
  School,
  Users,
  Mic,
  Trophy,
  ArrowRight,
  GraduationCap,
  Brain,
  Rocket,
} from "lucide-react";

const grades = [
  {
    title: "Grade 1 - 2",
    icon: <GraduationCap size={32} />,
    points: [
      "Expression Skills",
      "Listening Skills",
      "Social Confidence",
      "Interactive Learning",
    ],
  },

  {
    title: "Grade 3 - 5",
    icon: <Mic size={32} />,
    points: [
      "Communication Skills",
      "Public Speaking",
      "Leadership Basics",
      "Creative Thinking",
    ],
  },

  {
    title: "Grade 6 - 8",
    icon: <Users size={32} />,
    points: [
      "Leadership Development",
      "Confidence Building",
      "Team Collaboration",
      "Emotional Intelligence",
    ],
  },

  {
    title: "Grade 9 - 12",
    icon: <Rocket size={32} />,
    points: [
      "Interview Readiness",
      "Presentation Skills",
      "Advanced Communication",
      "Future Readiness",
    ],
  },
];

const programs = [
  {
    icon: <Mic size={28} />,
    title: "Communication Club",
    description:
      "Weekly speaking activities and communication challenges.",
  },

  {
    icon: <Users size={28} />,
    title: "Leadership Forum",
    description:
      "Leadership workshops and collaborative learning experiences.",
  },

  {
    icon: <Trophy size={28} />,
    title: "Student Showcase",
    description:
      "Events, competitions and confidence-building presentations.",
  },

  {
    icon: <Brain size={28} />,
    title: "Speaking Day",
    description:
      "Dedicated communication and stage exposure programs.",
  },
];

const SchoolSolutionsSection = () => {
  return (
    <section
      className="school-solutions"
      id="schools"
    >
      <div className="school-glow"></div>

      <div className="container">

        <div className="school-header">

          <span className="section-tag">
            School Solutions
          </span>

          <h2>
            Transforming Educational
            Institutions Through Communication,
            Leadership & Future Readiness
          </h2>

          <p>
            ETA partners with schools and
            educational institutions to develop
            confident communicators, future-ready
            leaders and emotionally intelligent
            students.
          </p>

        </div>

        {/* Grade Programs */}

        <div className="grades-grid">

          {grades.map((grade, index) => (
            <div
              className="grade-card"
              key={index}
            >

              <div className="grade-icon">
                {grade.icon}
              </div>

              <h3>
                {grade.title}
              </h3>

              <ul>

                {grade.points.map(
                  (item, idx) => (
                    <li key={idx}>
                      ✓ {item}
                    </li>
                  )
                )}

              </ul>

            </div>
          ))}

        </div>

        {/* Institutional Programs */}

        <div className="institution-programs">

          <h3>
            Institutional Development Programs
          </h3>

          <div className="institution-grid">

            {programs.map(
              (program, index) => (
                <div
                  className="institution-card"
                  key={index}
                >

                  <div className="institution-icon">
                    {program.icon}
                  </div>

                  <h4>
                    {program.title}
                  </h4>

                  <p>
                    {program.description}
                  </p>

                </div>
              )
            )}

          </div>

        </div>

        {/* Stats */}

        <div className="school-stats">

          <div className="school-stat">
            <h3>50+</h3>
            <span>
              School Partners
            </span>
          </div>

          <div className="school-stat">
            <h3>100+</h3>
            <span>
              Programs Delivered
            </span>
          </div>

          <div className="school-stat">
            <h3>10K+</h3>
            <span>
              Students Impacted
            </span>
          </div>

          <div className="school-stat">
            <h3>95%</h3>
            <span>
              Engagement Rate
            </span>
          </div>

        </div>

        {/* Benefits */}

        <div className="benefits-section">

          <h3>
            Why Schools Choose ETA
          </h3>

          <div className="benefits-grid">

            <div className="benefit-pill">
              Improved Communication
            </div>

            <div className="benefit-pill">
              Student Participation
            </div>

            <div className="benefit-pill">
              Leadership Development
            </div>

            <div className="benefit-pill">
              Emotional Intelligence
            </div>

            <div className="benefit-pill">
              Confidence Building
            </div>

            <div className="benefit-pill">
              Future Readiness
            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="school-cta">

          <School size={48} />

          <h3>
            Bring ETA To Your Institution
          </h3>

          <p>
            Transform your students through
            communication, leadership and
            experiential learning programs.
          </p>

          <button>
            Schedule School Consultation
            <ArrowRight size={18} />
          </button>

        </div>

      </div>

    </section>
  );
};

export default SchoolSolutionsSection;