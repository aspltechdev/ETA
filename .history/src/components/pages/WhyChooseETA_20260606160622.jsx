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
  const cardRefs = useRef([]);
  const parallaxRef = useRef(null);

  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const [isVisible, setIsVisible] = useState(false);

  const [activeStat, setActiveStat] = useState(null);

  /* Intersection Observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* Mouse Tracking */
  const handleMouseMove = useCallback((e) => {
    if (!sectionRef.current) return;

    const rect =
      sectionRef.current.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width) * 100;

    const y =
      ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });

    if (parallaxRef.current) {
      const moveX = (x - 50) * 0.015;
      const moveY = (y - 50) * 0.015;

      parallaxRef.current.style.transform =
        `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    }
  }, []);

  /* Card Hover Effect */
  const handleCardMouseMove = (e, index) => {
    if (!cardRefs.current[index]) return;

    const card = cardRefs.current[index];

    const rect = card.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width - 0.5) * 2;

    const y =
      ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    card.style.transform =
      `translate(${x * 8}px, ${y * 8}px) scale(1.03)`;

    card.style.setProperty(
      "--card-x",
      `${(x + 1) * 50}%`
    );

    card.style.setProperty(
      "--card-y",
      `${(y + 1) * 50}%`
    );

    setActiveStat(index);
  };

  const handleCardMouseLeave = (index) => {
    if (!cardRefs.current[index]) return;

    const card = cardRefs.current[index];

    card.style.transform =
      "translate(0px,0px) scale(1)";

    card.style.setProperty("--card-x", "50%");
    card.style.setProperty("--card-y", "50%");

    setActiveStat(null);
  };

  /* Feature Pills */
  const features = [
    {
      icon: <Mic size={16} />,
      text: "Voice & Speech Training",
    },
    {
      icon: <MessageCircle size={16} />,
      text: "Communication Mastery",
    },
    {
      icon: <Globe size={16} />,
      text: "Language Excellence",
    },
  ];

  
  {/* Stats Grid Side */}
<div className={`why-premium__stats ${isVisible ? "visible" : ""}`}>

  {/* Voice Frequency Visualizer */}
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

  {/* Stats Grid */}
  <div className="why-premium__stats-grid">
    {stats.map((stat, index) => (
      <div
        key={index}
        ref={(el) => (cardRefs.current[index] = el)}
        className={`why-premium__stat-card ${
          activeStat === index ? "active" : ""
        }`}
        onMouseMove={(e) => handleCardMouseMove(e, index)}
        onMouseLeave={() => handleCardMouseLeave(index)}
        style={{
          transitionDelay: `${stat.delay}s`,
          "--stat-color": stat.color,
          "--stat-gradient": stat.gradient,
          "--stat-bg-glow": stat.bgGlow,
        }}
      >
        {/* Background Image */}
        <img
          src={stat.image}
          alt={stat.label}
          className="why-premium__stat-bg-image"
        />

        {/* Dark Overlay */}
        <div className="why-premium__stat-image-overlay" />

        {/* Card Glow */}
        <div className="why-premium__stat-card-glow" />

        {/* Card Shine */}
        <div className="why-premium__stat-card-shine" />

        {/* Border */}
        <div className="why-premium__stat-card-border" />

        {/* Wave */}
        <div className="why-premium__stat-card-wave">
          <svg viewBox="0 0 100 20" preserveAspectRatio="none">
            <path
              d="M0,10 Q10,0 20,10 Q30,20 40,10 Q50,0 60,10 Q70,20 80,10 Q90,0 100,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="why-premium__stat-card-content">

          <div className="why-premium__stat-card-value">
            {stat.value}
          </div>

          <div className="why-premium__stat-card-label">
            {stat.label}
          </div>

          <div className="why-premium__stat-card-expanded">
            <p>{stat.description}</p>
          </div>

        </div>

        {/* Quotes */}
        <span className="why-premium__stat-card-quote why-premium__stat-card-quote--tl">
          "
        </span>

        <span className="why-premium__stat-card-quote why-premium__stat-card-quote--br">
          "
        </span>

      </div>
    ))}
  </div>

  {/* Translation Flow */}
  <div className="why-premium__translation-flow">
    <div className="why-premium__translation-dot why-premium__translation-dot--1" />

    <div className="why-premium__translation-line" />

    <div className="why-premium__translation-dot why-premium__translation-dot--2" />

    <div className="why-premium__translation-line why-premium__translation-line--2" />

    <div className="why-premium__translation-dot why-premium__translation-dot--3" />
  </div>

</div>