import "./ForeignLanguageAcademy.css";

import {
  Globe,
  Award,
  Briefcase,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const languages = [
  {
    flag: "🇫🇷",
    title: "French",
    level: "A1 - C2",
  },

  {
    flag: "🇩🇪",
    title: "German",
    level: "A1 - C2",
  },

  {
    flag: "🇪🇸",
    title: "Spanish",
    level: "A1 - C2",
  },

  {
    flag: "🇯🇵",
    title: "Japanese",
    level: "JLPT N5 - N1",
  },

  {
    flag: "🇰🇷",
    title: "Korean",
    level: "TOPIK I - II",
  },

  {
    flag: "🇨🇳",
    title: "Chinese",
    level: "HSK 1 - 6",
  },
];

const ForeignLanguageAcademy = () => {
  return (
    <section
      className="language-section"
      id="languages"
    >
      <div className="language-glow"></div>

      <div className="container">

        <div className="language-header">

          <span className="section-tag">
            Foreign Language Academy
          </span>

          <h2>
            Learn Global Languages.
            <br />
            Unlock Global Opportunities.
          </h2>

          <p>
            Master internationally recognized
            languages with structured learning,
            expert trainers and certification
            pathways designed for academic,
            professional and global success.
          </p>

        </div>

        {/* Stats */}

        <div className="language-stats">

          <div className="stat">
            <h3>7+</h3>
            <span>Languages</span>
          </div>

          <div className="stat">
            <h3>5000+</h3>
            <span>Learners</span>
          </div>

          <div className="stat">
            <h3>A1-C2</h3>
            <span>Certification Pathway</span>
          </div>

          <div className="stat">
            <h3>100%</h3>
            <span>Practical Learning</span>
          </div>

        </div>

        {/* Languages */}

        <div className="languages-grid">

          {languages.map((item, index) => (
            <div
              className="language-card"
              key={index}
            >

              <div className="language-flag">
                {item.flag}
              </div>

              <h3>{item.title}</h3>

              <span>{item.level}</span>

              <button>
                Explore Course
              </button>

            </div>
          ))}

        </div>

        {/* Benefits */}

        <div className="benefits-grid">

          <div className="benefit-card">

            <GraduationCap size={30} />

            <h4>Study Abroad</h4>

            <p>
              Prepare for international
              education and academic success.
            </p>

          </div>

          <div className="benefit-card">

            <Briefcase size={30} />

            <h4>Career Growth</h4>

            <p>
              Unlock global employment and
              professional opportunities.
            </p>

          </div>

          <div className="benefit-card">

            <Award size={30} />

            <h4>Certification</h4>

            <p>
              Internationally recognized
              language certifications.
            </p>

          </div>

          <div className="benefit-card">

            <Globe size={30} />

            <h4>Global Communication</h4>

            <p>
              Connect confidently across
              cultures and countries.
            </p>

          </div>

        </div>

        {/* CTA */}

        <div className="language-cta">

          <h3>
            Ready To Learn A New Language?
          </h3>

          <p>
            Begin your global learning journey
            with ETA today.
          </p>

          <button>
            Explore Courses
            <ArrowRight size={18} />
          </button>

        </div>

      </div>

    </section>
  );
};

export default ForeignLanguageAcademy;