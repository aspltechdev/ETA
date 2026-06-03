import "./FounderMessageSection.css";

const FounderMessageSection = () => {
  return (
    <section className="founder-message">

      <div className="container">

        <div className="founder-grid">

          <div className="founder-image">

            <img
              src="/images/founder.jpg"
              alt="Founder"
            />

          </div>

          <div className="founder-content">

            <span className="section-tag">
              Message From Our Founder
            </span>

            <h2>
              Every Individual Has
              Limitless Potential
            </h2>

            <p>
              At ETA, we believe every learner
              carries unique strengths waiting to
              be discovered and developed.
            </p>

            <p>
              Through communication, leadership,
              emotional intelligence and global
              learning, we empower individuals to
              achieve meaningful success.
            </p>

            <h4>
              Mrs. Ranjeetha Sarath
            </h4>

            <span>
              Founder & Director
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FounderMessageSection;