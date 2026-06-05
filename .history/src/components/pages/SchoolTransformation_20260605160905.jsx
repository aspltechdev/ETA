import "./SchoolTransformation.css";

import {
  Smile,
  Sparkles,
  Mic2,
  Crown,
} from "lucide-react";

import schoolImg from "../../assets/about/about1.jpg";
import scl from "../../assets/about/aboutthree.jpg";
import Img from "../../assets/about/aboutfour.jpg";
import mg from "../../assets/about/aboutfive.jpg";

const journey = [
  {
    image: schoolImg,
    grade: "Grade 1 - 2",
    title: "Foundation",
    desc: "Expression, listening skills, participation confidence and social interaction.",
  },
  {
    image: Img,
    grade: "Grade 3 - 5",
    title: "Confidence",
    desc: "Effective communication and leadership skills.",
  },
  {
    image: scl,
    grade: "Grade 6 - 8",
    title: "Communication",
    desc: "Leadership development, structured speaking and collaboration skills.",
  },
  {
   image: mg,
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
      <div className="school-overlay"></div>

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

        <div className="journey-line">

          {journey.map((item, index) => (
            <div
              className="journey-card"
              key={index}
            >

              <div className="card-image">
                <img
  src={item.image}
  alt={item.title}
/>
              </div>

              <div className="card-content">

                <span className="grade-badge">
                  {item.grade}
                </span>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <div className="card-footer">

                  <div className="card-icon">
                    {item.icon}
                  </div>

                  <div>
                    <strong>
                      Student Growth
                    </strong>

                    <span>
                      Development Track
                    </span>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}