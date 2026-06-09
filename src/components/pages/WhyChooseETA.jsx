import "./WhyChooseETA.css";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  ArrowRight,
  Globe,
  Sparkles,
  Mic,
  MessageCircle,
} from "lucide-react";
import whyBg from "../../assets/w1.jpg";
import confidencImg from "../../assets/confidence.jpg";
import partImg from "../../assets/partner.jpg";
import trainingImg from "../../assets/training.jpg";
import globalImg from "../../assets/about/global Languages.webp";

const WhyChooseETA = () => {
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeStat, setActiveStat] = useState(null);
  const cardRefs = useRef([]);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
    if (parallaxRef.current) {
      const moveX = (x - 50) * 0.015;
      const moveY = (y - 50) * 0.015;
      parallaxRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    }
  }, []);

  const handleCardMouseMove = (e, index) => {
    if (!cardRefs.current[index]) return;
    const card = cardRefs.current[index];
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    card.style.transform = `translate(${x * 8}px, ${y * 8}px) scale(1.03)`;
    card.style.setProperty("--card-x", `${(x + 1) * 50}%`);
    card.style.setProperty("--card-y", `${(y + 1) * 50}%`);
    setActiveStat(index);
  };

  const handleCardMouseLeave = (index) => {
    if (!cardRefs.current[index]) return;
    const card = cardRefs.current[index];
    card.style.transform = "translate(0px, 0px) scale(1)";
    card.style.setProperty("--card-x", "50%");
    card.style.setProperty("--card-y", "50%");
    setActiveStat(null);
  };

  const stats = [
    {
      value: "10K+",
      label: "Confident Speakers",
      img: confidencImg,
      description: "Voices empowered through communication mastery",
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #2563eb, #06b6d4)",
      bgGlow: "rgba(37, 99, 235, 0.15)",
      delay: 0,
    },
    {
      value: "200+",
      label: "Training Programs",
      img: trainingImg,
      description: "Comprehensive curricula for transformative learning",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
      bgGlow: "rgba(124, 58, 237, 0.15)",
      delay: 0.1,
    },
    {
      value: "50+",
      label: "Partner Institutes",
      img: partImg,
      description: "Trusted by leading educational organizations worldwide",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #059669, #34d399)",
      bgGlow: "rgba(5, 150, 105, 0.15)",
      delay: 0.2,
    },
    {
      value: "7+",
      label: "Global Languages",
      img: globalImg,
      description: "Multilingual training for international communication",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #d97706, #fbbf24)",
      bgGlow: "rgba(217, 119, 6, 0.15)",
      delay: 0.3,
    },
  ];

  const features = [
    { icon: <Mic size={16} />, text: "Voice & Speech Training" },
    { icon: <MessageCircle size={16} />, text: "Communication Mastery" },
    { icon: <Globe size={16} />, text: "Language Excellence" },
  ];

  return (
    <section
      ref={sectionRef}
      className="why-premium"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <div className="why-premium__bg">
        <div
          ref={parallaxRef}
          className="why-premium__bg-image"
          style={{ backgroundImage: `url(${whyBg})` }}
        />
        <div className="why-premium__bg-overlay" />
        <div className="why-premium__bg-noise" />
        <div className="why-premium__bg-vignette" />
      </div>

      {/* Voice Waves */}
      <div className="why-premium__voice-waves">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`why-premium__voice-wave why-premium__voice-wave--${i + 1}`}
            style={{
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + i * 0.8}s`,
              opacity: 0.03 + i * 0.005,
            }}
          />
        ))}
      </div>

      {/* Speech Bubbles */}
      <div className="why-premium__speech-elements">
        {["Hello", "Bonjour", "Hola", "Namaste", "Konnichiwa", "Ciao"].map((word, i) => (
          <div key={i} className={`why-premium__speech-bubble why-premium__speech-bubble--${i + 1}`}>
            <span>{word}</span>
          </div>
        ))}
      </div>

      {/* Lights */}
      <div className="why-premium__lights">
        <div
          className="why-premium__light-orb why-premium__light-orb--primary"
          style={{ left: `${mousePosition.x}%`, top: `${mousePosition.y}%` }}
        />
        <div
          className="why-premium__light-orb why-premium__light-orb--secondary"
          style={{ left: `${100 - mousePosition.x}%`, top: `${100 - mousePosition.y}%` }}
        />
      </div>

      {/* Particles */}
      <div className="why-premium__particles">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`why-premium__particle why-premium__particle--${(i % 3) + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${5 + Math.random() * 7}s`,
            }}
          />
        ))}
      </div>

      <div className="why-premium__container">

        {/* Left: Content */}
        <div className={`why-premium__content ${isVisible ? "visible" : ""}`}>
          <div className="why-premium__badge">
            <Sparkles size={14} className="why-premium__badge-icon" />
            <span>Why Choose ETA</span>
          </div>

          <h2 className="why-premium__headline">
            Find your
            <span className="why-premium__headline-accent"> voice</span>
            <br />
            speak with
            <span className="why-premium__headline-accent"> confidence</span>
          </h2>

          <p className="why-premium__description">
            Endless Transformation Academy empowers students, professionals
            and institutions through communication mastery, leadership
            development, and multilingual learning experiences that create
            lasting impact.
          </p>

          <div className="why-premium__features">
            {features.map((feature, index) => (
              <div
                key={index}
                className="why-premium__feature-pill"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="why-premium__feature-pill-icon">{feature.icon}</div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="why-premium__cta">
            <span>Get In Touch</span>
            <div className="why-premium__cta-arrow">
              <ArrowRight size={18} />
            </div>
            <div className="why-premium__cta-glow" />
          </a>
        </div>

        {/* Right: Stats */}
        <div className={`why-premium__stats ${isVisible ? "visible" : ""}`}>

          <div className="why-premium__voice-visualizer">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="why-premium__frequency-bar"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  animationDuration: `${0.6 + Math.random() * 0.8}s`,
                  height: `${30 + Math.random() * 70}%`,
                }}
              />
            ))}
          </div>

          <div className="why-premium__stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`why-premium__stat-card ${activeStat === index ? "active" : ""}`}
                onMouseMove={(e) => handleCardMouseMove(e, index)}
                onMouseLeave={() => handleCardMouseLeave(index)}
                style={{
                  transitionDelay: `${stat.delay}s`,
                  "--stat-color": stat.color,
                  "--stat-gradient": stat.gradient,
                  "--stat-bg-glow": stat.bgGlow,
                }}
              >
                <div className="why-premium__stat-card-glow" />
                <div className="why-premium__stat-card-shine" />
                <div className="why-premium__stat-card-border" />

                {/* IMAGE TOP + TEXT BOTTOM layout */}
                <div className="why-premium__stat-card-content">
                  <div className="why-premium__stat-card-img-top">
                    <img src={stat.img} alt={stat.label} />
                  </div>
                  <div className="why-premium__stat-card-bottom">
                    <div className="why-premium__stat-card-value">{stat.value}</div>
                    <div className="why-premium__stat-card-label">{stat.label}</div>
                  </div>
                </div>

                <span className="why-premium__stat-card-quote why-premium__stat-card-quote--tl">"</span>
                <span className="why-premium__stat-card-quote why-premium__stat-card-quote--br">"</span>
              </div>
            ))}
          </div>

          <div className="why-premium__translation-flow">
            <div className="why-premium__translation-dot why-premium__translation-dot--1" />
            <div className="why-premium__translation-line" />
            <div className="why-premium__translation-dot why-premium__translation-dot--2" />
            <div className="why-premium__translation-line why-premium__translation-line--2" />
            <div className="why-premium__translation-dot why-premium__translation-dot--3" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseETA;