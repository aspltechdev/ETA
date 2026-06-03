// import "./MissionVisionSection.css";
// import {
//   Target,
//   Eye,
//   Sparkles,
//   Globe,
// } from "lucide-react";

// const MissionVisionSection = () => {
//   return (
//     <section className="mission-vision">

//       <div className="container">

//         <div className="section-heading">
//           <span>Our Purpose</span>

//           <h2>
//             Building Confident Communicators,
//             Future Leaders & Global Citizens
//           </h2>

//           <p>
//             At Endless Transformation Academy,
//             we believe true education goes beyond
//             academics. Our mission is to empower
//             individuals with communication,
//             leadership, emotional intelligence,
//             and global language skills that create
//             lifelong transformation.
//           </p>
//         </div>

//         <div className="mv-grid">

//           <div className="mv-card mission-card">

//             <div className="icon-wrap">
//               <Target size={34} />
//             </div>

//             <span className="card-tag">
//               Our Mission
//             </span>

//             <h3>
//               Transforming Potential
//               Into Purpose
//             </h3>

//             <p>
//               To empower students,
//               professionals and institutions
//               through transformational learning
//               experiences focused on communication,
//               leadership, emotional intelligence,
//               confidence building and global
//               language proficiency.
//             </p>

//             <ul>
//               <li>
//                 Develop confident communicators
//               </li>

//               <li>
//                 Build future-ready leaders
//               </li>

//               <li>
//                 Enhance emotional intelligence
//               </li>

//               <li>
//                 Enable global opportunities
//               </li>
//             </ul>

//           </div>

//           <div className="mv-card vision-card">

//             <div className="icon-wrap">
//               <Eye size={34} />
//             </div>

//             <span className="card-tag">
//               Our Vision
//             </span>

//             <h3>
//               Creating A World Of
//               Confident Leaders
//             </h3>

//             <p>
//               To become a globally recognized
//               transformation academy that nurtures
//               confident communicators,
//               emotionally intelligent individuals,
//               skilled language learners and
//               responsible leaders capable of
//               making meaningful impact in society.
//             </p>

//             <ul>
//               <li>
//                 Global transformation ecosystem
//               </li>

//               <li>
//                 International learning standards
//               </li>

//               <li>
//                 Lifelong personal growth
//               </li>

//               <li>
//                 Future-ready education
//               </li>
//             </ul>

//           </div>

//         </div>

//         <div className="core-values">

//           <div className="value-card">
//             <Sparkles size={28} />
//             <h4>Transformation</h4>
//           </div>

//           <div className="value-card">
//             <Target size={28} />
//             <h4>Leadership</h4>
//           </div>

//           <div className="value-card">
//             <Globe size={28} />
//             <h4>Global Learning</h4>
//           </div>

//           <div className="value-card">
//             <Eye size={28} />
//             <h4>Growth Mindset</h4>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default MissionVisionSection;


import "./MissionVisionSection.css";

import {
  Target,
  Eye,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const MissionVisionSection = () => {
  return (
    <section className="mission-section">

      <div className="mission-glow"></div>

      <div className="container">

        <div className="mission-header">

          <span className="section-badge">
            Our Purpose
          </span>

          <h2>
            Creating Confident Communicators,
            Future Leaders & Global Citizens
          </h2>

          <p>
            We believe education is not only about
            knowledge. It is about confidence,
            communication, leadership and the
            ability to create meaningful impact in
            the world.
          </p>

        </div>

        <div className="purpose-grid">

          <div className="purpose-card vision">

            <div className="purpose-icon">
              <Eye size={32} />
            </div>

            <span>Vision</span>

            <h3>
              Transforming Lives Through
              Communication & Leadership
            </h3>

            <p>
              To build a world where every learner
              possesses the confidence,
              communication skills and leadership
              capabilities required to thrive in
              modern society.
            </p>

          </div>

          <div className="purpose-card mission">

            <div className="purpose-icon">
              <Target size={32} />
            </div>

            <span>Mission</span>

            <h3>
              Empowering Individuals Through
              Transformation Focused Learning
            </h3>

            <p>
              To deliver communication,
              leadership, emotional intelligence
              and global language learning programs
              that create measurable personal and
              institutional impact.
            </p>

          </div>

        </div>

        {/* ETA JOURNEY */}

        <div className="journey-section">

          <h3>
            The Continuous Journey Of Growth
          </h3>

          <div className="journey-grid">

            <div className="journey-card">
              <span>01</span>
              <h4>Communicate</h4>
              <p>Speak with clarity and confidence.</p>
            </div>

            <div className="journey-card">
              <span>02</span>
              <h4>Lead</h4>
              <p>Lead with empathy and purpose.</p>
            </div>

            <div className="journey-card">
              <span>03</span>
              <h4>Express</h4>
              <p>Share ideas effectively.</p>
            </div>

            <div className="journey-card">
              <span>04</span>
              <h4>Build</h4>
              <p>Create meaningful relationships.</p>
            </div>

            <div className="journey-card">
              <span>05</span>
              <h4>Navigate</h4>
              <p>Thrive in real world situations.</p>
            </div>

          </div>

        </div>

        {/* VALUES */}

        <div className="values-grid">

          <div className="value-box">
            <Sparkles size={28} />
            <h4>Transformation</h4>
          </div>

          <div className="value-box">
            <Target size={28} />
            <h4>Leadership</h4>
          </div>

          <div className="value-box">
            <Globe size={28} />
            <h4>Global Learning</h4>
          </div>

          <div className="value-box">
            <ArrowRight size={28} />
            <h4>Growth Mindset</h4>
          </div>

        </div>

      </div>

    </section>
  );
};

export default MissionVisionSection;