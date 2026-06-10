import { useEffect, useState } from "react";

import {
  ArrowRight,
  PlayCircle,
  Sparkles,
  GraduationCap,
  Users,
  Trophy,
  Globe,
  Phone,
} from "lucide-react";

import "./HeroSection.css";

import hero1 from "../../assets/hero/hero1.jpg";
import hero2 from "../../assets/hero/hero2.jpg";
import hero3 from "../../assets/hero/hero3.jpg";

import h1 from "../../assets/hero/h1.jpg";
import h2 from "../../assets/hero/h2.jpg";
import h3 from "../../assets/hero/h3.jpg";

import h4 from "../../assets/hero/h4.jpg";
import h5 from "../../assets/hero/h5.jpg";
import h6 from "../../assets/hero/h6.jpg";

import h7 from "../../assets/hero/h7.jpg";
import h8 from "../../assets/hero/h8.jpg";
import h9 from "../../assets/hero/h9.jpg";

const slides = [
  {
    tag: "Endless Transformation Academy",

    title: "Building Confident",
    highlight: "Communicators.",

    title2: "Creating Future-Ready",
    highlight2: "Leaders.",

    description:
      "Transforming students, institutions and organizations through experiential learning, leadership development, communication excellence and behavioral transformation.",

    bgImage: hero1,
    mainImage: hero1,

    card1: h1,
    card2: h2,
    card3: h3,
  },

  {
    tag: "School Transformation Programs",

    title: "Empowering Individuals To",
    highlight: "Unlock Their Potential.",

    title2: "Develop Skills For",
    highlight2: "Life & Leadership.",

    description:
      "Structured communication, leadership and confidence programs designed to create future-ready learners.",

    bgImage: hero2,
    mainImage: hero2,

    card1: h4,
    card2: h5,
    card3: h6,
  },

  {
    tag: "Global Language Academy",

    title: "Speak Beyond",
    highlight: "Borders.",

    title2: "Unlock Global",
    highlight2: "Opportunities.",

    description:
      "Master international languages and gain access to global careers, certifications and opportunities.",

    bgImage: hero3,
    mainImage: hero3,

    card1: h7,
    card2: h8,
    card3: h9,
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % slides.length
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">

      {/* Background Slider */}

      <div className="hero-bg-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-bg ${current === index ? "active" : ""
              }`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
            }}
          />
        ))}
      </div>

      {/* Overlay */}

      <div className="hero-overlay"></div>

      {/* Decorative Elements */}

      <div className="hero-orb orb-1"></div>
      <div className="hero-orb orb-2"></div>
      {/* <div className="hero-grid"></div> */}

      <div className="container hero-wrapper">

        {/* LEFT */}

        <div className="hero-content">

          <div className="hero-badge">
            <Sparkles size={14} />
            {slides[current].tag}
          </div>

          <h1 className="hero-title">

            {slides[current].title}

            <span>
              {slides[current].highlight}
            </span>
            {/* 
            <br /> */}

            {slides[current].title2}

            <span>
              {slides[current].highlight2}
            </span>

          </h1>

          <p className="hero-description">
            {slides[current].description}
          </p>

          <div className="hero-buttons">

            <button
              className="hero-btn primary"
              onClick={() =>
                document
                  .getElementById("programs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Programs
              <ArrowRight size={18} />
            </button>

            <button
              className="hero-btn secondary"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Phone size={18} />
              Contact Us
            </button>

          </div>

          {/* <div className="journey-strip">

            <span>COMMUNICATE</span>

            <span>LEAD</span>

            <span>EXPRESS</span>

            <span>BUILD</span>

            <span>NAVIGATE</span>

          </div> */}

        </div>

        {/* RIGHT */}

        <div className="hero-visual">

          {/* Main Image */}

          <div
            key={`main-${current}`}
            className="main-image-card"
          >
            <img
              src={slides[current].mainImage}
              alt=""
            />

            <div className="image-caption">
              Endless Transformation Academy
            </div>
          </div>

          {/* Floating Images */}

          <div
            key={`card1-${current}`}
            className="mini-image mini-1"
          >
            <img
              src={slides[current].card1}
              alt=""
            />
          </div>

          <div
            key={`card2-${current}`}
            className="mini-image mini-2"
          >
            <img
              src={slides[current].card2}
              alt=""
            />
          </div>

          <div
            key={`card3-${current}`}
            className="mini-image mini-3"
          >
            <img
              src={slides[current].card3}
              alt=""
            />
          </div>

          {/* Impact Cards */}

          <div className="metric-card metric-1">
            <GraduationCap size={18} />
            <div>
              <h4>10K+</h4>
              <span>Students Impacted</span>
            </div>
          </div>

          <div className="metric-card metric-2">
            <Users size={18} />
            <div>
              <h4>50+</h4>
              <span>Institutions</span>
            </div>
          </div>

          <div className="metric-card metric-3">
            <Trophy size={18} />
            <div>
              <h4>200+</h4>
              <span>Programs Delivered</span>
            </div>
          </div>

          {/* Founder Card */}

          <div className="founder-card">

            <div className="founder-avatar">
              R
            </div>

            <div>
              <strong>
                Ranjeetha Sarath
              </strong>

              <span>
                Founder & Director
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Trust Bar */}

      <div className="hero-trust-bar">

        <div>
          <Globe size={16} />
          <span>7+ Languages</span>
        </div>

        <div>
          <Users size={16} />
          <span>50+ Institutions</span>
        </div>

        <div>
          <Trophy size={16} />
          <span>200+ Programs</span>
        </div>

        <div>
          <GraduationCap size={16} />
          <span>Experiential Learning</span>
        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="scroll-indicator">
        <span></span>
      </div>

    </section>
  );
}