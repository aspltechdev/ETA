import "./LearningMethodology.css";
import { useEffect, useState } from "react";

import cImg from "../../assets/about/commu.jpg";
import eImg from "../../assets/about/emotionalintelligence.jpg";
import gImg from "../../assets/about/global exposure.jpg";
import lImg from "../../assets/about/leadership.jpg";
import pImg from "../../assets/about/practicallearning.jpg";
import tImg from "../../assets/about/transformation.jpg";

const slides = [
  {
    title: "Communication",
    image: cImg,
    desc: "Develop clear expression, public speaking and confidence."
  },
  {
    title: "Leadership",
    image: lImg,
    desc: "Build decision-making and team leadership abilities."
  },
  {
    title: "Emotional Intelligence",
    image: eImg,
    desc: "Strengthen empathy, self-awareness and relationships."
  },
  {
    title: "Global Exposure",
    image: gImg,
    desc: "Prepare students for diverse global opportunities."
  },
  {
    title: "Practical Learning",
    image: pImg,
    desc: "Learn through real-world experiences and projects."
  },
  {
    title: "Transformation",
    image: tImg,
    desc: "Create lasting personal and professional growth."
  },
];

export default function LearningMethodology() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="eta-banner">
      <div className="container">

        <div className="eta-banner-grid">

          {/* LEFT SIDE */}
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
              and practical implementation to create measurable impact.
            </p>

            <div className="eta-journey">
              <span>Discover</span>
              <span>Experience</span>
              <span>Practice</span>
              <span>Lead</span>
              <span>Transform</span>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="eta-right">

            <div className="slider-card">

              <img
                src={slides[active].image}
                alt={slides[active].title}
                className="slider-image"
              />

              <div className="slide-content">

                <span className="slide-label">
                  ETA Transformation Journey
                </span>

                <h3>
                  {slides[active].title}
                </h3>

                <p>
                  {slides[active].desc}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* STATS */}
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
}