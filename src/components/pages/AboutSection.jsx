// import "./AboutSection.css";

// const AboutSection = () => {
//   return (
//     <section className="about">
//       <div className="container about-container">

//         <div className="about-image">
//           <img
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
//             alt=""
//           />
//         </div>

//         <div className="about-content">
//           <span>About Us</span>

//           <h2>
//             Helping Students Become Global Communicators
//           </h2>

//           <p>
//             We empower learners worldwide through
//             immersive language education, live
//             classes, certified tutors and AI-driven
//             learning experiences.
//           </p>

//           <div className="about-points">
//             <div>✓ 40+ Languages</div>
//             <div>✓ 1000+ Tutors</div>
//             <div>✓ 400K+ Students</div>
//             <div>✓ Global Certification</div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutSection;
import "./AboutSection.css";
import {
  Users,
  Globe,
  GraduationCap,
  Trophy,
} from "lucide-react";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">

      <div className="about-glow about-glow-1"></div>
      <div className="about-glow about-glow-2"></div>

      <div className="container">

        <div className="about-header">

          <span className="section-tag">
            About Endless Transformation Academy
          </span>

          <h2>
            Empowering Communication,
            Leadership & Global Learning
          </h2>

          <p>
            Endless Transformation Academy is a
            transformation-focused learning
            organization helping students,
            professionals and institutions build
            confidence, communication excellence,
            leadership capability and global
            language proficiency.
          </p>

        </div>

        <div className="about-grid">

          {/* Founder */}

          <div className="founder-panel">

            <div className="founder-image-wrapper">

              <img
                src="/images/founder.jpg"
                alt="Founder"
              />

              <div className="founder-badge">
                Founder & Director
              </div>

            </div>

            <div className="founder-content">

              <h3>
                Mrs. Ranjeetha Sarath
              </h3>

              <p>
                A visionary educator dedicated
                to transforming lives through
                communication, leadership,
                emotional intelligence and
                experiential learning.
              </p>

            </div>

          </div>

          {/* Story */}

          <div className="about-story">

            <h3>
              Transforming People.
              Transforming Lives.
            </h3>

            <p>
              We believe communication is more
              than a skill — it is a life-changing
              capability that shapes confidence,
              leadership, opportunities and
              identity.
            </p>

            <p>
              Through structured programs,
              experiential learning frameworks,
              leadership development initiatives
              and international language training,
              we create measurable personal and
              institutional impact.
            </p>

            <div className="about-highlights">

              <div className="highlight-card">
                <GraduationCap size={26} />
                <div>
                  <h4>Student Development</h4>
                  <span>
                    Communication & Leadership
                  </span>
                </div>
              </div>

              <div className="highlight-card">
                <Globe size={26} />
                <div>
                  <h4>Language Training</h4>
                  <span>
                    Global Certifications
                  </span>
                </div>
              </div>

              <div className="highlight-card">
                <Users size={26} />
                <div>
                  <h4>School Programs</h4>
                  <span>
                    Institutional Development
                  </span>
                </div>
              </div>

              <div className="highlight-card">
                <Trophy size={26} />
                <div>
                  <h4>Future Readiness</h4>
                  <span>
                    Confidence & Impact
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="stats-section">

          <div className="stat-card">
            <h3>10K+</h3>
            <p>Students Impacted</p>
          </div>

          <div className="stat-card">
            <h3>100+</h3>
            <p>Programs Delivered</p>
          </div>

          <div className="stat-card">
            <h3>50+</h3>
            <p>Institution Partners</p>
          </div>

          <div className="stat-card">
            <h3>7+</h3>
            <p>Global Languages</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;