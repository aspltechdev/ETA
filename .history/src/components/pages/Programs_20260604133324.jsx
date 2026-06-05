import { useState } from "react";
import ProgramSection from "../programs/ProgramSection";
import ProgramsHeroSection from "../programs/ProgramsHeroSection";
import TransformationFrameworkSection from "../programs/TransformationFrameworkSection";

const Programs = () => {
  const programs = [/* same array you already have */];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % programs.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? programs.length - 1 : prev - 1
    );
  };

  return (
    <>
      <ProgramsHeroSection />
      <TransformationFrameworkSection />

      {/* SLIDER */}
      <div className="slider-container">

        <button className="nav left" onClick={prev}>
          ‹
        </button>

        <div
          className="slider-track"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {programs.map((item, i) => (
            <div className="slide" key={i}>
              <ProgramSection {...item} />
            </div>
          ))}
        </div>

        <button className="nav right" onClick={next}>
          ›
        </button>

      </div>
    </>
  );
};

export default Programs;