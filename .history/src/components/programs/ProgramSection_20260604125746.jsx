import { useState, useEffect } from "react";
import "./ProgramSection.css";

const ProgramSection = ({
  programs = [], // 👈 now accepts multiple programs
}) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || programs.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % programs.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [paused, programs.length]);

  return (
    <section
      className="program-section-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {programs.map((item, i) => (
          <div className="slide" key={i}>
            <div className={`program-wrapper ${item.reverse ? "reverse" : ""}`}>

              <div className="program-content">

                <span className="section-tag">
                  {item.tag}
                </span>

                <h2>{item.title}</h2>

                <p>{item.description}</p>

                <div className="feature-grid">
                  {item.features.map((f, idx) => (
                    <div key={idx} className="feature-card">
                      {f}
                    </div>
                  ))}
                </div>

              </div>

              <div className="program-image">
                <img src={item.image} alt={item.title} />
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* dots */}
      <div className="dots">
        {programs.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProgramSection;