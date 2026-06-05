import "./ProgramsHeroSection.css";
import CountUp from "react-countup";

const ProgramsHeroSection = () => {
  return (
    <section className="programs-hero">

      <div className="programs-glow"></div>
      <div className="programs-glow glow-2"></div>

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
            <h3>
              <CountUp
                end={100}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
              />
              +
            </h3>
            <span>Programs Delivered</span>
          </div>

          <div className="stat-card">
            <h3>
              <CountUp
                end={10000}
                duration={3}
                separator=","
                enableScrollSpy
                scrollSpyOnce
              />
              +
            </h3>
            <span>Learners</span>
          </div>

          <div className="stat-card">
            <h3>
              <CountUp
                end={50}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
              />
              +
            </h3>
            <span>Institutions</span>
          </div>

          <div className="stat-card">
            <h3>
              <CountUp
                end={95}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
              />
              %
            </h3>
            <span>Success Rate</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ProgramsHeroSection;