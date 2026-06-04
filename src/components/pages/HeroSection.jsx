

// import { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   PlayCircle,
//   GraduationCap,
//   Globe,
//   Users,
//   Trophy,
// } from "lucide-react";

// import "./HeroSection.css";

// const slides = [
//   {
//     tag: "Endless Transformation Academy",
//     title: "Transforming People.\nTransforming Lives.",
//     description:
//       "Empowering students, professionals and institutions through communication, leadership, emotional intelligence and global language learning.",
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80",
//   },

//   {
//     tag: "School Transformation",
//     title:
//       "Creating Confident Communicators & Future Leaders.",
//     description:
//       "Structured communication, public speaking and leadership programs for schools and educational institutions.",
//     image:
//       "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80",
//   },

//   {
//     tag: "Foreign Language Academy",
//     title:
//       "Learn Languages.\nUnlock Global Opportunities.",
//     description:
//       "French, German, Spanish, Japanese, Korean and Chinese certification programs for global careers.",
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",
//   },

//   {
//     tag: "Leadership Development",
//     title:
//       "Confidence Is The Skill Of The Future.",
//     description:
//       "Leadership, emotional intelligence and personality development programs designed for lifelong success.",
//     image:
//       "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=80",
//   },
// ];

// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent(
//         (prev) => (prev + 1) % slides.length
//       );
//     }, 6000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="hero-section">

//       {/* Background Image */}
//       <div
//         className="hero-bg"
//         style={{
//           backgroundImage: `url(${slides[current].image})`,
//         }}
//       />

//       {/* Overlay */}
//       <div className="hero-overlay" />

//       {/* Gradient Effects */}
//       <div className="hero-glow hero-glow-1"></div>
//       <div className="hero-glow hero-glow-2"></div>

//       {/* Grid */}
//       <div className="hero-grid"></div>

//       <div className="container hero-content">

//         {/* Left */}
//         <div className="hero-left">

//           <span className="hero-tag">
//             ✨ {slides[current].tag}
//           </span>

//           <h1 key={current}>
//             {slides[current].title}
//           </h1>

//           <p>
//             {slides[current].description}
//           </p>

//           <div className="hero-buttons">

//             <button className="btn-primary">
//               Book Consultation
//               <ArrowRight size={18} />
//             </button>

//             <button className="btn-secondary">
//               <PlayCircle size={18} />
//               Watch Programs
//             </button>

//           </div>

//           <div className="hero-services">

//             <span>Communication</span>

//             <span>Leadership</span>

//             <span>Foreign Languages</span>

//             <span>Public Speaking</span>

//             <span>Emotional Intelligence</span>

//           </div>

//         </div>

//         {/* Right */}
//         <div className="hero-right">

//           <div className="hero-card card-one">
//             <GraduationCap />
//             <div>
//               <h4>10K+</h4>
//               <p>Students Impacted</p>
//             </div>
//           </div>

//           <div className="hero-card card-two">
//             <Users />
//             <div>
//               <h4>50+</h4>
//               <p>Institution Partners</p>
//             </div>
//           </div>

//           <div className="hero-card card-three">
//             <Globe />
//             <div>
//               <h4>7+</h4>
//               <p>Global Languages</p>
//             </div>
//           </div>

//         </div>

//       </div>

//       {/* Bottom Trust Bar */}

//       <div className="trust-bar">

//         <div className="trust-item">
//           <Trophy size={20} />
//           <span>100+ Programs Delivered</span>
//         </div>

//         <div className="trust-item">
//           <Users size={20} />
//           <span>50+ School Partners</span>
//         </div>

//         <div className="trust-item">
//           <Globe size={20} />
//           <span>International Certifications</span>
//         </div>

//         <div className="trust-item">
//           <GraduationCap size={20} />
//           <span>Experiential Learning</span>
//         </div>

//       </div>

//     </section>
//   );
// }





// import { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   PlayCircle,
//   GraduationCap,
//   Globe,
//   Users,
//   Trophy,
// } from "lucide-react";

// import "./HeroSection.css";

// // const slides = [
// //   {
// //     tag: "Endless Transformation Academy",
// //     title: "Transforming People.",
// //     highlight: "Transforming Lives.",
// //     description:
// //       "Empowering students, professionals and institutions through communication, leadership, emotional intelligence and global language learning.",
// //     image:
// //       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80",
// //   },

// //   {
// //     tag: "School Transformation",
// //     title: "Creating Confident",
// //     highlight: "Future Leaders.",
// //     description:
// //       "Structured communication, public speaking and leadership programs for schools and institutions.",
// //     image:
// //       "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&q=80",
// //   },

// //   {
// //     tag: "Foreign Language Academy",
// //     title: "Learn Languages.",
// //     highlight: "Unlock Opportunities.",
// //     description:
// //       "French, German, Spanish, Japanese, Korean and Chinese certification programs.",
// //     image:
// //       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80",
// //   },

// //   {
// //     tag: "Leadership Development",
// //     title: "Confidence Is",
// //     highlight: "The Future Skill.",
// //     description:
// //       "Leadership, emotional intelligence and personality development programs.",
// //     image:
// //       "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1400&q=80",
// //   },
// // ];
// const slides = [
//   {
//     tag: "Endless Transformation Academy",
//     title: "Transforming People.",
//     highlight: "Transforming Lives.",
//     description:
//       "Empowering students, professionals, educators, and institutions through communication excellence, leadership mastery, and life-changing transformation programs.",
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80",
//   },

//   {
//     tag: "School Transformation Programs",
//     title: "Building Confident",
//     highlight: "Future Leaders.",
//     description:
//       "Helping students develop communication, public speaking, leadership, emotional intelligence, and real-world confidence from an early age.",
//     image:
//       "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80",
//   },

//   {
//     tag: "Global Language Academy",
//     title: "Speak Beyond",
//     highlight: "Borders.",
//     description:
//       "Master French, German, Spanish, Japanese, Korean, and Chinese with globally recognized certification programs that unlock international opportunities.",
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",
//   },

//   {
//     tag: "Leadership & Life Skills",
//     title: "Confidence Creates",
//     highlight: "Extraordinary Futures.",
//     description:
//       "Develop leadership, personality, emotional intelligence, teamwork, and professional excellence to thrive in an ever-changing world.",
//     image:
//       "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=80",
//   },

//   {
//     tag: "Corporate Training Solutions",
//     title: "Transform Teams.",
//     highlight: "Elevate Performance.",
//     description:
//       "Customized corporate learning programs focused on communication, leadership, collaboration, productivity, and workplace excellence.",
//     image:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80",
//   },
// ];
// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent(
//         (prev) => (prev + 1) % slides.length
//       );
//     }, 6000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     // <section className="hero">

//     //   <div className="hero-aurora hero-aurora-1"></div>
//     //   <div className="hero-aurora hero-aurora-2"></div>
//     //   <div className="hero-grid"></div>

//     //   <div className="container hero-wrapper">

//     //     <div className="hero-content">

//     //       <span className="hero-badge">
//     //         ✨ {slides[current].tag}
//     //       </span>

//     //       <h1 key={current}>
//     //         {slides[current].title}
//     //         <span>{slides[current].highlight}</span>
//     //       </h1>

//     //       <p>{slides[current].description}</p>

//     //       <div className="hero-buttons">

//     //         <button className="hero-btn primary">
//     //           Book Consultation
//     //           <ArrowRight size={18} />
//     //         </button>

//     //         <button className="hero-btn secondary">
//     //           <PlayCircle size={18} />
//     //           Watch Programs
//     //         </button>

//     //       </div>

//     //       <div className="hero-metrics">

//     //         <div>
//     //           <h3>10K+</h3>
//     //           <span>Students</span>
//     //         </div>

//     //         <div>
//     //           <h3>50+</h3>
//     //           <span>Schools</span>
//     //         </div>

//     //         <div>
//     //           <h3>7+</h3>
//     //           <span>Languages</span>
//     //         </div>

//     //       </div>

//     //     </div>

//     //     <div className="hero-visual">

//     //       <div className="hero-image-card">

//     //         <img
//     //           src={slides[current].image}
//     //           alt=""
//     //         />

//     //       </div>

//     //       <div className="floating-card card-one">
//     //         <GraduationCap size={20} />
//     //         <div>
//     //           <strong>10K+</strong>
//     //           <span>Learners</span>
//     //         </div>
//     //       </div>

//     //       <div className="floating-card card-two">
//     //         <Users size={20} />
//     //         <div>
//     //           <strong>50+</strong>
//     //           <span>Schools</span>
//     //         </div>
//     //       </div>

//     //       <div className="floating-card card-three">
//     //         <Globe size={20} />
//     //         <div>
//     //           <strong>7+</strong>
//     //           <span>Languages</span>
//     //         </div>
//     //       </div>

//     //     </div>

//     //   </div>

//     //   <div className="hero-slider-indicator">

//     //     {slides.map((_, index) => (
//     //       <span
//     //         key={index}
//     //         className={
//     //           current === index
//     //             ? "active"
//     //             : ""
//     //         }
//     //       />
//     //     ))}

//     //   </div>

//     //   <div className="hero-marquee">

//     //     <div className="hero-track">
//     //       Communication • Leadership • Public Speaking •
//     //       Emotional Intelligence • Foreign Languages •
//     //       Personality Development • Communication •
//     //       Leadership • Public Speaking • Emotional Intelligence •
//     //     </div>

//     //   </div>

//     //   <div className="hero-bottom-bar">

//     //     <div>
//     //       <Trophy />
//     //       <span>100+ Programs Delivered</span>
//     //     </div>

//     //     <div>
//     //       <Users />
//     //       <span>50+ Institution Partners</span>
//     //     </div>

//     //     <div>
//     //       <Globe />
//     //       <span>Global Certifications</span>
//     //     </div>

//     //   </div>

//     // </section>

//     <section className="hero">

//   <div className="hero-bg-slider">
//     {slides.map((slide, index) => (
//       <div
//         key={index}
//         className={`hero-bg ${
//           current === index ? "active" : ""
//         }`}
//         style={{
//           backgroundImage: `url(${slide.image})`,
//         }}
//       />
//     ))}
//   </div>

//   <div className="hero-overlay"></div>

//   <div className="container hero-wrapper">

//     <div className="hero-content">

//       <span className="hero-badge">
//         ✨ {slides[current].tag}
//       </span>

//       <h1>
//         {slides[current].title}
//         <span>{slides[current].highlight}</span>
//       </h1>

//       <p>
//         {slides[current].description}
//       </p>

//       <div className="hero-buttons">

//         <button className="hero-btn primary">
//           Book Consultation
//           <ArrowRight size={18} />
//         </button>

//         <button className="hero-btn secondary">
//           <PlayCircle size={18} />
//           Watch Programs
//         </button>

//       </div>

//       <div className="hero-metrics">

//         <div>
//           <h3>10K+</h3>
//           <span>Students</span>
//         </div>

//         <div>
//           <h3>50+</h3>
//           <span>Schools</span>
//         </div>

//         <div>
//           <h3>7+</h3>
//           <span>Languages</span>
//         </div>

//       </div>

//     </div>

//     <div className="hero-visual">

//       <div className="main-image-card">
//         <img
//           src={slides[current].image}
//           alt=""
//         />

//         <div className="image-caption">
//           Leadership & Transformation
//         </div>
//       </div>

//       <div className="mini-image mini-1">
//         <img
//           src={slides[1].image}
//           alt=""
//         />
//       </div>

//       <div className="mini-image mini-2">
//         <img
//           src={slides[2].image}
//           alt=""
//         />
//       </div>

//       <div className="glass-card">
//         <GraduationCap size={20} />

//         <div>
//           <strong>10,000+</strong>
//           <span>Learners Empowered</span>
//         </div>
//       </div>

//     </div>

//   </div>

// </section>
//   );
// }


import { useEffect, useState } from "react";

import {
  ArrowRight,
  PlayCircle,
  GraduationCap,
} from "lucide-react";

import "./HeroSection.css"; 

import hero1 from "../../assets/hero/hero1.jpg";
import hero2 from "../../assets/hero/hero2.jpg";
import hero3 from "../../assets/hero/hero3.jpg";
import hero4 from "../../assets/hero/hero4.jpg";

import h1 from "../../assets/hero/h1.jpg";
import h2 from "../../assets/hero/h2.jpg";
import h3 from "../../assets/hero/h3.jpg";
import h4 from "../../assets/hero/h4.jpg";
import h5 from "../../assets/hero/h5.jpg";
import h6 from "../../assets/hero/h6.jpg";
import h7 from "../../assets/hero/h7.jpg";
import h8 from "../../assets/hero/h8.jpg";
import h9 from "../../assets/hero/h9.jpg";


const slides = [
  {
    tag: "Endless Transformation Academy",
    title: "Transforming People.",
    highlight: "Transforming Lives.",
    description:
      "Empowering students, professionals and institutions through communication, leadership and transformation programs.",

    bgImage:
   hero1,

    mainImage:
      hero1,

    card1:
      h1,

    card2:
      h2,

    card3:
      h3,
  },

  {
    tag: "School Transformation Programs",
title: "Empowering Individuals To",
highlight: "Unlock Their True Potential.",
    description:
      "Helping students develop leadership, communication and confidence.",

    bgImage:
      hero2,

    mainImage:
      hero2,

    card1:
     h4,

    card2:
     h5,

    card3:
      h6,
  },

  {
    tag: "Global Language Academy",
    title: "Building Confident Leaders For",
highlight: "A Better Tomorrow.",
    description:
      "Master global languages and unlock international opportunities.",

    bgImage:
      hero3,

    mainImage:
      hero3,

    card1:
      h7,

    card2:
     h8,

    card3:
      h9,
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-bg ${
              current === index ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
            }}
          />
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="container hero-wrapper">
        <div className="hero-content">
          <span className="hero-badge">
            ✨ {slides[current].tag}
          </span>

          <h1>
            {slides[current].title}
            <span>{slides[current].highlight}</span>
          </h1>

          <p>{slides[current].description}</p>

          <div className="hero-buttons">
            <button className="hero-btn primary">
              Book Consultation
              <ArrowRight size={18} />
            </button>

            <button className="hero-btn secondary">
              <PlayCircle size={18} />
              Watch Programs
            </button>
          </div>

          <div className="hero-metrics">
            <div>
              <h3>10K+</h3>
              <span>Students</span>
            </div>

            <div>
              <h3>50+</h3>
              <span>Schools</span>
            </div>

            <div>
              <h3>7+</h3>
              <span>Languages</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div
            key={`main-${current}`}
            className="main-image-card"
          >
            <img
              src={slides[current].mainImage}
              alt=""
            />

            <div className="image-caption">
              Endless Transformation Academy
            </div>
          </div>

          {/* <div
            key={`c1-${current}`}
            className="mini-image mini-1"
          >
            <img
              src={slides[current].card1}
              alt=""
            />
          </div> */}

          {/* <div
            key={`c2-${current}`}
            className="mini-image mini-2"
          >
            <img
              src={slides[current].card2}
              alt=""
            />
          </div> */}

          {/* <div
            key={`c3-${current}`}
            className="mini-image mini-3"
          >
            <img
              src={slides[current].card3}
              alt=""
            />
          </div> */}

          {/* <div className="glass-card">
            <GraduationCap size={20} />

            <div>
              <strong>10K+</strong>
              <span>Learners Empowered</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}