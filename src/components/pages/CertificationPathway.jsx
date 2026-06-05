import { useEffect, useRef, useState } from "react";
import "./CertificationPathway.css";

import worldMap from "../../assets/w1.jpg";
import cambridgeLogo from "../../assets/cambridge-logo.png"; 

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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="certification-section" ref={sectionRef}>
      <div className="certification-glow"></div>

      <div className="container">
        {/* Restructured into a clean 2-column grid with a full-width bottom row */}
        <div className="certification-wrapper">
          
          {/* Top Left: Image */}
          <div className="cert-left">
            <img src={worldMap} alt="Global Learning" />
            <div className="image-overlay"></div>
            <div className="map-content">
              <span>Global Learning</span>
              <h3>Learn Without Borders</h3>
            </div>
          </div>

          {/* Top Right: Content & Badges */}
          <div className="cert-right">
            <span className="section-tag-c">
              International Certification Pathway
            </span>

            <h2>From Beginner To Global Fluency</h2>

            <p>
              Progress through internationally recognized CEFR levels and build
              language skills for education, careers and global opportunities.
            </p>

            <div className="cert-badges">
              {levels.map((level, index) => (
                <div
                  key={index}
                  className={`cert-badge ${showBadges ? "animate" : ""}`}
                  style={{
                    "--slide-delay": `${index * 0.15}s`,
                    "--wave-delay": `${2.0 + index * 0.2}s`
                  }}
                >
                  <div className="badge-circle">{level}</div>
                  <div className="badge-ribbon">Level {level}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Moved out to span full width and take up the left empty space */}
          <div className="cambridge-box">
            <div className="cambridge-logo-wrapper">
              <img 
                src={cambridgeLogo} 
                alt="University of Cambridge" 
                className="cambridge-logo-img"
              />
            </div>
            <div className="cambridge-text-wrapper">
              <h4>Cambridge Aligned Learning Framework</h4>
              <p>
                Our curriculum architecture is structurally aligned with 
                internationally accepted proficiency standards, providing you 
                with elite global recognition and measurable milestones.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CertificationPathway;
