import "./LearningMethodology.css";
import { useEffect, useState } from "react";

import schoolImg from "../../assets/about/about1.jpg";
import scl from "../../assets/about/aboutthree.jpg";
import Img from "../../assets/about/aboutfour.jpg";

const slides = [
  {
    title: "Communication",
    desc: "Build confident speaking and communication skills.",
    image: schoolImg,
  },
  {
    title: "Leadership",
    desc: "Develop leadership and decision-making abilities.",
    image: scl,
  },
  {
    title: "Emotional Intelligence",
    desc: "Improve empathy, awareness and relationships.",
    image: Img,
  },
  {
    title: "Global Exposure",
    desc: "Gain international perspective and confidence.",
    image: schoolImg,
  },
  {
    title: "Practical Learning",
    desc: "Learn through real-world experiences.",
    image: scl,
  },
  {
    title: "Transformation",
    desc: "Create measurable personal growth.",
    image: Img,
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

      <div className="container eta-container">

        <div className="eta-banner-grid">

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

          <div className="eta-right">

            <div className="eta-card">
              <h3>ETA</h3>
              <p>Transformation Journey</p>
            </div>

            <div className="feature-card">

              <img
                src={slides[active].image}
                alt={slides[active].title}
              />

              <div className="feature-content">
                <h3>{slides[active].title}</h3>
                <p>{slides[active].desc}</p>
              </div>

            </div>

          </div>

        </div>

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