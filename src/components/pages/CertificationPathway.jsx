


import "./CertificationPathway.css";

import worldMap from "../../assets/w1.jpg";

const levels = [
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "C2",
];

const languages = [
  "🇫🇷 French",
  "🇩🇪 German",
  "🇪🇸 Spanish",
  "🇯🇵 Japanese",
  "🇰🇷 Korean",
  "🇨🇳 Chinese",
];

const CertificationPathway = () => {
  return (
    <section className="certification-section">

      <div className="certification-glow"></div>

      <div className="container">

        <div className="certification-wrapper">

          {/* Left */}

          <div className="cert-left">

            <img
              src={worldMap}
              alt="Global Learning"
            />

            <div className="image-overlay"></div>

            <div className="image-content">

              <span>
                Global Learning
              </span>

              <h3>
                Learn Without
                Borders
              </h3>

            </div>

          </div>

          {/* Right */}

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

            <div className="pathway">

              {levels.map(
                (item, index) => (
                  <>
                    <div
                      className="level-box"
                      key={item}
                    >
                      {item}
                    </div>

                    {index <
                      levels.length -
                        1 && (
                      <span>
                        →
                      </span>
                    )}
                  </>
                )
              )}

            </div>

            <div className="cambridge-box">

              <h4>
                Cambridge Aligned
                Learning Framework
              </h4>

              <p>
                Structured pathway
                designed around
                internationally accepted
                proficiency standards.
              </p>

            </div>

          </div>

        </div>

        {/* Languages */}

        <div className="language-strip">

          {languages.map(
            (language, index) => (
              <div
                className="language-chip"
                key={index}
              >
                {language}
              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
};

export default CertificationPathway;