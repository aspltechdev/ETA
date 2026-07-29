import "./NewsletterSection.css";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Award,
} from "lucide-react";

import newsletter1 from "../../assets/newsletter1.jpg";
import newsletter2 from "../../assets/newsletter2.jpg";
import newsletter3 from "../../assets/newsletter3.jpg";
import certificationHero from "../../assets/certificationHero.jpg";

const REGISTER_URL = "https://forms.gle/f18AAEgNiRmqmqTf9";

const newsletters = [
  {
    image: newsletter1,
    title: "Building Future Ready Leaders",
    date: "June 2026",
    category: "Leadership",
  },

  {
    image: newsletter2,
    title: "Communication Mastery Framework",
    date: "May 2026",
    category: "Communication",
  },

  {
    image: newsletter3,
    title: "Student Transformation Stories",
    date: "April 2026",
    category: "Education",
  },
];

const programs = [
  {
    period: "JUN – AUG",
    title: "ONBOARDING",
    subtitle: "Integration",
    variant: "blue",
    bgImage: newsletter1,
    points: [
      "Communication for Safety",
      "LOTO Awareness",
      "Behavioral Discipline",
      "Digital Hygiene (AIS-189)",
    ],
  },
  {
    period: "SEP – NOV",
    title: "PERFORMANCE",
    subtitle: "Optimization",
    variant: "teal",
    bgImage: newsletter2,
    points: [
      "Human-AI Collaboration",
      "Managing Human-AI Interfaces",
      "Stress Management for ADAS Testing",
      "Precision Reporting",
    ],
  },
  {
    period: "DEC – FEB",
    title: "LEADERSHIP",
    subtitle: "Governance",
    variant: "purple",
    bgImage: newsletter3,
    points: [
      "Leadership in Data Privacy",
      "Crisis Communication for Product Recalls",
      "Conflict Resolution",
    ],
  },
  {
    period: "MAR – MAY",
    title: "TRANSITION",
    subtitle: "Sustainability",
    variant: "orange",
    bgImage: newsletter1,
    points: [
      "Outplacement Communication",
      "Heat Safety Behavioral Protocols (OSHA 2026)",
      "Mentorship Handover",
    ],
  },
];

const certificationBenefits = [
  "Know your English proficiency level (CEFR aligned: A1–C2)",
  "Receive a globally recognised certification from UpSkill (UK)",
  "Add your certification to your CV and LinkedIn profile",
  "Showcase your communication skills to recruiters with confidence",
  "Stand out from other applicants",
];

const certificationLevels = [
  {
    code: "C1",
    name: "Advanced",
    desc: "Proficient English user, highly effective in complex situations",
    variant: "blue",
  },
  {
    code: "B2",
    name: "Upper Intermediate",
    desc: "Independent English user, confident in daily & work situations",
    variant: "teal",
  },
];

const NewsletterSection = () => {
  const handleRegister = () => {
    window.open(REGISTER_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="eta-newsletter">

      <div className="container">

        {/* Header */}

        <div className="eta-newsletter__header">

          <span className="eta-newsletter__tag">
            ETA Publications
          </span>

          <h2>
            Insights, Stories &
            Transformation Journeys
          </h2>

          <p>
            Explore our latest newsletters featuring
            leadership development, communication
            mastery, student success stories and
            transformational learning experiences.
          </p>

        </div>

        {/* Featured Newsletter */}

        <div className="eta-newsletter__featured">

          <div className="eta-newsletter__featured-image">

            <img
              src={newsletter1}
              alt="Featured Newsletter"
            />

          </div>

          <div className="eta-newsletter__featured-content">

            <span>
              Featured Edition
            </span>

            <h3>
              Building Future Ready Leaders
              Through Experiential Learning
            </h3>

            <p>
              Discover how ETA is transforming
              communication, leadership and
              confidence building through
              practical learning ecosystems.
            </p>

            <div className="eta-newsletter__meta">
              <Calendar size={16} />
              June 2026
            </div>

            <a href="/">
              Read Newsletter

              <ArrowRight size={18} />
            </a>

          </div>

        </div>

        {/* Newsletter Cards */}

        <div className="eta-newsletter__grid">

          {newsletters.map((item, index) => (
            <div
              className="eta-newsletter__card"
              key={index}
            >

              <div className="eta-newsletter__card-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              <div className="eta-newsletter__card-content">

                <span>
                  {item.category}
                </span>

                <h4>
                  {item.title}
                </h4>

                <div className="eta-newsletter__meta">

                  <Calendar size={16} />

                  {item.date}

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Program Calendar */}

        <div className="eta-program__header">

          <span className="eta-newsletter__tag">
            Mandatory Automobile Program
          </span>

          <h2>
            Annual Program Calendar
          </h2>

          <p>
            Transform skills. Transform performance. A structured,
            year-round development journey built for every stage
            of the workforce lifecycle.
          </p>

        </div>

        <div className="eta-program__grid">

          {programs.map((item, index) => (
            <div
              className={`eta-program__card eta-program__card--${item.variant}`}
              key={index}
            >

              <div
                className="eta-program__card-bg"
                style={{ backgroundImage: `url(${item.bgImage})` }}
              />

              <div className="eta-program__card-overlay" />

              <div className="eta-program__card-content">

                <div className="eta-program__card-top">

                  <span className="eta-program__period">
                    {item.period}
                  </span>

                </div>

                <h3>{item.title}</h3>
                <span className="eta-program__subtitle">
                  {item.subtitle}
                </span>

                <ul className="eta-program__list">
                  {item.points.map((point, i) => (
                    <li key={i}>
                      <CheckCircle2 size={14} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

        {/* Certification Promo */}

        <div className="eta-cert__header">

          <span className="eta-newsletter__tag">
            Endless Transformation Academy × UpSkill (UK)
          </span>

          <h2>
            Get Certified. Get Noticed. Get Called.
          </h2>

          <p>
            Still applying for jobs but not getting interview calls? It may not
            be your degree — it's your skills. Prove your English proficiency
            with a globally recognised certification and show recruiters you
            can communicate with confidence.
          </p>

        </div>

        <div className="eta-cert__hero">
          <img
            src={certificationHero}
            alt="Students holding their English proficiency certificates"
          />
        </div>

        <div className="eta-cert__body">

          <div className="eta-cert__levels">

            {certificationLevels.map((level, index) => (
              <div
                className={`eta-cert__level eta-cert__level--${level.variant}`}
                key={index}
              >

                <div className="eta-cert__level-icon">
                  <Award size={24} />
                </div>

                <div className="eta-cert__level-code">
                  {level.code}
                </div>

                <div className="eta-cert__level-name">
                  {level.name}
                </div>

                <p className="eta-cert__level-desc">
                  {level.desc}
                </p>

              </div>
            ))}

          </div>

          <div className="eta-cert__panel">

            <ul className="eta-cert__benefits">
              {certificationBenefits.map((benefit, index) => (
                <li key={index}>
                  <CheckCircle2 size={16} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="eta-cert__cta-row">

              <div className="eta-cert__price">
                <span className="eta-cert__price-label">
                  Certification Fee
                </span>
                <span className="eta-cert__price-value">
                  ₹1499 only
                </span>
              </div>

              <button
                type="button"
                className="eta-cert__cta"
                onClick={handleRegister}
              >
                Register Now
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default NewsletterSection;