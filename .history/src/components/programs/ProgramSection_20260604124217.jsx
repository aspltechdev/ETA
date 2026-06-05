import { useEffect, useRef } from "react";
import "./ProgramSection.css";

const ProgramSection = ({
  tag,
  title,
  description,
  features,
  image,
  reverse = false,
}) => {
  const imgWrapRef = useRef(null);
  const imgRef = useRef(null);
  const imgZoneRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const ringPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const animRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      ring.style.left = ringPos.current.x + "px";
      ring.style.top = ringPos.current.y + "px";
      rafRef.current = requestAnimationFrame(animRing);
    };

    document.addEventListener("mousemove", onMouseMove);
    rafRef.current = requestAnimationFrame(animRing);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const imgZone = imgZoneRef.current;
    const imgWrap = imgWrapRef.current;
    const img = imgRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;

    const onMove = (e) => {
      const r = imgWrap.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      imgWrap.style.transition = "";
      img.style.transition = "transform 0.1s linear";
      imgWrap.style.transform = `perspective(800px) rotateX(${-dy * 12}deg) rotateY(${dx * 12}deg)`;
      img.style.transform = `scale(1.05) translate(${dx * 10}px, ${dy * 10}px)`;
      dot.style.width = "18px";
      dot.style.height = "18px";
      dot.style.opacity = "0.7";
      ring.style.width = "60px";
      ring.style.height = "60px";
    };

    const onLeave = () => {
      imgWrap.style.transition = "transform 0.6s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease";
      img.style.transition = "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)";
      imgWrap.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
      img.style.transform = "scale(1) translate(0px, 0px)";
      dot.style.width = "10px";
      dot.style.height = "10px";
      dot.style.opacity = "1";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };

    imgZone.addEventListener("mousemove", onMove);
    imgZone.addEventListener("mouseleave", onLeave);
    return () => {
      imgZone.removeEventListener("mousemove", onMove);
      imgZone.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />

      <section className="program-section">
        <div className={`program-wrapper ${reverse ? "reverse" : ""}`}>

          <div className="program-content">
            <span className="section-tag">{tag}</span>
            <h2>{title}</h2>
            <p>{description}</p>

            <div className="feature-grid">
              {features.map((item, index) => (
                <FeatureCard key={index}>{item}</FeatureCard>
              ))}
            </div>
          </div>

          <div className="program-image" ref={imgZoneRef}>
            <div className="img-wrap" ref={imgWrapRef}>
              <div className="scan" />
              <img ref={imgRef} src={image} alt={title} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

const FeatureCard = ({ children }) => {
  const cardRef = useRef(null);
  const svgRectRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const rect = svgRectRef.current;
    if (!card || !rect) return;

    const w = card.offsetWidth;
    const h = card.offsetHeight;
    const perimeter = (w + h) * 2;
    rect.setAttribute("stroke-dasharray", perimeter);
    rect.setAttribute("stroke-dashoffset", perimeter);
    rect.setAttribute("width", w);
    rect.setAttribute("height", h);
  }, []);

  const onMouseMove = (e) => {
    const r = cardRef.current.getBoundingClientRect();
    cardRef.current.style.background = `radial-gradient(circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(37,99,235,0.06) 0%, #fff 60%)`;
  };

  const onMouseLeave = () => {
    cardRef.current.style.background = "#fff";
  };

  return (
    <div
      className="feature-card"
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <svg className="border-draw" viewBox="0 0 100 100" preserveAspectRatio="none">
        <rect ref={svgRectRef} rx="16" />
      </svg>
      {children}
    </div>
  );
};

export default ProgramSection;