import { useState, useEffect, useRef, useCallback } from "react";
import "./ProgramSection.css";

const ProgramSection = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const sectionRef = useRef(null);
  const shineRef = useRef(null);
  const timerRef = useRef(null);
  const pausedRef = useRef(false);
  const INTERVAL = 4000;
  const TICK = 50;

  const goTo = useCallback(
    (n) => {
      setCurrent(((n % slides.length) + slides.length) % slides.length);
      setElapsed(0);
    },
    [slides.length]
  );

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    setElapsed(0);
    timerRef.current = setInterval(() => {
      if (pausedRef.current) return;
      setElapsed((e) => {
        const next = e + TICK;
        if (next >= INTERVAL) {
          setCurrent((c) => (c + 1) % slides.length);
          return 0;
        }
        return next;
      });
    }, TICK);
  }, [slides.length]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const onMouseMove = (e) => {
    const r = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const dx = (x - r.width / 2) / (r.width / 2);
    const dy = (y - r.height / 2) / (r.height / 2);
    sectionRef.current.style.transform = `perspective(1000px) rotateX(${-dy * 5}deg) rotateY(${dx * 5}deg) scale(1.012)`;
    shineRef.current.style.opacity = "1";
    shineRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.13) 0%, transparent 60%)`;
  };

  const onMouseEnter = () => {
    pausedRef.current = true;
  };

  const onMouseLeave = () => {
    pausedRef.current = false;
    const s = sectionRef.current;
    s.style.transition = "transform 0.6s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s";
    s.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    shineRef.current.style.opacity = "0";
    setTimeout(() => { s.style.transition = ""; }, 600);
  };

  return (
    <section
      className="program-section"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="program-shine" ref={shineRef} />

      <div className="program-image">
        {slides.map((slide, i) => (
          <img
            key={i}
            className={`program-slide-img ${i === current ? "active" : ""}`}
            src={slide.image}
            alt={slide.title}
          />
        ))}
        <div className="program-img-fade" />
      </div>

      <div className="program-wrapper">
        <div className="program-content">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`program-pane ${i === current ? "active" : ""}`}
            >
              {slide.tag && (
                <span className="section-tag">{slide.tag}</span>
              )}
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>

              {slide.features && (
                <div className="feature-grid">
                  {slide.features.map((f, fi) => (
                    <div key={fi} className="feature-card">{f}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="program-controls">
          <div className="program-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`program-dot ${i === current ? "active" : ""}`}
                onClick={() => { goTo(i); startTimer(); }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="program-nav">
            <button
              className="program-nav-btn"
              onClick={() => { goTo(current - 1); startTimer(); }}
            >&#8592;</button>
            <button
              className="program-nav-btn"
              onClick={() => { goTo(current + 1); startTimer(); }}
            >&#8594;</button>
          </div>
        </div>
      </div>

      <div
        className="program-progress"
        style={{ width: `${(elapsed / INTERVAL) * 100}%` }}
      />
    </section>
  );
};

export default ProgramSection;