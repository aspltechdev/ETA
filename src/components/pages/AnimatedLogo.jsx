import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";
import "./AnimatedLogo.css";

/**

 *
 * @param {object}  props
 * @param {"full"|"icon"} props.variant  "full" = icon + text, "icon" = icon only
 * @param {number}  props.size           Pixel size of the icon square (default 60)
 */
export default function AnimatedLogo({ variant = "full", size = 60 }) {
  const [isHovered, setIsHovered]   = useState(false);
  const [showParticle, setShowParticle] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // ── Continuous angle for satellite position ──
  const angle = useMotionValue(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const speed = isHovered ? 5: 10;
    const cur   = angle.get();
    const ctrl  = animate(angle, [cur, cur + 360], {
      duration: speed,
      ease: "linear",
      repeat: Infinity,
    });
    return () => ctrl.stop();
  }, [isHovered, shouldReduceMotion]);

  // Start particle 2 seconds after mount (ring draw completes first)
  useEffect(() => {
    const t = setTimeout(() => setShowParticle(true), 2200);
    return () => clearTimeout(t);
  }, []);

  // ── Satellite position on the un-rotated ellipse (viewBox 0-100) ──
  // Orbit half-axes: rx=43.5 ry=15.5 centred at (50,50)
  const radians = useTransform(angle, (a) => (a * Math.PI) / 180);
  const px = useTransform(radians, (r) => 50 + 43.5 * Math.cos(r));
  const py = useTransform(radians, (r) => 50 + 15.5 * Math.sin(r));

  // y < 50 → top half → satellite is behind the planet
  // y ≥ 50 → bottom half → satellite is in front of the planet
  const backOpacity  = useTransform(py, (y) => (y < 50 ? 1 : 0));
  const frontOpacity = useTransform(py, (y) => (y >= 50 ? 1 : 0));

  // SVG is 60px larger than the icon square (30px extension each side)
  const svgSize = size + 60;

  const satelliteRadius = isHovered ? 4.5 : 3.2;

  // Framer variants for the ring draw-on animation
  const ringVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { delay: 0.5, duration: 1.4, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="animated-logo-container"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Endless Transformation Academy"
    >
      {/* ── Icon area ── */}
      <div
        className="animated-logo-globe-wrapper"
        style={{ width: size, height: size }}
      >
        {/* Pulsing glow halo */}
        <motion.div
          className="animated-logo-glow"
          animate={
            isHovered
              ? { opacity: [0.55, 0.9, 0.55], scale: [1, 1.22, 1] }
              : { opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }
          }
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        />

        {/* ── BACK orbit arc (z-index 1, behind the img) ── */}
        <svg
          className="animated-logo-svg animated-logo-svg--back"
          width={svgSize}
          height={svgSize}
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <g transform="rotate(-25 50 50)">
            {/* Back half-arc: left → right via top */}
            <motion.path
              d="M 6.5 50 A 43.5 15.5 0 0 0 93.5 50"
              className="orbit-path"
              variants={ringVariants}
              initial="hidden"
              animate="visible"
              style={{ opacity: 0.55 }}
            />

            {/* Satellite (back half only) */}
            {showParticle && !shouldReduceMotion && (
              <motion.circle
                cx={px}
                cy={py}
                r={satelliteRadius}
                fill="#93c5fd"
                style={{ opacity: backOpacity }}
              />
            )}
          </g>
        </svg>

        {/* ── PLANET: the actual logo image ── */}
        <motion.img
          src="/logo-icon.jpeg"
          alt=""
          className="animated-logo-planet-img"
          animate={shouldReduceMotion ? {} : { y: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
          draggable="false"
        />

        {/* ── FRONT orbit arc (z-index 3, above the img) ── */}
        <svg
          className="animated-logo-svg animated-logo-svg--front"
          width={svgSize}
          height={svgSize}
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <defs>
            <filter id="sat-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g transform="rotate(-25 50 50)">
            {/* Front half-arc: right → left via bottom */}
            <motion.path
              d="M 93.5 50 A 43.5 15.5 0 0 0 6.5 50"
              className="orbit-path"
              variants={ringVariants}
              initial="hidden"
              animate="visible"
            />

            {/* Satellite (front half, with glow) */}
            {showParticle && !shouldReduceMotion && (
              <motion.circle
                cx={px}
                cy={py}
                r={satelliteRadius}
                fill="#3b82f6"
                filter="url(#sat-glow)"
                style={{ opacity: frontOpacity }}
              />
            )}
          </g>
        </svg>
      </div>

      {/* ── Text (only in "full" variant) ── */}
      {variant === "full" && (
        <div className="animated-logo-text-group">
          <h3 className="animated-logo-title">Endless</h3>
          <span className="animated-logo-subtitle">Transformation Academy</span>
        </div>
      )}
    </motion.div>
  );
}
