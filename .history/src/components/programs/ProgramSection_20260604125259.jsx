import { useState, useEffect, useRef, useCallback } from "react";
import "./ProgramSection.css";

const defaultSlides = [
  {
    tag: "Strength",
    title: "Build Real Power",
    description: "Unlock your full strength potential with science-backed programming designed to help you lift heavier, recover faster, and dominate every session.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
  {
    tag: "Cardio",
    title: "Endurance Redefined",
    description: "Push your cardiovascular limits with progressive training plans that build stamina, improve heart health, and keep you energised all day long.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
  },
  {
    tag: "Hypertrophy",
    title: "Sculpt Your Physique",
    description: "Target every muscle group with precision. Our hypertrophy programs combine volume and intensity to maximise muscle growth and definition.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
  },
  {
    tag: "Recovery",
    title: "Rest Smarter, Grow Faster",
    description: "Recovery is where progress is made. Guided stretching, mobility work, and sleep optimisation protocols to keep you performing at your best.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  },
];

const ProgramSection = ({
  features = defaultSlides,
  reverse = false,
}) => {
  const allSlides = features.length > 0 ? features : defaultSlides;

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
      setCurrent(((n % allSlides.length) + allSlides.length) % allSlides.length);
      setElapsed(0);
    },
    [allSlides.length]
  );

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    setElapsed(0);
    timerRef.current = setInterval(() => {
      if (pausedRef.current) return;
      setElapsed((e) => {
        const next = e + TICK;
        if (next >= INTERVAL) {
          setCurrent((c) => (c + 1) % allSlides.length);
          return 0;
        }
        return next;
      });
    }, TICK);
  }, [allSlides.length]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  // Touch pause/resume
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handleTouchStart = () => { pausedRef.current = true; };
    const handleTouchEnd = () => { pausedRef.current = false; };
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchend", handleTouchEnd);
    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

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

  const onMouseEnter = () => { pausedRef.current = true; };

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
        {allSlides.map((slide, i) => (
          <img
            key={i}
            className={`program-slide-img ${i === current ? "active" : ""}`}
            src={slide.image}
            alt={slide.title}
          />
        ))}
        <div className="program-img-fade" />
      </div>

      <div className={`program-wrapper ${reverse ? "reverse" : ""}`}>
        <div className="program-content">
          {allSlides.map((slide, i) => (
            <div
              key={i}
              className={`program-pane ${i === current ? "active" : ""}`}
            >
              {slide.tag && <span className="section-tag">{slide.tag}</span>}
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>

        {allSlides.length > 1 && (
          <div className="program-controls">
            <div className="program-dots">
              {allSlides.map((_, i) => (
                <button
                  key={i}
                  className={`program-dot ${i === current ? "active" : ""}`}
                  onClick={() => { goTo(i); startTimer(); }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="program-nav">
              <button className="program-nav-btn" onClick={() => { goTo(current - 1); startTimer(); }}>&#8592;</button>
              <button className="program-nav-btn" onClick={() => { goTo(current + 1); startTimer(); }}>&#8594;</button>
            </div>
          </div>
        )}
      </div>

      <div
        className="program-progress"
        style={{ width: `${(elapsed / INTERVAL) * 100}%` }}
      />
    </section>
  );
};

export default ProgramSection;