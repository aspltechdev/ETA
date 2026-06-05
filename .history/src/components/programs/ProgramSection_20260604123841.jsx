import { useState, useEffect, useRef, useCallback } from "react";
import "./ProgramSection.css";

const ProgramSection = ({
  tag,
  title,
  description,
  features,
  image,
  reverse = false,
}) => {
  const [current, setCurrent] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const bannerRef = useRef(null);
  const shineRef = useRef(null);
  const timerRef = useRef(null);
  const pausedRef = useRef(false);
  const INTERVAL = 4000;
  const TICK = 50;

  const goTo = useCallback(
    (n) => {
      setCurrent(((n % features.length) + features.length) % features.length);
      setElapsed(0);
    },
    [features.length]
  );

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    setElapsed(0);
    timerRef.current = setInterval(() => {
      if (pausedRef.current) return;
      setElapsed((e) => {
        const next = e + TICK;
        if (next >= INTERVAL) {
          setCurrent((c) => (c + 1) % features.length);
          return 0;
        }
        return next;
      });
    }, TICK);
  }, [features.length]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const onMouseMove = (e) => {
    const r = bannerRef.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const dx = (x - r.width / 2) / (r.width / 2);
    const dy = (y - r.height / 2) / (r.height / 2);
    bannerRef.current.style.transform = `perspective(900px) rotateX(${-dy * 6}deg) rotateY(${dx * 6}deg) scale(1.015)`;
    shineRef.current.style.opacity = "1";
    shineRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.14) 0%, transparent 60%)`;
  };

  const onMouseLeave = () => {
    const banner = bannerRef.current;
    banner.style.transition =
      "transform 0.6s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s";
    banner.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    shineRef.current.style.opacity = "0";
    setTimeout(() => { banner.style.transition = ""; }, 600);
    pausedRef.current = false;
  };

  const onMouseEnter = () => {
    pausedRef.current = true;
  };

  return (
    <section className="program-section">
      <div className={`program-wrapper ${reverse ? "reverse" : ""}`}>

        <div className="program-content">
          <span className="section-tag">{tag}</span>
          <h2>{title}</h2>
          <p>{description}</p>

          <div
            className="feature-grid"
            ref={bannerRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
          >
            <div className="feature-shine" ref={shineRef} />

            <div className="feature-img-side">
              {features.map((item, i) => (
                <img
                  key={i}
                  className={`feature-slide-img ${i === current ? "active" : ""}`}
                  src={item.image}
                  alt={item.title}
                />
              ))}
              <div className="feature-img-overlay" />
            </div>

            <div className="feature-content-side">
              <div className="feature-panes">
                {features.map((item, i) => (
                  <div
                    key={i}
                    className={`feature-card ${i === current ? "active" : ""}`}
                  >
                    {item.tag && (
                      <span className="section-tag">{item.tag}</span>
                    )}
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="feature-controls">
                <div className="feature-dots">
                  {features.map((_, i) => (
                    <button
                      key={i}
                      className={`feature-dot ${i === current ? "active" : ""}`}
                      onClick={() => { goTo(i); startTimer(); }}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="feature-nav">
                  <button
                    className="feature-nav-btn"
                    onClick={() => { goTo(current - 1); startTimer(); }}
                  >&#8592;</button>
                  <button
                    className="feature-nav-btn"
                    onClick={() => { goTo(current + 1); startTimer(); }}
                  >&#8594;</button>
                </div>
              </div>
            </div>

            <div
              className="feature-progress"
              style={{ width: `${(elapsed / INTERVAL) * 100}%` }}
            />
          </div>
        </div>

        <div className="program-image">
          <img src={image} alt={title} />
        </div>

      </div>
    </section>
  );
};

export default ProgramSection;