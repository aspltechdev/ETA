// import "./TransformationEcosystem.css";

// import { motion } from "framer-motion";

// import ecoMain from "../../assets/hero/hero1.jpg";

// import eco1 from "../../assets/hero/hero1.jpg";
// import eco2 from "../../assets/hero/h1.jpg";
// import eco3 from "../../assets/hero/h1.jpg";
// import eco4 from "../../assets/hero/h1.jpg";
// import eco5 from "../../assets/hero/h1.jpg";

// const ecosystem = [
//   {
//     title: "Communication",
//     image: eco1,
//   },

//   {
//     title: "Leadership",
//     image: eco2,
//   },

//   {
//     title: "Global Languages",
//     image: eco3,
//   },

//   {
//     title: "Emotional Intelligence",
//     image: eco4,
//   },

//   {
//     title: "Future Readiness",
//     image: eco5,
//   },
// ];

// const TransformationEcosystem = () => {
//   return (
//     <section className="ecosystem">

//       <div className="ecosystem-glow"></div>

//       <div className="container">

//         <motion.div
//           className="ecosystem-header"
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <span className="section-tag">
//             ETA Transformation Ecosystem
//           </span>

//           <h2>
//             Building Future-Ready
//             <span> Individuals</span>
//           </h2>

//           <p>
//             A holistic framework combining
//             communication, leadership,
//             emotional intelligence and global
//             learning to create confident,
//             capable and future-ready learners.
//           </p>
//         </motion.div>

//         <motion.div
//           className="ecosystem-featured"
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src={ecoMain}
//             alt=""
//           />

//           <div className="featured-overlay"></div>

//           <div className="featured-content">

//             <span>
//               Transformation Foundation
//             </span>

//             <h3>
//               Communication &
//               Leadership Excellence
//             </h3>

//             <p>
//               The foundation for academic,
//               personal and professional
//               success.
//             </p>

//           </div>
//         </motion.div>

//         <div className="ecosystem-cards">

//           {ecosystem.map((item, index) => (
//             <motion.div
//               className="eco-card"
//               key={index}
//               initial={{
//                 opacity: 0,
//                 y: 60,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               transition={{
//                 duration: 0.7,
//                 delay: index * 0.1,
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt=""
//               />

//               <div className="eco-card-overlay"></div>

//               <div className="eco-content">
//                 <h4>
//                   {item.title}
//                 </h4>
//               </div>
//             </motion.div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default TransformationEcosystem;



import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./TransformationEcosystem.css";

import eco1 from "../../assets/hero/hero1.jpg";
import eco2 from "../../assets/hero/hero2.jpg";
import eco3 from "../../assets/hero/hero2.jpg";
import eco4 from "../../assets/hero/hero4.jpg";
import eco5 from "../../assets/hero/hero1.jpg";
import eco6 from "../../assets/hero/hero1.jpg";

const ecosystem = [
  {
    number: "01",
    title: "Communication Excellence",
    description:
      "Develop confidence, public speaking and impactful communication skills.",

    image: eco1,
  },

  {
    number: "02",
    title: "Leadership Development",
    description:
      "Build leadership qualities and decision-making abilities.",

    image: eco2,
  },

  {
    number: "03",
    title: "Global Language Learning",
    description:
      "Master international languages and unlock global opportunities.",

    image: eco3,
  },

  {
    number: "04",
    title: "Emotional Intelligence",
    description:
      "Improve self-awareness and interpersonal effectiveness.",

    image: eco4,
  },

  {
    number: "05",
    title: "Confidence Building",
    description:
      "Strengthen stage presence and personal growth.",

    image: eco5,
  },

  {
    number: "06",
    title: "Future Readiness",
    description:
      "Prepare learners for future careers and life success.",

    image: eco6,
  },
];

const TransformationEcosystem = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % ecosystem.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="ecosystem-section">

      <div className="container">

        <motion.div
          className="ecosystem-header"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span className="section-tag">
            ETA Transformation Ecosystem
          </span>

          <h2>
            Building Future Ready
            <span> Leaders</span>
          </h2>

          <p>
            A holistic transformation framework
            designed to develop communication,
            leadership, emotional intelligence
            and global competencies.
          </p>
        </motion.div>

        <motion.div
          className="ecosystem-slider"
          key={current}
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <img
            src={ecosystem[current].image}
            alt=""
            className="slider-image"
          />

          <div className="slider-overlay"></div>

          <div className="slider-content">

            {/* <span className="slide-number">
              {ecosystem[current].number}
            </span> */}

            <h3>
              {ecosystem[current].title}
            </h3>

            <p>
              {ecosystem[current].description}
            </p>

          </div>

          <div className="floating-stat">

            <h4>10K+</h4>

            <span>
              Learners Impacted
            </span>

          </div>

        </motion.div>

        <div className="slider-dots">

          {ecosystem.map((_, index) => (
            <button
              key={index}
              className={
                current === index
                  ? "active"
                  : ""
              }
              onClick={() =>
                setCurrent(index)
              }
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default TransformationEcosystem;