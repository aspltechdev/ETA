import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./SuccessStoriesSection.css";

import impact1 from "../../assets/hero/h1.jpg";
import impact2 from "../../assets/hero/h2.jpg";
import impact3 from "../../assets/hero/h3.jpg";

const testimonials = [
  {
    image: impact1,

    quote:
      "ETA transformed my confidence and communication skills, helping me become a better leader.",

    name: "Aarav Kumar",

    role: "Student",
  },

  {
    image: impact2,

    quote:
      "The leadership program helped me take initiative and confidently present my ideas.",

    name: "Priya Sharma",

    role: "Student Leader",
  },

  {
    image: impact3,

    quote:
      "ETA programs significantly improved student engagement and participation across our institution.",

    name: "St. John's School",

    role: "Institution Partner",
  },
];

const SuccessStoriesSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(
        (prev) =>
          (prev + 1) %
          testimonials.length
      );
    }, 5000);

    return () =>
      clearInterval(timer);
  }, []);

  return (
    <section className="impact-section">

      <AnimatePresence mode="wait">

        <motion.img
          key={active}
          src={
            testimonials[active]
              .image
          }
          alt=""
          className="impact-bg"
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
        />

      </AnimatePresence>

      <div className="impact-overlay"></div>

      <div className="container impact-wrapper">

        <motion.div
          className="impact-content"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          <span className="impact-tag">
            Success Stories & Impact
          </span>

          <h2>
            Real Growth.
            <span>
              Real Transformation.
            </span>
          </h2>

          <div className="quote-mark">
            "
          </div>

          <p className="impact-quote">

            {
              testimonials[active]
                .quote
            }

          </p>

          <div className="impact-author">

            <h4>
              {
                testimonials[active]
                  .name
              }
            </h4>

            <span>
              {
                testimonials[active]
                  .role
              }
            </span>

          </div>

        </motion.div>

        <motion.div
          className="impact-stats"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
        >

          <div className="stat">
            <h3>10K+</h3>
            <span>
              Students
            </span>
          </div>

          <div className="stat">
            <h3>50+</h3>
            <span>
              Schools
            </span>
          </div>

          <div className="stat">
            <h3>100+</h3>
            <span>
              Programs
            </span>
          </div>

          <div className="stat">
            <h3>95%</h3>
            <span>
              Success Rate
            </span>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default SuccessStoriesSection;