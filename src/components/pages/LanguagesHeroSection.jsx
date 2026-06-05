import "./LanguagesHeroSection.css";
import heroImage from "../../assets/study-abroad.png";

const LanguagesHeroSection = () => {
  return (
    <section className="languages-hero">

      <img
        src={heroImage}
        alt="Study Abroad"
        className="hero-bg-image"
      />

      {/* Floating Flags */}

      <div className="floating-flags">

        <div className="flag flag-1">
          🇫🇷
        </div>

        <div className="flag flag-2">
          🇬🇧
        </div>

        <div className="flag flag-3">
          🇺🇸
        </div>

        <div className="flag flag-4">
          🇨🇦
        </div>

      </div>

      <div className="container">

        <span className="section-tag">
          ETA Language Academy
        </span>

        <h1>
          Learn Languages.
          Unlock Global Opportunities.
        </h1>

        <p className="hero-subtext">
          Master international languages through
          expert trainers, structured curriculum
          and globally recognized certification
          pathways.
        </p>

        <div className="language-stats">

          <div>
            <h3>7+</h3>
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

      </div>

    </section>
  );
};

export default LanguagesHeroSection;
/* =========================
   FLOATING FLAGS
========================= */

.floating-flags {
  position: absolute;
  inset: 0;

  z-index: 1;

  pointer-events: none;
}

.flag {
  position: absolute;

  width: 180px;
  height: 180px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 90px;

  background: rgba(255,255,255,0.08);

  backdrop-filter: blur(10px);

  border: 3px solid rgba(255,255,255,0.15);

  box-shadow:
    0 20px 40px rgba(0,0,0,0.25);

  animation: floatFlag 6s ease-in-out infinite;
}

/* France */

.flag-1 {
  top: 34%;
  left: 18%;
}

/* UK */

.flag-2 {
  top: 10%;
  left: 38%;

  animation-delay: 1s;
}

/* USA */

.flag-3 {
  top: 30%;
  left: 52%;

  animation-delay: 2s;
}

/* Canada */

.flag-4 {
  top: 68%;
  left: 16%;

  animation-delay: 3s;
}

@keyframes floatFlag {

  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }

  100% {
    transform: translateY(0);
  }

}

/* Keep text above flags */

.languages-hero .container {
  position: relative;
  z-index: 2;
}

/* Mobile */

@media (max-width: 768px) {

  .flag {
    width: 110px;
    height: 110px;

    font-size: 55px;
  }

  .flag-1 {
    left: 5%;
    top: 40%;
  }

  .flag-2 {
    left: 35%;
    top: 12%;
  }

  .flag-3 {
    left: 55%;
    top: 35%;
  }

  .flag-4 {
    left: 10%;
    top: 75%;
  }
}