import "./LanguagesHeroSection.css";

const LanguagesHeroSection = () => {
  return (
    <section className="languages-hero">

      <div className="container">

        <span className="section-tag">
          ETA Language Academy
        </span>

        <h1>
          Learn Languages.
          Unlock Global Opportunities.
        </h1>

        <p>
          Master international languages through
          expert trainers, structured curriculum
          and globally recognized certification
          pathways.
        </p>

        <div className="language-stats">

          <div>
            <h3>7+</h3>
            <span>Languages</span>
          </div>

          <div>
            <h3>5000+</h3>
            <span>Learners</span>
          </div>

          <div>
            <h3>95%</h3>
            <span>Success Rate</span>
          </div>

          <div>
            <h3>Global</h3>
            <span>Recognition</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default LanguagesHeroSection;