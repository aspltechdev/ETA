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
    icon: <Mic size={28} />,
    title: "Communication",
    desc: "Build confident speaking and meaningful interactions.",
  },
  {
    icon: <Users size={28} />,
    title: "Leadership",
    desc: "Develop initiative, ownership and team collaboration.",
  },
  {
    icon: <Brain size={28} />,
    title: "Emotional Intelligence",
    desc: "Strengthen self-awareness and interpersonal skills.",
  },
  {
    icon: <Globe size={28} />,
    title: "Global Exposure",
    desc: "Expand perspectives through diverse learning experiences.",
  },
  {
    icon: <Rocket size={28} />,
    title: "Practical Learning",
    desc: "Apply concepts through real-world activities and projects.",
  },
  {
    icon: <Trophy size={28} />,
    title: "Transformation",
    desc: "Create measurable growth in confidence and leadership.",
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
            <span> Lasting Transformation</span>
          </h2>

          <p>
            Our methodology combines experiential learning,
            communication mastery, leadership development
            and practical implementation to create measurable impact.
          </p>

        </div>

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

        <div className="eta-methodology__pillars">

          {pillars.map((item, index) => (
            <div
              key={index}
              className="eta-methodology__pillar-card"
            >
              <div className="pillar-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>
          ))}

        </div>

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