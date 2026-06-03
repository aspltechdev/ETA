import "./LearningMethodology.css";

import {
  Brain,
  Users,
  Mic,
  Rocket,
  ClipboardCheck,
  Trophy,
} from "lucide-react";

const methods = [
  {
    icon: <Brain size={34} />,
    title: "Experiential Learning",
    description:
      "Learning through activities, experiences and practical engagement.",
  },

  {
    icon: <Mic size={34} />,
    title: "Communication Framework",
    description:
      "Structured speaking, listening and expression development.",
  },

  {
    icon: <Users size={34} />,
    title: "Leadership Development",
    description:
      "Building confidence, decision-making and collaboration skills.",
  },

  {
    icon: <Rocket size={34} />,
    title: "Real World Application",
    description:
      "Applying concepts in practical and everyday situations.",
  },

  {
    icon: <ClipboardCheck size={34} />,
    title: "Continuous Assessment",
    description:
      "Regular evaluation and measurable growth tracking.",
  },

  {
    icon: <Trophy size={34} />,
    title: "Transformation Outcomes",
    description:
      "Confidence, leadership and future-ready skill development.",
  },
];

const LearningMethodology = () => {
  return (
    <section className="methodology-section">

      <div className="methodology-glow"></div>

      <div className="container">

        <div className="methodology-header">

          <span className="section-tag">
            Learning Methodology
          </span>

          <h2>
            How ETA Creates
            Meaningful Transformation
          </h2>

          <p>
            Our learning framework combines
            experiential learning, communication
            mastery, leadership development and
            real-world application to create
            measurable personal growth.
          </p>

        </div>

        {/* Process Timeline */}

        <div className="process-wrapper">

          <div className="process-step">
            <span>01</span>
            <h4>Learn</h4>
          </div>

          <div className="process-line"></div>

          <div className="process-step">
            <span>02</span>
            <h4>Practice</h4>
          </div>

          <div className="process-line"></div>

          <div className="process-step">
            <span>03</span>
            <h4>Apply</h4>
          </div>

          <div className="process-line"></div>

          <div className="process-step">
            <span>04</span>
            <h4>Transform</h4>
          </div>

        </div>

        {/* Method Cards */}

        <div className="methodology-grid">

          {methods.map((item, index) => (
            <div
              className="method-card"
              key={index}
            >

              <div className="method-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>
          ))}

        </div>

        {/* Outcomes */}

        <div className="outcomes-section">

          <h3>
            Outcomes Students Experience
          </h3>

          <div className="outcomes-grid">

            <div className="outcome-card">
              Confidence
            </div>

            <div className="outcome-card">
              Communication
            </div>

            <div className="outcome-card">
              Leadership
            </div>

            <div className="outcome-card">
              Emotional Intelligence
            </div>

            <div className="outcome-card">
              Collaboration
            </div>

            <div className="outcome-card">
              Future Readiness
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default LearningMethodology;