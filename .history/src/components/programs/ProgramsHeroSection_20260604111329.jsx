import "./ProgramsHeroSection.css";

const ProgramsHeroSection = () => {
  return (
    <section className="programs-hero">

      <div className="programs-glow"></div>
      <div className="programs-glow glow-2"></div>

      <div className="floating-circle circle-1"></div>
      <div className="floating-circle circle-2"></div>
      <div className="floating-circle circle-3"></div>

      <div className="container">

        <span className="section-tag">
          ETA Transformation Programs
        </span>

        <h1>
          Transforming Potential
          <span>Into Performance</span>
        </h1>

        <p>
          ETA's transformational programs are designed to build
          communication, leadership, emotional intelligence and
          future-ready skills for students, professionals and institutions.
        </p>

        <div className="hero-stats">

          <div className="stat-card">
            <h3>100+</h3>
            <span>Programs Delivered</span>
          </div>

          <div className="stat-card">
            <h3>10K+</h3>
            <span>Learners</span>
          </div>

          <div className="stat-card">
            <h3>50+</h3>
            <span>Institutions</span>
          </div>

          <div className="stat-card">
            <h3>95%</h3>
            <span>Success Rate</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ProgramsHeroSection;