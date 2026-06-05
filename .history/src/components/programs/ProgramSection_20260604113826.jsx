import "./ProgramSection.css";

const ProgramSection = ({
  tag,
  title,
  description,
  features,
  image,
  reverse = false,
}) => {
  return (
    <section className="program-section">

      <div
        className={`program-wrapper ${
          reverse ? "reverse" : ""
        }`}
      >

        <div className="program-content">

          <span className="section-tag">
            {tag}
          </span>

          <h2>
            {title}
          </h2>

          <p>
            {description}
          </p>

          <div className="feature-grid">

            {features.map(
              (item, index) => (
                <div
                  key={index}
                  className="feature-card"
                >
                  {item}
                </div>
              )
            )}

          </div>

        </div>

        <div className="program-image">

          <img
            src={image}
            alt={title}
          />

        </div>

      </div>


/* ============================================
   REQUIRED JS SNIPPETS (add to your script)
   ============================================

// 1. Custom magnetic cursor
const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  dot.style.left = mouseX + 'px'; dot.style.top = mouseY + 'px';
  dot.style.opacity = '1'; ring.style.opacity = '1';
});
(function animRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px'; ring.style.top = ringY + 'px';
  requestAnimationFrame(animRing);
})();

// 2. Magnetic 3D tilt on image
const imgWrap = document.querySelector('.img-wrap');
const img = imgWrap.querySelector('img');
document.querySelector('.program-image').addEventListener('mousemove', e => {
  const r = imgWrap.getBoundingClientRect();
  const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
  const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
  imgWrap.style.transform =
    `perspective(800px) rotateX(${-dy * 12}deg) rotateY(${dx * 12}deg)`;
  img.style.transform = `scale(1.05) translate(${dx * 10}px, ${dy * 10}px)`;
  dot.style.width = '18px'; dot.style.height = '18px';
  ring.style.width = '60px'; ring.style.height = '60px';
});
document.querySelector('.program-image').addEventListener('mouseleave', () => {
  imgWrap.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
  img.style.transform = 'scale(1) translate(0,0)';
  dot.style.width = '10px'; dot.style.height = '10px';
  ring.style.width = '36px'; ring.style.height = '36px';
});

// 3. SVG border draw — set dasharray to real perimeter
document.querySelectorAll('.feature-card').forEach(card => {
  const rect = card.querySelector('svg.border-draw rect');
  const w = card.offsetWidth, h = card.offsetHeight;
  const p = (w + h) * 2;
  rect.setAttribute('stroke-dasharray', p);
  rect.setAttribute('stroke-dashoffset', p);
  rect.setAttribute('width', w);
  rect.setAttribute('height', h);
});

// 4. Cursor radial spotlight on feature cards
document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.background =
      `radial-gradient(circle at ${e.clientX - r.left}px ${e.clientY - r.top}px,
        rgba(37,99,235,0.06) 0%, #fff 60%)`;
  });
  card.addEventListener('mouseleave', () => { card.style.background = '#fff'; });
});

  
    </section>
  );
};

export default ProgramSection;