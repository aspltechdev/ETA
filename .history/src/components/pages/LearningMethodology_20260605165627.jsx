import "./LearningMethodology.css";

import {
  Brain,
  Mic,
  Users,
  Globe,
  Rocket,
  Trophy,
} from "lucide-react";

const pillars = [
  {
    icon: <Mic size={30} />,
    title: "Communication",
  },
  {
    icon: <Users size={30} />,
    title: "Leadership",
  },
  {
    icon: <Brain size={30} />,
    title: "Emotional Intelligence",
  },
  {
    icon: <Globe size={30} />,
    title: "Global Exposure",
  },
  {
    icon: <Rocket size={30} />,
    title: "Practical Learning",
  },
  {
    icon: <Trophy size={30} />,
    title: "Transformation",
  },
];

const LearningMethodology = () => {
  return (
    <section className="eta-methodology">

      <div className="container">

        <div className="eta-methodology__header">

          <span className="eta-methodology__tag">
            ETA Transformation Framework
          </span>

          <h2>
            Learning That Creates
            Lasting Transformation
          </h2>

          <p>
            Our methodology combines experiential
            learning, leadership development,
            communication mastery and practical
            implementation to create measurable impact.
          </p>

        </div>

        {/* Journey */}

        <div className="eta-methodology__journey">

          <div>Discover</div>
          <span></span>

          <div>Experience</div>
          <span></span>

          <div>Practice</div>
          <span></span>

          <div>Lead</div>
          <span></span>

          <div>Transform</div>

        </div>

        {/* Transformation Wheel */}

        <div className="eta-methodology__ecosystem">

          <div className="eta-methodology__center">

            <h3>
              ETA
            </h3>

            <p>
              Transformation
              Journey
            </p>

          </div>

          {pillars.map((item, index) => (
            <div
              key={index}
              className={`eta-methodology__pillar eta-methodology__pillar-${index + 1}`}
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
          ))}

        </div>

        {/* Impact Stats */}

        <div className="eta-methodology__stats">

          <div className="eta-methodology__stat">
            <h3>1000+</h3>
            <p>Learners Impacted</p>
          </div>

          <div className="eta-methodology__stat">
            <h3>50+</h3>
            <p>Workshops Conducted</p>
          </div>

          <div className="eta-methodology__stat">
            <h3>7+</h3>
            <p>Languages Offered</p>
          </div>

          <div className="eta-methodology__stat">
            <h3>100%</h3>
            <p>Experiential Learning</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default LearningMethodology;