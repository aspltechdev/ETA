import "./NewsletterSection.css";
import {
  ArrowRight,
  Calendar,
  Users,
  TrendingUp,
  Landmark,
  Handshake,
  CheckCircle2,
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
    title: "Onboarding",
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
    title: "Performance",
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
    title: "Leadership",
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
    title: "Transition",
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

          {programs.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                className={`eta-program__card eta-program__card--${item.variant}`}
                key={index}
              >

                <div className="eta-program__card-top">

                  <div className="eta-program__icon">
                    <Icon size={26} />
                  </div>

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
                      <CheckCircle2 size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default NewsletterSection;