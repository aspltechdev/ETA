import "./NewsletterSection.css";
import {
  ArrowRight,
  Calendar,
  Mail,
  Phone,
  Globe,
  Users,
  TrendingUp,
  Landmark,
  Handshake,
  CheckCircle2,
  Car,
} from "lucide-react";

import newsletter1 from "../../assets/newsletter1.jpg";
import newsletter2 from "../../assets/newsletter2.jpg";
import newsletter3 from "../../assets/newsletter3.jpg";

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
    icon: Users,
    variant: "blue",
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
    icon: TrendingUp,
    variant: "teal",
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
    icon: Landmark,
    variant: "purple",
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
    icon: Handshake,
    variant: "orange",
    points: [
      "Outplacement Communication",
      "Heat Safety Behavioral Protocols (OSHA 2026)",
      "Mentorship Handover",
    ],
  },
];

const NewsletterSection = () => {
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

      </div>

      {/* ===================== */}
      {/* Poster Replica Section */}
      {/* ===================== */}

      <div className="eta-poster">

        <div className="container">

          {/* Poster Top Bar */}

          <div className="eta-poster__topbar">

            <div className="eta-poster__brand">
              <span className="eta-poster__brand-name">ENDLESS</span>
              <span className="eta-poster__brand-sub">Transformation Academy</span>
            </div>

            <div className="eta-poster__upskill">
              <span className="eta-poster__upskill-main">Upskill</span>
              <span className="eta-poster__upskill-sub">from Cambridge</span>
            </div>

          </div>

          {/* Poster Heading */}

          <div className="eta-poster__heading">
            <h2>
              MANDATORY
              <br />
              AUTOMOBILE
            </h2>
            <h3>ANNUAL PROGRAM CALENDAR</h3>
          </div>

          {/* Tagline strip */}

          <div className="eta-poster__strip">
            TRANSFORM SKILLS. TRANSFORM PERFORMANCE.
          </div>

          {/* Program Boxes */}

          <div className="eta-poster__grid">

            {programs.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className={`eta-poster__card eta-poster__card--${item.variant}`}
                  key={index}
                >

                  <div className="eta-poster__card-top">

                    <div className="eta-poster__icon">
                      <Icon size={22} />
                    </div>

                    <span className="eta-poster__period">
                      {item.period}
                    </span>

                  </div>

                  <h4>{item.title}</h4>
                  <span className="eta-poster__subtitle">
                    {item.subtitle}
                  </span>

                  <ul className="eta-poster__list">
                    {item.points.map((point, i) => (
                      <li key={i}>
                        <CheckCircle2 size={14} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              );
            })}

          </div>

          {/* Footer Bar */}

          <div className="eta-poster__footer">

            <div className="eta-poster__footer-left">

              <div className="eta-poster__footer-line">
                <Mail size={16} />
                <span>
                  endlesstransformationeta@gmail.com
                  <br />
                  connect@endlessindia.com
                </span>
              </div>

              <div className="eta-poster__footer-line">
                <Globe size={16} />
                <span>endlessindia.com &nbsp; Connect Us</span>
              </div>

            </div>

            <div className="eta-poster__footer-center">
              <Phone size={16} />
              <div>
                <span className="eta-poster__contact-label">CONTACT</span>
                <span className="eta-poster__contact-number">9176465416</span>
                <span className="eta-poster__contact-number">9840535411</span>
              </div>
            </div>

            <div className="eta-poster__footer-right">
              <span className="eta-poster__seats">LIMITED SEATS AVAILABLE</span>
              <a href="/" className="eta-poster__register">
                REGISTER NOW! <ArrowRight size={18} />
              </a>
            </div>

          </div>

          {/* Bottom strip */}

          <div className="eta-poster__bottom">
            <span className="eta-poster__bottom-line" />
            <Car size={18} />
            <span>ANNUAL WORKFORCE DEVELOPMENT PROGRAM</span>
            <span className="eta-poster__bottom-line" />
          </div>

        </div>

      </div>

    </section>
  );
};

export default NewsletterSection;