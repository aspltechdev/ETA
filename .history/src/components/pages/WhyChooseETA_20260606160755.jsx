

// import "./WhyChooseETA.css";

// import { motion } from "framer-motion";

// import {
//   ArrowRight,
//   GraduationCap,
//   Trophy,
//   Globe,
// } from "lucide-react";

// import whyBg from "../../assets/w1.jpg";

// const WhyChooseETA = () => {
//   return (
//     <section
//       className="why-eta"
//       style={{
//         backgroundImage: `url(${whyBg})`,
//       }}
//     >
//       <div className="why-overlay"></div>

//       <div className="container why-wrapper">

//         <motion.div
//           className="why-left"
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <span className="why-tag">
//             Why Choose ETA
//           </span>

//           <h2>
//             Transforming Lives Through
//             <span>
//               Meaningful Learning
//             </span>
//           </h2>

//           <p>
//             Endless Transformation Academy empowers
//             students, professionals and institutions
//             through communication, leadership,
//             emotional intelligence and global
//             learning experiences.
//           </p>

//           <button className="why-btn">
//             Explore Programs
//             <ArrowRight size={18} />
//           </button>
//         </motion.div>

//         <div className="why-right">

//           <motion.div
//             className="feature-card card-one"
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             <img
//               src={whyBg}
//               alt=""
//             />

//             <div className="card-content">
//               {/* <GraduationCap size={24} /> */}

//               <h3>10K+</h3>

//               <p>Students Impacted</p>
//             </div>
//           </motion.div>

//           <motion.div
//             className="feature-card card-two"
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.7,
//               delay: 0.15,
//             }}
//           >
//             <img
//               src={whyBg}
//               alt=""
//             />

//             <div className="card-content">
//               {/* <Trophy size={24} /> */}

//               <h3>100+</h3>

//               <p>Programs Delivered</p>
//             </div>
//           </motion.div>

//           <motion.div
//             className="feature-card card-three"
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.7,
//               delay: 0.3,
//             }}
//           >
//             <img
//               src={whyBg}
//               alt=""
//             />

//             <div className="card-content">
//               {/* <Globe size={24} /> */}

//               <h3>50+</h3>

//               <p>Institution Partners</p>
//             </div>
//           </motion.div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyChooseETA;





// import "./WhyChooseETA.css";
// import { useEffect, useRef, useState, useCallback } from "react";
// import {
//   ArrowRight,
//   GraduationCap,
//   Trophy,
//   Globe,
//   Sparkles,
//   Users,
//   Star,
//   Zap,
//   ChevronRight,
// } from "lucide-react";
// import whyBg from "../../assets/w1.jpg";

// const WhyChooseETA = () => {
//   const sectionRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeStat, setActiveStat] = useState(null);
//   const orbRefs = useRef([]);
//   const parallaxRef = useRef(null);

//   // Intersection Observer for scroll-triggered animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   // Mouse tracking for ambient light and orb interactions
//   const handleMouseMove = useCallback((e) => {
//     if (!sectionRef.current) return;
//     const rect = sectionRef.current.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;
//     setMousePosition({ x, y });

//     // Parallax effect on background
//     if (parallaxRef.current) {
//       const moveX = (x - 50) * 0.02;
//       const moveY = (y - 50) * 0.02;
//       parallaxRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
//     }
//   }, []);

//   // Magnetic effect on stat orbs
//   const handleOrbMouseMove = (e, index) => {
//     if (!orbRefs.current[index]) return;
//     const orb = orbRefs.current[index];
//     const rect = orb.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
//     const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

//     orb.style.transform = `translate(${x * 12}px, ${y * 12}px) scale(1.05)`;
//     orb.style.setProperty("--orb-x", `${(x + 1) * 50}%`);
//     orb.style.setProperty("--orb-y", `${(y + 1) * 50}%`);
//     setActiveStat(index);
//   };

//   const handleOrbMouseLeave = (index) => {
//     if (!orbRefs.current[index]) return;
//     const orb = orbRefs.current[index];
//     orb.style.transform = "translate(0px, 0px) scale(1)";
//     orb.style.setProperty("--orb-x", "50%");
//     orb.style.setProperty("--orb-y", "50%");
//     setActiveStat(null);
//   };

//   const stats = [
//     {
//       value: "10K+",
//       label: "Students Impacted",
//       icon: <Users size={22} />,
//       description: "Lives transformed through our programs",
//       color: "#2563eb",
//       gradient: "linear-gradient(135deg, #2563eb, #06b6d4)",
//       delay: 0,
//     },
//     {
//       value: "100+",
//       label: "Programs Delivered",
//       icon: <Zap size={22} />,
//       description: "Comprehensive learning experiences",
//       color: "#7c3aed",
//       gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
//       delay: 0.12,
//     },
//     {
//       value: "50+",
//       label: "Institution Partners",
//       icon: <Star size={22} />,
//       description: "Trusted by leading organizations",
//       color: "#059669",
//       gradient: "linear-gradient(135deg, #059669, #10b981)",
//       delay: 0.24,
//     },
//   ];

//   const features = [
//     { icon: <GraduationCap size={18} />, text: "Expert-led training" },
//     { icon: <Trophy size={18} />, text: "Proven methodology" },
//     { icon: <Globe size={18} />, text: "Global curriculum" },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="why-premium"
//       onMouseMove={handleMouseMove}
//     >
//       {/* Background Parallax Layer */}
//       <div className="why-premium__bg">
//         <div
//           ref={parallaxRef}
//           className="why-premium__bg-image"
//           style={{ backgroundImage: `url(${whyBg})` }}
//         />
//         <div className="why-premium__bg-overlay" />
//         <div className="why-premium__bg-noise" />
//       </div>

//       {/* Dynamic Light System */}
//       <div className="why-premium__lights">
//         <div
//           className="why-premium__light-orb why-premium__light-orb--primary"
//           style={{
//             left: `${mousePosition.x}%`,
//             top: `${mousePosition.y}%`,
//           }}
//         />
//         <div className="why-premium__light-ray why-premium__light-ray--1" />
//         <div className="why-premium__light-ray why-premium__light-ray--2" />
//         <div className="why-premium__light-ray why-premium__light-ray--3" />
//       </div>

//       {/* Floating Particles */}
//       <div className="why-premium__particles">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="why-premium__particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 6}s`,
//               animationDuration: `${4 + Math.random() * 6}s`,
//               width: `${2 + Math.random() * 4}px`,
//               height: `${2 + Math.random() * 4}px`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="why-premium__container">
//         {/* Content Side */}
//         <div className={`why-premium__content ${isVisible ? "visible" : ""}`}>
//           {/* Badge */}
//           <div className="why-premium__badge">
//             <Sparkles size={14} className="why-premium__badge-icon" />
//             <span>Why Choose ETA</span>
//             <div className="why-premium__badge-dot" />
//           </div>

//           {/* Headline */}
//           <h2 className="why-premium__headline">
//             Transforming lives
//             <br />
//             through
//             <span className="why-premium__headline-accent">
//               {" "}meaningful learning
//             </span>
//           </h2>

//           {/* Description */}
//           <p className="why-premium__description">
//             Endless Transformation Academy empowers students, professionals
//             and institutions through communication mastery, leadership
//             development, emotional intelligence, and global learning
//             experiences that create lasting impact.
//           </p>

//           {/* Feature Pills */}
//           <div className="why-premium__features">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="why-premium__feature-pill"
//                 style={{ animationDelay: `${0.3 + index * 0.1}s` }}
//               >
//                 <div className="why-premium__feature-pill-icon">
//                   {feature.icon}
//                 </div>
//                 <span>{feature.text}</span>
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <button className="why-premium__cta">
//             <span>Explore Programs</span>
//             <div className="why-premium__cta-arrow">
//               <ArrowRight size={18} />
//             </div>
//             <div className="why-premium__cta-glow" />
//           </button>
//         </div>

//         {/* Stats Orbs Side */}
//         <div className={`why-premium__stats ${isVisible ? "visible" : ""}`}>
//           {/* Central connecting ring */}
//           {/* <div className="why-premium__stats-ring">
//             <svg viewBox="0 0 200 200" className="why-premium__stats-ring-svg">
//               <circle
//                 cx="100"
//                 cy="100"
//                 r="85"
//                 className="why-premium__stats-ring-track"
//               />
//               <circle
//                 cx="100"
//                 cy="100"
//                 r="85"
//                 className="why-premium__stats-ring-progress"
//                 style={{
//                   strokeDashoffset: isVisible ? 0 : 534,
//                 }}
//               />
//             </svg>
//             <div className="why-premium__stats-ring-core">
//               <GraduationCap size={28} />
//             </div>
//           </div> */}

//           {/* Stat Orbs */}
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               ref={(el) => (orbRefs.current[index] = el)}
//               className={`why-premium__stat-orb why-premium__stat-orb--${index + 1} ${
//                 activeStat === index ? "active" : ""
//               }`}
//               onMouseMove={(e) => handleOrbMouseMove(e, index)}
//               onMouseLeave={() => handleOrbMouseLeave(index)}
//               style={{ transitionDelay: `${stat.delay}s` }}
//             >
//               {/* Orb glow */}
//               <div
//                 className="why-premium__stat-orb-glow"
//                 style={{ background: stat.gradient }}
//               />

//               {/* Orb body */}
//               <div className="why-premium__stat-orb-body">
//                 <div
//                   className="why-premium__stat-orb-icon"
//                   style={{ color: stat.color }}
//                 >
//                   {stat.icon}
//                 </div>
//                 <div className="why-premium__stat-orb-value">
//                   <span className="why-premium__stat-orb-number">
//                     {stat.value}
//                   </span>
//                 </div>
//                 <div className="why-premium__stat-orb-label">
//                   {stat.label}
//                 </div>

//                 {/* Expanded info */}
//                 <div className="why-premium__stat-orb-expanded">
//                   <p>{stat.description}</p>
//                   <span className="why-premium__stat-orb-expanded-link">
//                     Learn more <ChevronRight size={14} />
//                   </span>
//                 </div>
//               </div>

//               {/* Orbit ring */}
//               <div
//                 className="why-premium__stat-orb-ring"
//                 style={{ borderColor: stat.color }}
//               />
//             </div>
//           ))}

//           {/* Connecting lines */}
//           <svg className="why-premium__connectors" viewBox="0 0 500 500">
//             <line
//               x1="250" y1="250" x2="130" y2="120"
//               className="why-premium__connector-line"
//               style={{ stroke: stats[0].color }}
//             />
//             <line
//               x1="250" y1="250" x2="380" y2="140"
//               className="why-premium__connector-line"
//               style={{ stroke: stats[1].color }}
//             />
//             <line
//               x1="250" y1="250" x2="250" y2="400"
//               className="why-premium__connector-line"
//               style={{ stroke: stats[2].color }}
//             />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseETA;




import "./WhyChooseETA.css";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  ArrowRight,
  Users,
  Zap,
  Star,
  Globe,
  Sparkles,
  GraduationCap,
  Trophy,
  Mic,
  MessageCircle,
  BookOpen,
  Languages,
} from "lucide-react";
import whyBg from "../../assets/w1.jpg";
import confidencImg from "../../assets/confidence.jpg";
import partImg from "../../assets/partner.jpg";
import trainingImg from "../../assets/training.jpg";
import globalImg from "../../assets/about/global Languages.webp";

const WhyChooseETA = () => {
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeStat, setActiveStat] = useState(null);
  const cardRefs = useRef([]);
  const parallaxRef = useRef(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking
  const handleMouseMove = useCallback((e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });

    if (parallaxRef.current) {
      const moveX = (x - 50) * 0.015;
      const moveY = (y - 50) * 0.015;
      parallaxRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    }
  }, []);

  // Magnetic card effect
  const handleCardMouseMove = (e, index) => {
    if (!cardRefs.current[index]) return;
    const card = cardRefs.current[index];
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    card.style.transform = `translate(${x * 8}px, ${y * 8}px) scale(1.03)`;
    card.style.setProperty("--card-x", `${(x + 1) * 50}%`);
    card.style.setProperty("--card-y", `${(y + 1) * 50}%`);
    setActiveStat(index);
  };

  const handleCardMouseLeave = (index) => {
    if (!cardRefs.current[index]) return;
    const card = cardRefs.current[index];
    card.style.transform = "translate(0px, 0px) scale(1)";
    card.style.setProperty("--card-x", "50%");
    card.style.setProperty("--card-y", "50%");
    setActiveStat(null);
  };

  const stats = [
    {
      value: "10K+",
      label: "Confident Speakers",
       icon: (
      <img
        src={confidencImg}
        alt="Confident Speakers"
        className="stat-icon-img"
      />
    ),
      description: "Voices empowered through communication mastery",
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #2563eb, #06b6d4)",
      bgGlow: "rgba(37, 99, 235, 0.15)",
      delay: 0,
    },
    {
      value: "100+",
      label: "Training Programs",
       icon: (
      <img
        src={trainingImgImg}
        alt="Confident Speakers"
        className="stat-icon-img"
      />
    ),
      description: "Comprehensive curricula for transformative learning",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
      bgGlow: "rgba(124, 58, 237, 0.15)",
      delay: 0.1,
    },
    {
      value: "50+",
      label: "Partner Institutes",
       icon: (
      <img
        src={confidencImg}
        alt="Confident Speakers"
        className="stat-icon-img"
      />
    ),
      description: "Trusted by leading educational organizations worldwide",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #059669, #34d399)",
      bgGlow: "rgba(5, 150, 105, 0.15)",
      delay: 0.2,
    },
    {
      value: "7+",
      label: "Global Languages",
      icon: (
      <img
        src={confidencImg}
        alt="Confident Speakers"
        className="stat-icon-img"
      />
    ),
      description: "Multilingual training for international communication",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #d97706, #fbbf24)",
      bgGlow: "rgba(217, 119, 6, 0.15)",
      delay: 0.3,
    },
  ];

  const features = [
    { icon: <Mic size={16} />, text: "Voice & Speech Training" },
    { icon: <MessageCircle size={16} />, text: "Communication Mastery" },
    { icon: <Globe size={16} />, text: "Language Excellence" },
  ];

  return (
    <section
      ref={sectionRef}
      className="why-premium"
      onMouseMove={handleMouseMove}
    >
      {/* Background Parallax Layer */}
      <div className="why-premium__bg">
        <div
          ref={parallaxRef}
          className="why-premium__bg-image"
          style={{ backgroundImage: `url(${whyBg})` }}
        />
        <div className="why-premium__bg-overlay" />
        <div className="why-premium__bg-noise" />
        <div className="why-premium__bg-vignette" />
      </div>

      {/* Voice Wave Patterns */}
      <div className="why-premium__voice-waves">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`why-premium__voice-wave why-premium__voice-wave--${i + 1}`}
            style={{
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + i * 0.8}s`,
              opacity: 0.03 + i * 0.005,
            }}
          />
        ))}
      </div>

      {/* Floating Speech Elements */}
      <div className="why-premium__speech-elements">
        <div className="why-premium__speech-bubble why-premium__speech-bubble--1">
          <span>Hello</span>
        </div>
        <div className="why-premium__speech-bubble why-premium__speech-bubble--2">
          <span>Bonjour</span>
        </div>
        <div className="why-premium__speech-bubble why-premium__speech-bubble--3">
          <span>Hola</span>
        </div>
        <div className="why-premium__speech-bubble why-premium__speech-bubble--4">
          <span>Namaste</span>
        </div>
        <div className="why-premium__speech-bubble why-premium__speech-bubble--5">
          <span>Konnichiwa</span>
        </div>
        <div className="why-premium__speech-bubble why-premium__speech-bubble--6">
          <span>Ciao</span>
        </div>
      </div>

      {/* Dynamic Light System */}
      <div className="why-premium__lights">
        <div
          className="why-premium__light-orb why-premium__light-orb--primary"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
          }}
        />
        <div
          className="why-premium__light-orb why-premium__light-orb--secondary"
          style={{
            left: `${100 - mousePosition.x}%`,
            top: `${100 - mousePosition.y}%`,
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="why-premium__particles">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`why-premium__particle why-premium__particle--${(i % 3) + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${5 + Math.random() * 7}s`,
            }}
          />
        ))}
      </div>

      <div className="why-premium__container">
        {/* Content Side */}
        <div className={`why-premium__content ${isVisible ? "visible" : ""}`}>
          {/* Badge */}
          <div className="why-premium__badge">
            <Sparkles size={14} className="why-premium__badge-icon" />
            <span>Why Choose ETA</span>
          </div>

          {/* Headline */}
          <h2 className="why-premium__headline">
            Find your
            <span className="why-premium__headline-accent"> voice</span>
            <br />
            speak with
            <span className="why-premium__headline-accent"> confidence</span>
          </h2>

          {/* Description */}
          <p className="why-premium__description">
            Endless Transformation Academy empowers students, professionals
            and institutions through communication mastery, leadership
            development, and multilingual learning experiences that create
            lasting impact.
          </p>

          {/* Feature Pills - Communication themed */}
          <div className="why-premium__features">
            {features.map((feature, index) => (
              <div
                key={index}
                className="why-premium__feature-pill"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="why-premium__feature-pill-icon">
                  {feature.icon}
                </div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="why-premium__cta">
            <span>Start Your Journey</span>
            <div className="why-premium__cta-arrow">
              <ArrowRight size={18} />
            </div>
            <div className="why-premium__cta-glow" />
          </button>
        </div>

        {/* Stats Grid Side */}
        <div className={`why-premium__stats ${isVisible ? "visible" : ""}`}>
          {/* Voice Frequency Visualizer */}
          <div className="why-premium__voice-visualizer">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="why-premium__frequency-bar"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  animationDuration: `${0.6 + Math.random() * 0.8}s`,
                  height: `${30 + Math.random() * 70}%`,
                }}
              />
            ))}
          </div>

          {/* Stats Grid */}
          <div className="why-premium__stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`why-premium__stat-card ${activeStat === index ? "active" : ""}`}
                onMouseMove={(e) => handleCardMouseMove(e, index)}
                onMouseLeave={() => handleCardMouseLeave(index)}
                style={{
                  transitionDelay: `${stat.delay}s`,
                  "--stat-color": stat.color,
                  "--stat-gradient": stat.gradient,
                  "--stat-bg-glow": stat.bgGlow,
                }}
              >
                {/* Card Glow */}
                <div className="why-premium__stat-card-glow" />

                {/* Card Shine */}
                <div className="why-premium__stat-card-shine" />

                {/* Card Border */}
                <div className="why-premium__stat-card-border" />

                {/* Sound wave decoration */}
                <div className="why-premium__stat-card-wave">
                  <svg viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path
                      d="M0,10 Q10,0 20,10 Q30,20 40,10 Q50,0 60,10 Q70,20 80,10 Q90,0 100,10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      opacity="0.3"
                    />
                  </svg>
                </div>

                {/* Card Content */}
                <div className="why-premium__stat-card-content">
                  {/* Icon */}
                  <div className="why-premium__stat-card-icon">
                    <div className="why-premium__stat-card-icon-glow" />
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <div className="why-premium__stat-card-value">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="why-premium__stat-card-label">
                    {stat.label}
                  </div>

                  {/* Expanded Description */}
                  <div className="why-premium__stat-card-expanded">
                    <p>{stat.description}</p>
                  </div>
                </div>

                {/* Corner quotation marks */}
                <span className="why-premium__stat-card-quote why-premium__stat-card-quote--tl">"</span>
                <span className="why-premium__stat-card-quote why-premium__stat-card-quote--br">"</span>
              </div>
            ))}
          </div>

          {/* Translation Flow Line */}
          <div className="why-premium__translation-flow">
            <div className="why-premium__translation-dot why-premium__translation-dot--1" />
            <div className="why-premium__translation-line" />
            <div className="why-premium__translation-dot why-premium__translation-dot--2" />
            <div className="why-premium__translation-line why-premium__translation-line--2" />
            <div className="why-premium__translation-dot why-premium__translation-dot--3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseETA;