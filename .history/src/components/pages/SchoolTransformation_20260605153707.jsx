import "./SchoolTransformation.css";

import {
  Smile,
  Sparkles,
  Mic2,
  Crown,
} from "lucide-react";

import schoolImg from "../../assets/about/about1.jpg";

const journey = [
  {
    icon: <Smile size={28} />,
    grade: "Grade 1 - 2",
    title: "Foundation",
    desc: "Expression, listening skills, participation confidence and social interaction.",
  },
  {
   
    grade: "Grade 3 - 5",
    title: "Confidence",
    desc: "Public speaking basics, classroom participation and leadership foundations.",
  },
  {
   
    grade: "Grade 6 - 8",
    title: "Communication",
    desc: "Leadership development, structured speaking and collaboration skills.",
  },
  {
    
    grade: "Grade 9 - 12",
    title: "Leadership",
    desc: "Interview readiness, presentation mastery and future leadership skills.",
  },
];

export default function SchoolTransformation() {
  return (
    <section
      className="school-transform"
      style={{
        backgroundImage: `url(${schoolImg})`,
      }}
    >
      <div className="container school-content">
        <div className="school-header">
          <span className="school-tag">
            SCHOOL TRANSFORMATION PROGRAM
          </span>

          <h2>
            A Journey From
            <span> Expression To Leadership</span>
          </h2>

          <p>
            Our year-long communication and leadership
            framework supports students from Grade 1
            through Grade 12 with age-appropriate
            transformation experiences.
          </p>
        </div>

        <div className="school-overlay-card">
          2 Sessions Per Week
          <span>
            Throughout The Academic Year
          </span>
        </div>

        <div className="journey-line">
          {journey.map((item, index) => (
            <div
              className="journey-node"
              key={index}
            >
              <div className="node-icon">
                {item.icon}
              </div>

              <span className="grade">
                {item.grade}
              </span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}