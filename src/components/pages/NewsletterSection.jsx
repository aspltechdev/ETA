import "./NewsletterSection.css";
import {
  ArrowRight,
  Calendar,
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

    </section>
  );
};

export default NewsletterSection;