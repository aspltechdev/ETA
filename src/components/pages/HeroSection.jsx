// import React, { useEffect, useState } from "react";
// import "./HeroSection.css";

// const slides = [
//   {
//     badge: "New",
//     title: "Learn, Live and Speak a New Language.",
//     description:
//       "Built with individual learners in mind, you'll learn with live classes and tests that are built to make sure every student excels in language learning.",
//     image:
//       "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
//   },

//   {
//     badge: "Trending",
//     title: "Master Global Languages Faster.",
//     description:
//       "Interactive sessions, expert mentors and practical speaking exercises designed for real-world communication.",
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
//   },

//   {
//     badge: "Popular",
//     title: "Unlock New Career Opportunities.",
//     description:
//       "Learn international languages and connect with opportunities around the world.",
//     image:
//       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
//   },

//   {
//     badge: "Featured",
//     title: "Become Fluent With Confidence.",
//     description:
//       "Personalized learning journeys that help you speak naturally and confidently.",
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43?w=800&q=80",
//   },
// ];

// const HeroSection = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="hero-wrapper">
//       <div className="hero-card">
//         <div className="hero-content">
//           <span className="hero-badge">
//             {slides[current].badge}
//             <small> Get started today</small>
//           </span>

//           <h1>{slides[current].title}</h1>

//           <p>{slides[current].description}</p>

//           <button className="hero-btn">
//             Get Started
//           </button>
//         </div>

//         <div className="hero-image-section">
//           <img
//             src={slides[current].image}
//             alt=""
//             className="hero-image"
//           />

//           <div className="floating-card students">
//             <h4>400k+ Students</h4>
//             <p>Learn Daily</p>
//           </div>

//           <div className="floating-card platform">
//             <h4>Biggest Language</h4>
//             <p>Learning Platform</p>
//           </div>
//         </div>
//       </div>

//       <div className="language-card">
//         <h3>Which Language Do You Want To Learn Next?</h3>

//         <div className="languages">
//           <div className="language">
//             🇫🇷
//             <span>French</span>
//           </div>

//           <div className="language">
//             🇨🇳
//             <span>Chinese</span>
//           </div>

//           <div className="language">
//             🇮🇹
//             <span>Italian</span>
//           </div>

//           <div className="language">
//             🇩🇪
//             <span>German</span>
//           </div>

//           <div className="language">
//             🇳🇱
//             <span>Dutch</span>
//           </div>

//           <div className="language">
//             🇪🇸
//             <span>Spanish</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
















// import React, { useEffect, useState } from "react";
// import "./HeroSection.css";

// const slides = [
//   {
//     badge: "Transforming Lives",
//     title: "Transforming People. Inspiring Confidence.",
//     description:
//       "Communication, Leadership, Emotional Intelligence and Future Readiness programs designed to create confident communicators and future-ready leaders.",
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
//   },

//   {
//     badge: "School Programs",
//     title: "Building Confident Students & Future Leaders.",
//     description:
//       "Experiential learning, public speaking, leadership development and emotional intelligence programs for schools and institutions.",
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
//   },

//   {
//     badge: "Global Languages",
//     title: "Master Global Languages. Unlock Global Opportunities.",
//     description:
//       "French, German, Spanish, Japanese, Korean and Chinese certification programs for students and professionals.",
//     image:
//       "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
//   },

//   {
//     badge: "ETA Academy",
//     title: "Where Skills Meet Purpose.",
//     description:
//       "Communication mastery, leadership excellence, behavioral transformation and internationally recognized language certifications.",
//     image:
//       "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&q=80",
//   },
// ];

// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 6000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="hero">

//       <div className="hero-grid"></div>

//       <div className="hero-glow hero-glow-1"></div>
//       <div className="hero-glow hero-glow-2"></div>

//       <div className="hero-container">

//         <div className="hero-left">

//           <span className="hero-badge">
//             {slides[current].badge}
//           </span>

//           <h1 key={current}>
//             {slides[current].title}
//           </h1>

//           <p>
//             {slides[current].description}
//           </p>

//           <div className="hero-actions">

//             <button className="primary-btn">
//               Explore Programs
//             </button>

//             <button className="secondary-btn">
//               Book Consultation
//             </button>

//           </div>

//           <div className="hero-tags">

//             <span>Communication</span>

//             <span>Leadership</span>

//             <span>Languages</span>

//             <span>Future Readiness</span>

//           </div>

//         </div>

//         <div className="hero-right">

//           <img
//             src={slides[current].image}
//             alt=""
//             className="hero-image"
//           />

//           <div className="floating-card floating-1">
//             <h4>10K+</h4>
//             <p>Students Impacted</p>
//           </div>

//           <div className="floating-card floating-2">
//             <h4>50+</h4>
//             <p>Institution Partners</p>
//           </div>

//         </div>

//       </div>

//       <div className="achievement-bar">

//         <div className="achievement">
//           <h3>100+</h3>
//           <span>Programs Delivered</span>
//         </div>

//         <div className="achievement">
//           <h3>50+</h3>
//           <span>School Partners</span>
//         </div>

//         <div className="achievement">
//           <h3>7+</h3>
//           <span>Global Languages</span>
//         </div>

//         <div className="achievement">
//           <h3>95%</h3>
//           <span>Success Rate</span>
//         </div>

//       </div>

//     </section>
//   );
// }


import { useEffect, useState } from "react";
import {
  ArrowRight,
  PlayCircle,
  GraduationCap,
  Globe,
  Users,
  Trophy,
} from "lucide-react";

import "./HeroSection.css";

const slides = [
  {
    tag: "Endless Transformation Academy",
    title: "Transforming People.\nTransforming Lives.",
    description:
      "Empowering students, professionals and institutions through communication, leadership, emotional intelligence and global language learning.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80",
  },

  {
    tag: "School Transformation",
    title:
      "Creating Confident Communicators & Future Leaders.",
    description:
      "Structured communication, public speaking and leadership programs for schools and educational institutions.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80",
  },

  {
    tag: "Foreign Language Academy",
    title:
      "Learn Languages.\nUnlock Global Opportunities.",
    description:
      "French, German, Spanish, Japanese, Korean and Chinese certification programs for global careers.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",
  },

  {
    tag: "Leadership Development",
    title:
      "Confidence Is The Skill Of The Future.",
    description:
      "Leadership, emotional intelligence and personality development programs designed for lifelong success.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=80",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % slides.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">

      {/* Background Image */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${slides[current].image})`,
        }}
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Gradient Effects */}
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      {/* Grid */}
      <div className="hero-grid"></div>

      <div className="container hero-content">

        {/* Left */}
        <div className="hero-left">

          <span className="hero-tag">
            ✨ {slides[current].tag}
          </span>

          <h1 key={current}>
            {slides[current].title}
          </h1>

          <p>
            {slides[current].description}
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Book Consultation
              <ArrowRight size={18} />
            </button>

            <button className="btn-secondary">
              <PlayCircle size={18} />
              Watch Programs
            </button>

          </div>

          <div className="hero-services">

            <span>Communication</span>

            <span>Leadership</span>

            <span>Foreign Languages</span>

            <span>Public Speaking</span>

            <span>Emotional Intelligence</span>

          </div>

        </div>

        {/* Right */}
        <div className="hero-right">

          <div className="hero-card card-one">
            <GraduationCap />
            <div>
              <h4>10K+</h4>
              <p>Students Impacted</p>
            </div>
          </div>

          <div className="hero-card card-two">
            <Users />
            <div>
              <h4>50+</h4>
              <p>Institution Partners</p>
            </div>
          </div>

          <div className="hero-card card-three">
            <Globe />
            <div>
              <h4>7+</h4>
              <p>Global Languages</p>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Trust Bar */}

      <div className="trust-bar">

        <div className="trust-item">
          <Trophy size={20} />
          <span>100+ Programs Delivered</span>
        </div>

        <div className="trust-item">
          <Users size={20} />
          <span>50+ School Partners</span>
        </div>

        <div className="trust-item">
          <Globe size={20} />
          <span>International Certifications</span>
        </div>

        <div className="trust-item">
          <GraduationCap size={20} />
          <span>Experiential Learning</span>
        </div>

      </div>

    </section>
  );
}