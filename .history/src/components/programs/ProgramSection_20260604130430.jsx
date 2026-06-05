import { useState, useEffect } from "react";
import ProgramSection from "./ProgramSection";
import "./ProgramSectionSlider.css";

const ProgramSectionSlider = ({ programs }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % programs.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [paused, programs.length]);

  return (
    <div
      className="slider-wrapper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {programs.map((item, i) => (
          <div className="slide" key={i}>
            <ProgramSection {...item} />
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
    </div>
  );
};

export default ProgramSectionSlider;