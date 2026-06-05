// import "./TransformationPillars.css";

// import {
//   MessageSquareText,
//   Crown,
//   Mic2,
//   Brain,
//   Compass,
// } from "lucide-react";

// const pillars = [
//   {
//     icon: <MessageSquareText size={32} />,
//     title: "Communicate",
//     description:
//       "Develop communication confidence, clarity and meaningful expression.",
//   },

//   {
//     icon: <Crown size={32} />,
//     title: "Lead",
//     description:
//       "Build leadership capabilities that inspire action and responsibility.",
//   },

//   {
//     icon: <Mic2 size={32} />,
//     title: "Express",
//     description:
//       "Strengthen public speaking, stage presence and self-expression.",
//   },

//   {
//     icon: <Brain size={32} />,
//     title: "Build",
//     description:
//       "Develop emotional intelligence, resilience and personal growth.",
//   },

//   {
//     icon: <Compass size={32} />,
//     title: "Navigate",
//     description:
//       "Prepare for future opportunities, careers and global success.",
//   },
// ];

// export default function TransformationPillars() {
//   return (
//     <section className="pillars">

//       <div className="container">

//         <div className="pillars-header">

//           <span className="pillars-tag">
//             THE ETA FRAMEWORK
//           </span>

//           <h2>
//             The Transformation
//             <span> Journey We Create</span>
//           </h2>

//           <p>
//             Every ETA program is designed around a structured
//             transformation framework that empowers learners
//             to communicate, lead, express, build and navigate
//             their future with confidence.
//           </p>

//         </div>

//         <div className="pillars-grid">

//           {pillars.map((pillar, index) => (
//             <div
//               className="pillar-card"
//               key={index}
//             >

//               <div className="pillar-icon">
//                 {pillar.icon}
//               </div>

//               <h3>{pillar.title}</h3>

//               <p>
//                 {pillar.description}
//               </p>

//               <span className="pillar-number">
//                 0{index + 1}
//               </span>

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }







// import "./TransformationPillars.css";

// import { motion } from "framer-motion";

// import h1 from "../../assets/hero/h1.jpg";
// import h2 from "../../assets/hero/h2.jpg";
// import h3 from "../../assets/hero/h3.jpg";
// import h4 from "../../assets/hero/h4.jpg";
// import h5 from "../../assets/hero/h5.jpg";

// const journey = [
//   {
//     title: "COMMUNICATE",
//     image: h1,
//     description:
//       "Develop confidence, clarity and impactful communication skills that empower learners to express themselves effectively in every environment.",
//   },

//   {
//     title: "LEAD",
//     image: h2,
//     description:
//       "Build leadership qualities that inspire responsibility, collaboration and meaningful action.",
//   },

//   {
//     title: "EXPRESS",
//     image: h3,
//     description:
//       "Strengthen public speaking, presentation skills and stage confidence through experiential learning.",
//   },

//   {
//     title: "BUILD",
//     image: h4,
//     description:
//       "Develop emotional intelligence, resilience and adaptability for personal and professional growth.",
//   },

//   {
//     title: "NAVIGATE",
//     image: h5,
//     description:
//       "Prepare for future opportunities, careers and global success with confidence and purpose.",
//   },
// ];

// export default function TransformationPillars() {
//   return (
//     <section className="journey">

//       <div className="container">

//         <div className="journey-header">

//           <span>THE ETA TRANSFORMATION FRAMEWORK</span>

//           <h2>
//             The Journey That Creates
//             <span> Future Ready Leaders.</span>
//           </h2>

//         </div>

//         {journey.map((item, index) => (

//           <motion.div
//             key={index}
//             className={`journey-row ${
//               index % 2 === 1 ? "reverse" : ""
//             }`}
//             initial={{
//               opacity: 0,
//               y: 100,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.8,
//             }}
//           >

//             <div className="journey-watermark">
//               {item.title}
//             </div>

//             <motion.div
//               className="journey-image"
//               whileInView={{
//                 scale: [0.9, 1],
//               }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 1,
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//               />
//             </motion.div>

//             <div className="journey-content">

//               <h3>{item.title}</h3>

//               <p>
//                 {item.description}
//               </p>

//               <div className="journey-line"></div>

//             </div>

//           </motion.div>

//         ))}

//       </div>

//     </section>
//   );
// }










import "./TransformationPillars.css";

import {
  Mic2,
  Crown,
  Brain,
  Sparkles,
  Rocket,
} from "lucide-react";

import frameworkImg from "../../assets/hero/hero2.jpg";

const pillars = [
  {
    icon: <Mic2 size={28} />,
    title: "Communication",
    desc: "Public Speaking, Expression & Interaction",
  },

  {
    icon: <Crown size={28} />,
    title: "Leadership",
    desc: "Decision Making & Team Development",
  },

  {
    icon: <Brain size={28} />,
    title: "Emotional Intelligence",
    desc: "Self Awareness & Resilience",
  },

  {
    icon: <Sparkles size={28} />,
    title: "Confidence",
    desc: "Stage Presence & Self Belief",
  },

  {
    icon: <Rocket size={28} />,
    title: "Experiential Learning",
    desc: "Learning Through Activities & Action",
  },
];

export default function TransformationPillars() {
  return (
    <section className="framework">

      <div className="container">

        <div className="framework-header">

          <span className="framework-tag">
            THE ETA FRAMEWORK
          </span>

          <h2>
            Building Confident Communicators
            <span>
              & Future Ready Leaders
            </span>
          </h2>

          <p>
            Every ETA program combines communication,
            leadership, emotional intelligence,
            confidence building and experiential learning
            to create lasting transformation.
          </p>

        </div>

        <div className="framework-layout">

          <div className="framework-pillar-grid">

            {pillars.map((pillar, index) => (
              <div
                className="framework-card"
                key={index}
              >
                <div className="framework-icon">
                  {pillar.icon}
                </div>

                <h3>{pillar.title}</h3>

                <p>{pillar.desc}</p>
              </div>
            ))}

          </div>

          <div className="framework-visual">

            <img
              src={frameworkImg}
              alt=""
            />

            <div className="visual-badge">
              Transforming People.
              Transforming Lives.
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}