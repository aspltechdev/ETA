import "./LearningMethodology.css";
import { useEffect, useState } from "react";

const slides = [
  "Communication",
  "Leadership",
  "Emotional Intelligence",
  "Global Exposure",
  "Practical Learning",
  "Transformation",
];

const LearningMethodology = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="eta-banner">

      <div className="container">

        <div className="eta-banner-grid">

          {/* Left Side */}

          <div className="eta-left">

            <span className="eta-tag">
              ETA Transformation Framework
            </span>

            <h2>
              Learning That Creates
              <span> Lasting Transformation</span>
            </h2>

            <p>
              Our methodology combines experiential learning,
              leadership development, communication mastery
              and practical implementation to create
              measurable impact.
            </p>

            <div className="eta-journey">

              <span>Discover</span>
              <span>Experience</span>
              <span>Practice</span>
              <span>Lead</span>
              <span>Transform</span>

            </div>

          </div>

          {/* Right Side */}

          <div className="eta-right">

            <div className="eta-card">
              <h3>ETA</h3>
              <p>Transformation Journey</p>
            </div>

            <div className="slider-card">
              {slides[active]}
            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="eta-stats">

          <div className="stat-card">
            <h3>1000+</h3>
            <p>Learners Impacted</p>
          </div>

          <div className="stat-card">
            <h3>50+</h3>
            <p>Workshops Conducted</p>
          </div>

          <div className="stat-card">
            <h3>7+</h3>
            <p>Languages Offered</p>
          </div>

          <div className="stat-card">
            <h3>100%</h3>
            <p>Experiential Learning</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default LearningMethodology;