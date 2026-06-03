import "./TransformationEcosystem.css";

import {
  MessageSquare,
  Users,
  Globe,
  Brain,
  Trophy,
  Rocket,
} from "lucide-react";

const ecosystem = [
  {
    icon: <MessageSquare size={34} />,
    title: "Communication",
    desc: "Public speaking, confidence and expression.",
  },

  {
    icon: <Users size={34} />,
    title: "Leadership",
    desc: "Developing future-ready leaders.",
  },

  {
    icon: <Globe size={34} />,
    title: "Global Languages",
    desc: "International language proficiency.",
  },

  {
    icon: <Brain size={34} />,
    title: "Emotional Intelligence",
    desc: "Self-awareness and interpersonal growth.",
  },

  {
    icon: <Trophy size={34} />,
    title: "Confidence Building",
    desc: "Stage presence and personal development.",
  },

  {
    icon: <Rocket size={34} />,
    title: "Future Readiness",
    desc: "Skills for modern careers and life.",
  },
];

const TransformationEcosystem = () => {
  return (
    <section className="ecosystem-section">

      <div className="ecosystem-glow"></div>

      <div className="container">

        <div className="ecosystem-header">

          <span className="section-tag">
            The ETA Transformation Ecosystem
          </span>

          <h2>
            Creating Holistic Growth Through
            Communication, Leadership &
            Global Learning
          </h2>

          <p>
            Our transformation ecosystem integrates
            communication, leadership, emotional
            intelligence and global learning to help
            learners become confident, capable and
            future-ready.
          </p>

        </div>

        <div className="ecosystem-wrapper">

          <div className="center-circle">

            <div className="center-content">

              <h3>ETA</h3>

              <span>
                Endless Transformation Academy
              </span>

            </div>

          </div>

          <div className="ecosystem-grid">

            {ecosystem.map((item, index) => (
              <div
                className="ecosystem-card"
                key={index}
              >
                <div className="eco-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>{item.desc}</p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default TransformationEcosystem;