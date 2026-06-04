

// import "./AboutSection.css";
// import founder from "../../assets/founder.jpg";
// import about1 from "../../assets/about/about1.jpg";
// import about2 from "../../assets/about/about2.jpg";

// import {
//   GraduationCap,
//   Globe,
//   Users,
//   Trophy,
//   ArrowRight,
// } from "lucide-react";

// const AboutSection = () => {
//   return (
//     <section className="about-premium">

//       <div className="container">

//         {/* Header */}

//         <div className="about-header">

//           <span className="section-tag">
//             About Endless Transformation Academy
//           </span>

//           <h2>
//          Empowering Future
// Leaders
//           </h2>

//         </div>

//         {/* Founder */}

//         <div className="about-intro">

//           <div className="about-image">

//             <img
//               src={founder}
//               alt="Founder"
//             />

//           </div>

//           <div className="about-content">

//             <span className="mini-title">
//               Founder & Director
//             </span>

//             <h3>
//               Mrs. Ranjeetha Sarath
//             </h3>

//             <p>
//               Endless Transformation Academy
//               was founded with a vision to
//               empower students, professionals
//               and institutions through
//               communication, leadership,
//               confidence and transformational
//               learning experiences.
//             </p>

//             <p>
//               We believe true education goes
//               beyond academics. It nurtures
//               confidence, emotional intelligence
//               and future-ready skills that
//               create meaningful impact.
//             </p>

//             <a href="/">
//               Discover Our Journey
//               <ArrowRight size={18} />
//             </a>

//           </div>

//         </div>

//         {/* Immersive Showcase */}

//         <div className="academy-showcase">

//           <img
//             src={about1}
//             alt=""
//             className="academy-main"
//           />

//           <div className="showcase-card">

//             <h4>
//               Learning Beyond
//               The Classroom
//             </h4>

//             <p>
//               Communication • Leadership •
//               Confidence • Global Learning
//             </p>

//           </div>

//           <img
//             src={about2}
//             alt=""
//             className="floating-workshop"
//           />

//         </div>


//       </div>

//     </section>
//   );
// };

// export default AboutSection;






import "./AboutSection.css";

import about1 from "../../assets/about/about1.jpg";
import about2 from "../../assets/about/about2.jpg";

import {
  GraduationCap,
  Globe,
  Users,
  Trophy,
} from "lucide-react";

const AboutSection = () => {
  return (
    <section className="eta-about">

      <div className="container">

        {/* Header */}

        <div className="eta-about__header">

          <span className="eta-about__tag">
            About Endless Transformation Academy
          </span>

          <h2>
            Transforming People.
            Inspiring Confidence.
          </h2>

          <p>
            A transformation-focused learning organization
            dedicated to developing confident communicators,
            emotionally intelligent individuals and
            future-ready leaders.
          </p>

        </div>

        {/* Main Content */}

        <div className="eta-about__content">

          <div className="eta-about__left">

            <span className="eta-about__mini-title">
              A Transformation Focused Learning Organization
            </span>

            <h3>
              Building Confident Communicators,
              Future-Ready Leaders &
              Measurable Impact
            </h3>

            <p>
              Endless Transformation Academy empowers
              students, educators, institutions and
              professionals through experiential learning,
              communication mastery, leadership development
              and behavioral transformation programs.
            </p>

            <p>
              Our learning ecosystems are designed to
              bridge the gap between academic excellence
              and real-world readiness, creating lasting
              transformation in individuals and institutions.
            </p>

            <div className="eta-about__stats">

              <div className="eta-about__stat">
                <h4>1000+</h4>
                <span>Learners Impacted</span>
              </div>

              <div className="eta-about__stat">
                <h4>6+</h4>
                <span>Core Programs</span>
              </div>

              <div className="eta-about__stat">
                <h4>7+</h4>
                <span>Global Languages</span>
              </div>

            </div>

          </div>

          <div className="eta-about__right">

            <img
              src={about1}
              alt="ETA Learning Experience"
              className="eta-about__main-image"
            />

            <img
              src={about2}
              alt="ETA Workshop"
              className="eta-about__floating-image"
            />

          </div>

        </div>

        {/* Transformation Pillars */}

        <div className="eta-about__pillars">

          <div className="eta-about__pillar">

            <Users size={34} />

            <h4>Confident Communicators</h4>

            <p>
              Communication mastery,
              public speaking and articulation.
            </p>

          </div>

          <div className="eta-about__pillar">

            <GraduationCap size={34} />

            <h4>Future Ready Leaders</h4>

            <p>
              Leadership development and
              confidence building programs.
            </p>

          </div>

          <div className="eta-about__pillar">

            <Trophy size={34} />

            <h4>Measurable Impact</h4>

            <p>
              Practical learning with
              transformational outcomes.
            </p>

          </div>

          <div className="eta-about__pillar">

            <Globe size={34} />

            <h4>Global Language Learning</h4>

            <p>
              International language
              training and communication.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;