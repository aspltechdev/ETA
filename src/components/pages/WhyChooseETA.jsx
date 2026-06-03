import "./WhyChooseETA.css";

import {
  Users,
  Trophy,
  Globe,
  GraduationCap,
  Award,
  Brain,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: <Users size={30} />,
    title: "10,000+ Students Impacted",
    desc: "Creating confident communicators and future leaders.",
  },

  {
    icon: <Trophy size={30} />,
    title: "100+ Programs Delivered",
    desc: "Successfully transforming individuals and institutions.",
  },

  {
    icon: <GraduationCap size={30} />,
    title: "50+ Institution Partners",
    desc: "Trusted by schools and educational organizations.",
  },

  {
    icon: <Globe size={30} />,
    title: "7+ Global Languages",
    desc: "International language learning opportunities.",
  },

  {
    icon: <Award size={30} />,
    title: "Certified Learning Pathways",
    desc: "Globally aligned certification programs.",
  },

  {
    icon: <Brain size={30} />,
    title: "Experiential Learning",
    desc: "Learning through practical application and engagement.",
  },
];

const WhyChooseETA = () => {
  return (
    <section className="why-eta">

      <div className="why-glow"></div>

      <div className="container">

        <div className="why-header">

          <span className="section-tag">
            Why Choose ETA
          </span>

          <h2>
            The Trusted Partner For
            Transformation & Growth
          </h2>

          <p>
            Endless Transformation Academy combines
            communication, leadership, emotional
            intelligence and global learning into a
            powerful transformation ecosystem that
            creates measurable outcomes.
          </p>

        </div>

        {/* Feature Grid */}

        <div className="why-grid">

          {features.map((item, index) => (
            <div
              key={index}
              className="why-card"
            >

              <div className="why-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* Stats Banner */}

        <div className="impact-banner">

          <div className="impact-item">
            <h3>10K+</h3>
            <span>Students</span>
          </div>

          <div className="impact-item">
            <h3>100+</h3>
            <span>Programs</span>
          </div>

          <div className="impact-item">
            <h3>50+</h3>
            <span>Institutions</span>
          </div>

          <div className="impact-item">
            <h3>95%</h3>
            <span>Success Rate</span>
          </div>

        </div>

        {/* Differentiators */}

        <div className="differentiators">

          <h3>
            What Makes ETA Different?
          </h3>

          <div className="diff-grid">

            <div className="diff-pill">
              <Sparkles size={18} />
              Communication Excellence
            </div>

            <div className="diff-pill">
              <Sparkles size={18} />
              Leadership Development
            </div>

            <div className="diff-pill">
              <Sparkles size={18} />
              Emotional Intelligence
            </div>

            <div className="diff-pill">
              <Sparkles size={18} />
              Future Readiness
            </div>

            <div className="diff-pill">
              <Sparkles size={18} />
              International Certifications
            </div>

            <div className="diff-pill">
              <Sparkles size={18} />
              Experiential Learning
            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="why-cta">

          <h3>
            Ready To Begin Your
            Transformation Journey?
          </h3>

          <p>
            Join thousands of learners who have
            developed confidence, leadership and
            global skills through ETA programs.
          </p>

          <button>
            Explore Programs
            <ArrowRight size={18} />
          </button>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseETA;