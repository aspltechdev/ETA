import "./WhyLearnSection.css";

const WhyLearnSection = () => {
  return (
    <section className="why-learn">
      <div className="container">

        <div className="section-title">
          <span>Benefits</span>
          <h2>Why Learn With Us?</h2>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <div className="icon">🎥</div>
            <h3>Live Classes</h3>
            <p>
              Interactive live sessions with
              experienced tutors.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">👨‍🏫</div>
            <h3>Native Tutors</h3>
            <p>
              Learn authentic pronunciation
              from native speakers.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">🏆</div>
            <h3>Certification</h3>
            <p>
              Earn globally recognized
              language certificates.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyLearnSection;