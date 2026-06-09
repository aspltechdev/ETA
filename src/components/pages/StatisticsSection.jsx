import "./StatisticsSection.css";

const StatisticsSection = () => {
  return (
    <section className="stats">
      <div className="container">

        <div className="stats-grid">

          <div className="stat-card">
            <h2>10K+</h2>
            <p>Students</p>
          </div>

          <div className="stat-card">
            <h2>7+</h2>
            <p>Languages</p>
          </div>

          <div className="stat-card">
            <h2>1000+</h2>
            <p>Tutors</p>
          </div>

          <div className="stat-card">
            <h2>95%</h2>
            <p>Success Rate</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StatisticsSection;