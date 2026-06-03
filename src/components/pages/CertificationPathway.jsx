import "./CertificationPathway.css";
import {
  Award,
  Briefcase,
  GraduationCap,
  Globe,
  ArrowRight,
} from "lucide-react";

const levels = [
  {
    level: "A1",
    title: "Beginner",
    desc: "Basic understanding and simple daily communication.",
  },

  {
    level: "A2",
    title: "Elementary",
    desc: "Handle common situations and everyday conversations.",
  },

  {
    level: "B1",
    title: "Intermediate",
    desc: "Independent communication for study and work.",
  },

  {
    level: "B2",
    title: "Upper Intermediate",
    desc: "Professional communication and collaboration.",
  },

  {
    level: "C1",
    title: "Advanced",
    desc: "Academic excellence and leadership communication.",
  },

  {
    level: "C2",
    title: "Mastery",
    desc: "Near-native fluency and global expertise.",
  },
];

const CertificationPathway = () => {
  return (
    <section className="certification-section">

      <div className="certification-glow"></div>

      <div className="container">

        <div className="certification-header">

          <span className="section-tag">
            International Certification Pathway
          </span>

          <h2>
            Your Journey To
            Global Language Mastery
          </h2>

          <p>
            ETA follows internationally recognized
            learning frameworks that help learners
            progress confidently from beginner
            to advanced proficiency levels.
          </p>

        </div>

        {/* Roadmap */}

        <div className="roadmap-wrapper">

          <div className="roadmap-line"></div>

          {levels.map((item, index) => (
            <div
              className="roadmap-card"
              key={index}
            >

              <div className="level-circle">
                {item.level}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* Benefits */}

        <div className="benefits-strip">

          <div className="benefit-item">
            <Award size={24} />
            <span>
              Internationally Recognized
            </span>
          </div>

          <div className="benefit-item">
            <GraduationCap size={24} />
            <span>
              Study Abroad Ready
            </span>
          </div>

          <div className="benefit-item">
            <Briefcase size={24} />
            <span>
              Career Advancement
            </span>
          </div>

          <div className="benefit-item">
            <Globe size={24} />
            <span>
              Global Opportunities
            </span>
          </div>

        </div>

        {/* Stats */}

        <div className="certification-stats">

          <div className="stat-box">
            <h3>A1-C2</h3>
            <span>
              Certification Pathway
            </span>
          </div>

          <div className="stat-box">
            <h3>7+</h3>
            <span>
              Global Languages
            </span>
          </div>

          <div className="stat-box">
            <h3>100%</h3>
            <span>
              Structured Learning
            </span>
          </div>

          <div className="stat-box">
            <h3>Global</h3>
            <span>
              Recognition
            </span>
          </div>

        </div>

        {/* CTA */}

        <div className="assessment-card">

          <h3>
            Not Sure Which Level To Start?
          </h3>

          <p>
            Take a free language assessment and
            receive personalized guidance from
            ETA experts.
          </p>

          <button>
            Book Free Assessment
            <ArrowRight size={18} />
          </button>

        </div>

      </div>

    </section>
  );
};

export default CertificationPathway;