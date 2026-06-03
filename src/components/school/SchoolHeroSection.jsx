import "./SchoolHeroSection.css";

const SchoolHeroSection = () => {
  return (
    <section className="school-hero">

      <div className="container">

        <span className="section-tag">
          School Transformation Solutions
        </span>

        <h1>
          Building Confident Students,
          Future Leaders &
          Future-Ready Schools
        </h1>

        <p>
          ETA partners with schools to deliver
          communication, leadership,
          emotional intelligence and
          future readiness programs.
        </p>

        <div className="school-stats">

          <div>
            <h3>50+</h3>
            <span>Partner Schools</span>
          </div>

          <div>
            <h3>10K+</h3>
            <span>Students Impacted</span>
          </div>

          <div>
            <h3>100+</h3>
            <span>Programs Delivered</span>
          </div>

          <div>
            <h3>95%</h3>
            <span>Engagement Rate</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default SchoolHeroSection;