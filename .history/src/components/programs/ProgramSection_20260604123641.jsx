import { useState, useEffect, useRef, useCallback } from "react";
import "./BannerSlider.css";

const BannerSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const bannerRef = useRef(null);
  const shineRef = useRef(null);
  const timerRef = useRef(null);
  const pausedRef = useRef(false);
  const INTERVAL = 4000;
  const TICK = 50;

  const goTo = useCallback((n) => {
    setCurrent((prev) => ((n % slides.length) + slides.length) % slides.length);
    setElapsed(0);
  }, [slides.length]);

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
    banner.style.transition = "transform 0.6s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s";
    banner.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    shineRef.current.style.opacity = "0";
    setTimeout(() => { banner.style.transition = ""; }, 600);
    pausedRef.current = false;
  };

  const onMouseEnter = () => {
    pausedRef.current = true;
  };

  return (
    <div
      className="banner-slider"
      ref={bannerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <div className="shine" ref={shineRef} />

      <div className="bs-img-side">
        {slides.map((slide, i) => (
          <img
            key={i}
            className={`bs-slide-img ${i === current ? "active" : ""}`}
            src={slide.image}
            alt={slide.title}
          />
        ))}
        <div className="bs-img-overlay" />
      </div>

      <div className="bs-content-side">
        <div className="bs-slide-content">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`bs-pane ${i === current ? "active" : ""}`}
            >
              {slide.tag && <span className="bs-tag">{slide.tag}</span>}
              <div className="bs-title">{slide.title}</div>
              <div className="bs-desc">{slide.description}</div>
            </div>
          ))}
        </div>

        <div className="bs-controls">
          <div className="bs-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`bs-dot ${i === current ? "active" : ""}`}
                onClick={() => { goTo(i); startTimer(); }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="bs-nav">
            <button className="bs-nav-btn" onClick={() => { goTo(current - 1); startTimer(); }}>&#8592;</button>
            <button className="bs-nav-btn" onClick={() => { goTo(current + 1); startTimer(); }}>&#8594;</button>
          </div>
        </div>
      </div>

      <div
        className="bs-progress"
        style={{ width: `${(elapsed / INTERVAL) * 100}%` }}
      />
    </div>
  );
};

export default BannerSlider;