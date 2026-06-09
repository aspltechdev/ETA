// // AboutSection.jsx
// import "./AboutSection.css";
// import { useEffect, useRef, useState, useCallback } from "react";
// import about1 from "../../assets/about/about1.jpg";
// import about2 from "../../assets/about/about2.jpg";
// import {
//   GraduationCap,
//   Globe,
//   Users,
//   Trophy,
// } from "lucide-react";

// const AboutSection = () => {
//   const sectionRef = useRef(null);
//   const [observedElements, setObservedElements] = useState(new Set());
//   const [animationReady, setAnimationReady] = useState(false);
//   const capabilityRefs = useRef([]);

//   // Counter animation for metrics
//   const counterRefs = useRef([]);
//   const [counters, setCounters] = useState({});

//   // Intersection Observer setup
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const revealId = entry.target.getAttribute("data-xb-reveal");
//             if (revealId) {
//               setObservedElements((prev) => {
//                 const next = new Set(prev);
//                 next.add(revealId);
//                 return next;
//               });
//             }
            
//             // Trigger counter animations
//             const counterId = entry.target.getAttribute("data-xb-counter");
//             if (counterId && !counters[counterId]) {
//               animateCounter(counterId);
//             }
//           }
//         });
//       },
//       {
//         threshold: 0.15,
//         rootMargin: "0px 0px -40px 0px",
//       }
//     );

//     // Observe all elements with data-xb-reveal
//     const revealElements = sectionRef.current?.querySelectorAll("[data-xb-reveal]");
//     revealElements?.forEach((el) => observer.observe(el));

//     // Observe counter elements
//     const counterElements = sectionRef.current?.querySelectorAll("[data-xb-counter]");
//     counterElements?.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, [counters]);

//   // Counter animation function
//   const animateCounter = useCallback((counterId) => {
//     const [target, suffix] = counterId.split("-");
//     const targetNum = parseInt(target);
//     const duration = 2000;
//     const steps = 60;
//     const increment = targetNum / steps;
//     let current = 0;
//     let step = 0;

//     const timer = setInterval(() => {
//       step++;
//       current = Math.min(increment * step, targetNum);
      
//       setCounters((prev) => ({
//         ...prev,
//         [counterId]: Math.floor(current),
//       }));

//       if (step >= steps) {
//         clearInterval(timer);
//         setCounters((prev) => ({
//           ...prev,
//           [counterId]: targetNum,
//         }));
//       }
//     }, duration / steps);

//     return () => clearInterval(timer);
//   }, []);

//   // Mouse tracking for capability cards
//   const handleCapabilityMouseMove = useCallback((e, index) => {
//     if (!capabilityRefs.current[index]) return;
    
//     const rect = capabilityRefs.current[index].getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;
    
//     capabilityRefs.current[index].style.setProperty("--xb-mouse-x", `${x}%`);
//     capabilityRefs.current[index].style.setProperty("--xb-mouse-y", `${y}%`);
//   }, []);

//   // Parallax effect for floating accent image
//   useEffect(() => {
//     let rafId;
    
//     const handleParallax = () => {
//       if (!sectionRef.current) return;
      
//       const rect = sectionRef.current.getBoundingClientRect();
//       const viewportHeight = window.innerHeight;
//       const scrollProgress = Math.max(0, Math.min(1, 
//         (viewportHeight - rect.top) / (viewportHeight + rect.height)
//       ));
      
//       const accentImage = sectionRef.current.querySelector(".xb-about__media-accent");
//       if (accentImage) {
//         const translateY = scrollProgress * -40;
//         accentImage.style.transform = `translateY(${translateY}px) rotate(${scrollProgress * 2}deg)`;
//       }
      
//       rafId = requestAnimationFrame(handleParallax);
//     };

//     rafId = requestAnimationFrame(handleParallax);
    
//     return () => {
//       if (rafId) cancelAnimationFrame(rafId);
//     };
//   }, []);

//   // Trigger initial animations
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setAnimationReady(true);
//     }, 100);
    
//     return () => clearTimeout(timer);
//   }, []);

//   const isRevealed = (id) => observedElements.has(id);

//   const capabilityItems = [
//     {
//       icon: <Users />,
//       title: "Confident Communicators",
//       description: "Communication mastery, public speaking and articulation.",
//     },
//     {
//       icon: <GraduationCap />,
//       title: "Future Ready Leaders",
//       description: "Leadership development and confidence building programs.",
//     },
//     {
//       icon: <Trophy />,
//       title: "Measurable Impact",
//       description: "Practical learning with transformational outcomes.",
//     },
//     {
//       icon: <Globe />,
//       title: "Global Language Learning",
//       description: "International language training and communication.",
//     },
//   ];

//   return (
//     <section className="xb-about" ref={sectionRef}>
//       {/* Ambient atmosphere */}
//       <div className="xb-about__atmosphere">
//         <div className="xb-about__atmosphere-glow xb-about__atmosphere-glow--primary" />
//         <div className="xb-about__atmosphere-glow xb-about__atmosphere-glow--secondary" />
//         <div className="xb-about__atmosphere-glow xb-about__atmosphere-glow--accent" />
//       </div>

     

//       <div className="xb-about__container">
//         {/* Headline Block */}
//         <div className="xb-about__headline">
//           <div 
//             className={`xb-about__headline-badge ${animationReady ? "is-visible" : ""}`}
//             data-xb-reveal="badge"
//           >
//             <span className="xb-about__headline-badge-dot" />
//             <span className="xb-about__headline-badge-text">
//               About Endless Transformation Academy
//             </span>
//           </div>
//         </div>

//         {/* Showcase Grid */}
//         <div className="xb-about__showcase">
//           {/* Narrative Column */}
//           <div 
//             className={`xb-about__narrative ${isRevealed("narrative") ? "is-revealed" : ""}`}
//             data-xb-reveal="narrative"
//           >
//             <div className="xb-about__narrative-eyebrow">
//               <span className="xb-about__narrative-eyebrow-line" />
//               A Transformation Focused Learning Organization
//             </div>

//             <h3 className="xb-about__narrative-heading">
//               Building Confident Communicators, Future-Ready Leaders & 
//               Measurable Impact
//             </h3>

//             <p className="xb-about__narrative-text">
//               Endless Transformation Academy empowers students, educators, 
//               institutions and professionals through experiential learning, 
//               communication mastery, leadership development and behavioral 
//               transformation programs.
//             </p>

//             <p className="xb-about__narrative-text">
//               Our learning ecosystems are designed to bridge the gap between 
//               academic excellence and real-world readiness, creating lasting 
//               transformation in individuals and institutions.
//             </p>

//             {/* Metrics Strip */}
//             <div className="xb-about__metrics">
//               <div 
//                 className="xb-about__metric-item"
//                 data-xb-counter="1000-learners"
//               >
//                 <div className="xb-about__metric-value">
//                   <span className="xb-about__metric-value--counter">
//                     {counters["1000-learners"] || 0}
//                   </span>
//                   +
//                 </div>
//                 <div className="xb-about__metric-label">Learners Impacted</div>
//               </div>

//               <div 
//                 className="xb-about__metric-item"
//                 data-xb-counter="6-programs"
//               >
//                 <div className="xb-about__metric-value">
//                   <span className="xb-about__metric-value--counter">
//                     {counters["6-programs"] || 0}
//                   </span>
//                   +
//                 </div>
//                 <div className="xb-about__metric-label">Core Programs</div>
//               </div>

//               <div 
//                 className="xb-about__metric-item"
//                 data-xb-counter="7-languages"
//               >
//                 <div className="xb-about__metric-value">
//                   <span className="xb-about__metric-value--counter">
//                     {counters["7-languages"] || 0}
//                   </span>
//                   +
//                 </div>
//                 <div className="xb-about__metric-label">Global Languages</div>
//               </div>
//             </div>
//           </div>

//           {/* Media Composition */}
//           <div 
//             className={`xb-about__showcase-media ${isRevealed("media") ? "is-revealed" : ""}`}
//             data-xb-reveal="media"
//           >
//             <div className="xb-about__media-frame">
//               <div className="xb-about__media-frame-glow" />
//               <img
//                 src={about1}
//                 alt="ETA Learning Experience"
//                 className="xb-about__media-frame-image"
//                 loading="lazy"
//               />
//             </div>
//             <img
//               src={about2}
//               alt="ETA Workshop"
//               className="xb-about__media-accent"
//               loading="lazy"
//             />
//           </div>
//         </div>

    
//       </div>
//     </section>
//   );
// };

// export default AboutSection;




import "./AboutSection.css";
import { useEffect, useRef, useState, useCallback } from "react";
import about1 from "../../assets/about/about1.jpg";
import about2 from "../../assets/about/about2.jpg";
import {
  GraduationCap,
  Globe,
  Users,
  Trophy,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [observedElements, setObservedElements] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardStackRef = useRef([]);
  const counterRingRefs = useRef([]);
  const [counters, setCounters] = useState({});

  // Mouse tracking for ambient light
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const revealId = entry.target.getAttribute("data-reveal-id");
            if (revealId) {
              setObservedElements((prev) => {
                const next = new Set(prev);
                next.add(revealId);
                return next;
              });
            }

            const counterId = entry.target.getAttribute("data-counter-id");
            if (counterId && !counters[counterId]) {
              animateCounter(counterId);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const revealElements = sectionRef.current?.querySelectorAll("[data-reveal-id]");
    revealElements?.forEach((el) => observer.observe(el));

    const counterElements = sectionRef.current?.querySelectorAll("[data-counter-id]");
    counterElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [counters]);

  // Counter animation
  const animateCounter = useCallback((counterId) => {
    const [target] = counterId.split("-");
    const targetNum = parseInt(target);
    const duration = 2400;
    const steps = 80;
    const increment = targetNum / steps;
    let current = 0;
    let step = 0;

    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const timer = setInterval(() => {
      step++;
      const progress = easeOutExpo(step / steps);
      current = targetNum * progress;

      setCounters((prev) => ({
        ...prev,
        [counterId]: Math.floor(current),
      }));

      if (step >= steps) {
        clearInterval(timer);
        setCounters((prev) => ({
          ...prev,
          [counterId]: targetNum,
        }));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  // 3D tilt effect for card stack
  const handleCardMouseMove = (e, index) => {
    if (!cardStackRef.current[index]) return;
    const card = cardStackRef.current[index];
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    card.style.transform = `
      perspective(1000px) 
      rotateY(${x * 8}deg) 
      rotateX(${-y * 8}deg) 
      translateZ(20px)
      scale(1.02)
    `;
    card.style.setProperty("--card-x", `${(x + 1) * 50}%`);
    card.style.setProperty("--card-y", `${(y + 1) * 50}%`);
  };

  const handleCardMouseLeave = (index) => {
    if (!cardStackRef.current[index]) return;
    const card = cardStackRef.current[index];
    card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0) scale(1)";
    card.style.setProperty("--card-x", "50%");
    card.style.setProperty("--card-y", "50%");
  };

  const isRevealed = (id) => observedElements.has(id);

  const capabilityItems = [
    {
      icon: <Users size={20} />,
      title: "Confident Communicators",
      description: "Master the art of articulation, public speaking, and influential communication.",
      gradient: "from-blue-600 to-cyan-500",
      delay: 0,
    },
    {
      icon: <GraduationCap size={20} />,
      title: "Future Ready Leaders",
      description: "Build leadership acumen, strategic thinking, and unshakeable confidence.",
      gradient: "from-indigo-600 to-blue-500",
      delay: 0.1,
    },
    {
      icon: <Trophy size={20} />,
      title: "Measurable Impact",
      description: "Experience practical learning with tangible, transformational outcomes.",
      gradient: "from-violet-600 to-indigo-500",
      delay: 0.2,
    },
    {
      icon: <Globe size={20} />,
      title: "Global Language Learning",
      description: "Unlock international opportunities through comprehensive language mastery.",
      gradient: "from-sky-600 to-blue-500",
      delay: 0.3,
    },
  ];

  return (
    <section className="ab-premium" ref={sectionRef}>
      {/* Dynamic Light Rays */}
      <div className="ab-light-system">
        <div
          className="ab-light-orb ab-light-orb--primary"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
          }}
        />
        <div className="ab-light-ray ab-light-ray--1" />
        <div className="ab-light-ray ab-light-ray--2" />
        <div className="ab-light-ray ab-light-ray--3" />
        <div className="ab-light-grid" />
        <div className="ab-light-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="ab-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="ab-container">
        {/* Hero Header */}
        <div className="ab-header">
          <div
            className={`ab-header-badge ${isRevealed("header-badge") ? "revealed" : ""}`}
            data-reveal-id="header-badge"
          >
            <Sparkles size={14} className="ab-badge-sparkle" />
            <span>About the Academy</span>
            <div className="ab-badge-glow" />
          </div>

          <div
            className={`ab-header-content ${isRevealed("header-content") ? "revealed" : ""}`}
            data-reveal-id="header-content"
          >
            <h2 className="ab-header-title">
              We don't just teach.
              <br />
              <span className="ab-header-title--accent">We transform.</span>
            </h2>
            <p className="ab-header-subtitle">
              A transformation-focused learning organization bridging the gap
              between potential and real-world excellence.
            </p>
          </div>
        </div>

        {/* Split Layout: Cards + Content */}
        <div className="ab-split">
          {/* Left: 3D Card Stack */}
          <div
            className={`ab-card-stack ${isRevealed("card-stack") ? "revealed" : ""}`}
            data-reveal-id="card-stack"
          >
            <div className="ab-card-stack__container">
              {/* Image wrapper keeps float card scoped to image area */}
              <div className="ab-card-images">
                {/* Main Card */}
                <div
                  className="ab-card ab-card--main"
                  ref={(el) => (cardStackRef.current[0] = el)}
                  onMouseMove={(e) => handleCardMouseMove(e, 0)}
                  onMouseLeave={() => handleCardMouseLeave(0)}
                >
                  <div className="ab-card__shine" />
                  <img src={about1} alt="Learning Experience" className="ab-card__image" />
                  <div className="ab-card__overlay">
                    <span className="ab-card__tag">Experiential Learning</span>
                    <span className="ab-card__arrow">→</span>
                  </div>
                  <div className="ab-card__border-glow" />
                </div>

                {/* Floating Secondary Card */}
                <div
                  className="ab-card ab-card--float"
                  ref={(el) => (cardStackRef.current[1] = el)}
                  onMouseMove={(e) => handleCardMouseMove(e, 1)}
                  onMouseLeave={() => handleCardMouseLeave(1)}
                >
                  <div className="ab-card__shine" />
                  <img src={about2} alt="Workshop" className="ab-card__image" />
                  <div className="ab-card__overlay">
                    <span className="ab-card__tag">Workshop Excellence</span>
                  </div>
                </div>
              </div>

              {/* Counter Rings */}
              <div className="ab-counter-rings">
                <div
                  className="ab-counter-ring"
                  data-counter-id="10-learners"
                  ref={(el) => (counterRingRefs.current[0] = el)}
                >
                  <svg viewBox="0 0 100 100" className="ab-counter-ring__svg">
                    <circle
                      cx="50" cy="50" r="42"
                      className="ab-counter-ring__track"
                    />
                    <circle
                      cx="50" cy="50" r="42"
                      className="ab-counter-ring__progress"
                      style={{
                        strokeDashoffset: 0,
                      }}
                    />
                  </svg>
                  <div className="ab-counter-ring__content">
                    <span className="ab-counter-ring__value">
                      10K+
                    </span>
                    <span className="ab-counter-ring__label">Learners</span>
                  </div>
                </div>

                <div
                  className="ab-counter-ring"
                  data-counter-id="200-programs"
                  ref={(el) => (counterRingRefs.current[1] = el)}
                >
                  <svg viewBox="0 0 100 100" className="ab-counter-ring__svg">
                    <circle
                      cx="50" cy="50" r="42"
                      className="ab-counter-ring__track"
                    />
                    <circle
                      cx="50" cy="50" r="42"
                      className="ab-counter-ring__progress"
                      style={{
                        strokeDashoffset: 0,
                      }}
                    />
                  </svg>
                  <div className="ab-counter-ring__content">
                    <span className="ab-counter-ring__value">
                      200+
                    </span>
                    <span className="ab-counter-ring__label">Programs</span>
                  </div>
                </div>

                <div
                  className="ab-counter-ring"
                  data-counter-id="7-languages"
                  ref={(el) => (counterRingRefs.current[2] = el)}
                >
                  <svg viewBox="0 0 100 100" className="ab-counter-ring__svg">
                    <circle
                      cx="50" cy="50" r="42"
                      className="ab-counter-ring__track"
                    />
                    <circle
                      cx="50" cy="50" r="42"
                      className="ab-counter-ring__progress"
                      style={{
                        strokeDashoffset: 264 - (264 * (counters["7-languages"] || 0)) / 7,
                      }}
                    />
                  </svg>
                  <div className="ab-counter-ring__content">
                    <span className="ab-counter-ring__value">
                      {counters["7-languages"] || 0}+
                    </span>
                    <span className="ab-counter-ring__label">Languages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content & Capabilities */}
          <div className="ab-content">
            <div
              className={`ab-content__text ${isRevealed("content-text") ? "revealed" : ""}`}
              data-reveal-id="content-text"
            >
              <p className="ab-content__paragraph">
                Endless Transformation Academy empowers students, educators,
                institutions and professionals through experiential learning,
                communication mastery, and behavioral transformation programs.
              </p>
              <p className="ab-content__paragraph ab-content__paragraph--secondary">
                Our learning ecosystems bridge the gap between academic
                excellence and real-world readiness, creating lasting
                transformation in individuals and institutions worldwide.
              </p>
            </div>

            {/* Capability Cards */}
            <div className="ab-capabilities">
              {capabilityItems.map((item, index) => (
                <div
                  key={index}
                  className={`ab-capability ${isRevealed(`cap-${index}`) ? "revealed" : ""}`}
                  data-reveal-id={`cap-${index}`}
                  style={{ transitionDelay: `${item.delay}s` }}
                >
                  <div className="ab-capability__icon">
                    <div className="ab-capability__icon-glow" />
                    {item.icon}
                  </div>
                  <div className="ab-capability__info">
                    <h4 className="ab-capability__title">{item.title}</h4>
                    <p className="ab-capability__desc">{item.description}</p>
                  </div>
                  <div className="ab-capability__arrow">
                    <ArrowRight size={14} />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={`ab-cta ${isRevealed("cta") ? "revealed" : ""}`}
              data-reveal-id="cta"
            >
              <a href="#contact" className="ab-cta__button">
                <span>Talk To Us</span>
                <div className="ab-cta__button-icon">
                  <ArrowRight size={16} />
                </div>
              </a>
              <div className="ab-cta__glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;