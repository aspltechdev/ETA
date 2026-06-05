import { useEffect, useRef, useState } from "react";
import "./CertificationPathway.css";

import worldMap from "../../assets/w1.jpg";

const languages = [
  "🇫🇷 French",
  "🇩🇪 German",
  "🇪🇸 Spanish",
  "🇯🇵 Japanese",
  "🇰🇷 Korean",
  "🇨🇳 Chinese",
];

const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

const CertificationPathway = () => {
  const sectionRef = useRef(null);
  const [showBadges, setShowBadges] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBadges(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="certification-section"
      ref={sectionRef}
    >
      <div className="certification-glow"></div>

      <div className="container">
        <div className="certification-wrapper">

          <div className="cert-left">
            <img
              src={worldMap}
              alt="Global Learning"
            />

            <div className="image-overlay"></div>

            <div className="image-content">
              <span>Global Learning</span>

              <h3>
                Learn Without
                Borders
              </h3>
            </div>
          </div>

          <div className="cert-right">

            <span className="section-tag">
              International Certification Pathway
            </span>

            <h2>
              From Beginner
              To Global Fluency
            </h2>

            <p>
              Progress through internationally
              recognized CEFR levels and build
              language skills for education,
              careers and global opportunities.
            </p>

            <div className="cert-badges">
              {levels.map((level, index) => (
                <div
                  key={index}
                  className={`cert-badge ${
                    showBadges ? "animate" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 0.25}s`,
                  }}
                >
                  <div className="badge-circle">
                    {level}
                  </div>

                  <div className="badge-ribbon">
                    Level {level}
                  </div>
                </div>
              ))}
            </div>

            <div className="cambridge-box">
              <h4>
                Cambridge Aligned
                Learning Framework
              </h4>

              <p>
                Structured pathway designed around
                internationally accepted proficiency
                standards.
              </p>
            </div>

          </div>

        </div>

        <div className="language-strip">
          {languages.map((language, index) => (
            <div
              className="language-chip"
              key={index}
            >
              {language}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationPathway;