import "./SuccessStoriesSection.css";
import {
  ArrowUpRight,
  TrendingUp,
  GraduationCap,
  Globe,
  Users,
} from "lucide-react";

const stories = [
  {
    category: "Communication",
    before: "Stage Fear",
    after: "Confident Speaker",
    description:
      "Students gain confidence to express ideas, present and communicate effectively.",
  },

  {
    category: "Leadership",
    before: "Passive Participation",
    after: "Future Leader",
    description:
      "Leadership programs encourage initiative, responsibility and teamwork.",
  },

  {
    category: "Languages",
    before: "Beginner",
    after: "Certified Learner",
    description:
      "Structured pathways help learners achieve international certifications.",
  },

  {
    category: "Future Readiness",
    before: "Uncertain Direction",
    after: "Career Ready",
    description:
      "Students develop essential communication and professional skills.",
  },
];

const SuccessStoriesSection = () => {
  return (
    <section className="success-section">

      <div className="success-glow"></div>

      <div className="container">

        <div className="success-header">

          <span className="section-tag">
            Success Stories & Impact
          </span>

          <h2>
            Transformations That
            Create Lasting Impact
          </h2>

          <p>
            Every program at ETA is designed to
            create measurable growth in confidence,
            communication, leadership and global
            opportunities.
          </p>

        </div>

        <div className="stories-grid">

          {stories.map((story, index) => (
            <div
              className="story-card"
              key={index}
            >

              <span className="story-category">
                {story.category}
              </span>

              <div className="story-flow">

                <div className="before-box">
                  {story.before}
                </div>

                <ArrowUpRight size={22} />

                <div className="after-box">
                  {story.after}
                </div>

              </div>

              <p>
                {story.description}
              </p>

            </div>
          ))}

        </div>

        {/* Impact Numbers */}

        <div className="impact-banner">

          <div className="impact-item">
            <Users size={28} />
            <h3>10K+</h3>
            <span>Students Impacted</span>
          </div>

          <div className="impact-item">
            <GraduationCap size={28} />
            <h3>100+</h3>
            <span>Programs Delivered</span>
          </div>

          <div className="impact-item">
            <Globe size={28} />
            <h3>7+</h3>
            <span>Global Languages</span>
          </div>

          <div className="impact-item">
            <TrendingUp size={28} />
            <h3>95%</h3>
            <span>Success Rate</span>
          </div>

        </div>

        {/* Transformation Journey */}

        <div className="journey-card">

          <h3>
            The ETA Transformation Journey
          </h3>

          <div className="journey-steps">

            <div>Learn</div>

            <span>→</span>

            <div>Practice</div>

            <span>→</span>

            <div>Apply</div>

            <span>→</span>

            <div>Transform</div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SuccessStoriesSection;