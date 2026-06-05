import "./LanguagesHeroSection.css";

import heroImage from "../../assets/study-abroad.png";

import french from "../../assets/french.png";
import german from "../../assets/ger.png";
import spain from "../../assets/spain.png";
import japan from "../../assets/japan.png";
import korean from "../../assets/kor.png"; 
import chinese from "../../assets/chin.png";

const LanguagesHeroSection = () => {
  return (
    <section className="languages-hero">
      <img
        src={heroImage}
        alt="Study Abroad"
        className="hero-bg-image"
      />

      <div className="container">
        <span className="section-tag">
          ETA Language Academy
        </span>

        <h1>
          Learn Languages.<br />
          Unlock Global Opportunities.
        </h1>

        <p className="hero-subtext">
          Master international languages through
          expert trainers, structured curriculum
          and globally recognized certification
          pathways.
        </p>

        {/* 4 Stats Cards - Now aligned side-by-side in one perfect row */}
        <div className="language-stats">
          {/* Modified here: Changed from 7 to 6+ */}
          <div>
            <h3>6+</h3>
            <span>Languages</span>
          </div>

          <div>
            <h3>5000+</h3>
            <span>Learners</span>
          </div>

          <div>
            <h3>95%</h3>
            <span>Success Rate</span>
          </div>

          <div>
            <h3>Global</h3>
            <span>Recognition</span>
          </div>
        </div>

        {/* Alternating Masonry Grid Side-Panel */}
        <div className="floating-flags">
          
          {/* French Card */}
          <div 
            className="flag flag-1" 
            style={{ backgroundImage: `url(${french})` }}
          >
            <div className="flag-content">
              <h4>French</h4>
              <span>A1 - C2</span>
            </div>
          </div>

          {/* German Card */}
          <div 
            className="flag flag-2" 
            style={{ backgroundImage: `url(${german})` }}
          >
            <div className="flag-content">
              <h4>German</h4>
              <span>A1 - C2</span>
            </div>
          </div>

          {/* Spanish Card */}
          <div 
            className="flag flag-3" 
            style={{ backgroundImage: `url(${spain})` }}
          >
            <div className="flag-content">
              <h4>Spanish</h4>
              <span>A1 - C2</span>
            </div>
          </div>

          {/* Japanese Card */}
          <div 
            className="flag flag-4" 
            style={{ backgroundImage: `url(${japan})` }}
          >
            <div className="flag-content">
              <h4>Japanese</h4>
              <span>JLPT N5 - N1</span>
            </div>
          </div>

          {/* Korean Card */}
          <div 
            className="flag flag-5" 
            style={{ backgroundImage: `url(${korean})` }}
          >
            <div className="flag-content">
              <h4>Korean</h4>
              <span>TOPIK I - II</span>
            </div>
          </div>

          {/* Chinese Card */}
          <div 
            className="flag flag-6" 
            style={{ backgroundImage: `url(${chinese})` }}
          >
            <div className="flag-content">
              <h4>Chinese</h4>
              <span>HSK 1 - 6</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LanguagesHeroSection;
