
/* =========================
   SECTION BACKGROUND
========================= */

.program-section {
  width: 100%;
  padding: 90px 20px;
  display: flex;
  justify-content: center;

  background: radial-gradient(
      circle at top left,
      rgba(99, 102, 241, 0.08),
      transparent 40%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(236, 72, 153, 0.06),
      transparent 45%
    ),
    #ffffff;

  position: relative;
  overflow: hidden;
}

/* subtle glow blob */
.program-section::before {
  content: "";
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99,102,241,0.12), transparent 60%);
  top: -150px;
  left: -150px;
  filter: blur(40px);
}

/* =========================
   WRAPPER
========================= */

.program-wrapper {
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 70px;

  position: relative;
  z-index: 1;
}

/* reverse layout */
.program-wrapper.reverse {
  flex-direction: row-reverse;
}

/* =========================
   CONTENT
========================= */

.program-content {
  flex: 1.1;
}

.section-tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;

  background: rgba(99, 102, 241, 0.1);
  color: #4f46e5;

  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 999px;

  margin-bottom: 18px;
}

.program-content h2 {
  font-size: 42px;
  font-weight: 800;
  line-height: 1.2;

  color: #0f172a;

  margin-bottom: 16px;
}

.program-content p {
  font-size: 16px;
  line-height: 1.8;
  color: #64748b;

  margin-bottom: 28px;
  max-width: 520px;
}

/* =========================
   FEATURES
========================= */

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.feature-card {
  padding: 14px 16px;
  border-radius: 14px;

  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.2);

  backdrop-filter: blur(10px);

  font-size: 14px;
  color: #334155;

  transition: all 0.3s ease;

  position: relative;
  overflow: hidden;
}

/* animated hover glow */
.feature-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(99, 102, 241, 0.08),
    transparent
  );
  transform: translateX(-100%);
  transition: 0.5s;
}

.feature-card:hover::before {
  transform: translateX(100%);
}

.feature-card:hover {
  transform: translateY(-6px);
  border-color: rgba(99, 102, 241, 0.4);
  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.15);
}

/* =========================
   IMAGE SECTION
========================= */

.program-image {
  flex: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.program-image img {
  width: 100%;
  max-width: 460px;

  border-radius: 22px;

  object-fit: cover;

  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.12);

  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.program-image img:hover {
  transform: scale(1.05) rotate(0.5deg);
  box-shadow:
    0 40px 80px rgba(0, 0, 0, 0.18);
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {
  .program-wrapper {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }

  .program-wrapper.reverse {
    flex-direction: column;
  }

  .program-content p {
    margin: 0 auto 25px auto;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .program-image img {
    max-width: 100%;
  }
}