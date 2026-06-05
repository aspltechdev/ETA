.banner-slider {
  max-width: 860px;
  margin: 0 auto;
  border-radius: 24px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(37, 99, 235, 0.1);
  box-shadow: 0 16px 48px rgba(15, 23, 42, 0.1);
  display: grid;
  grid-template-columns: 340px 1fr;
  height: 280px;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.banner-slider:hover {
  box-shadow: 0 28px 64px rgba(37, 99, 235, 0.16);
}

/* Shine overlay */
.shine {
  position: absolute;
  inset: 0;
  border-radius: 24px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 10;
}

/* ── Image side ── */
.bs-img-side {
  position: relative;
  overflow: hidden;
  height: 280px;
}

.bs-slide-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1.06);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.bs-slide-img.active {
  opacity: 1;
  transform: scale(1);
}

.bs-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, transparent 70%, rgba(255, 255, 255, 0.9));
  z-index: 1;
  pointer-events: none;
}

/* ── Content side ── */
.bs-content-side {
  padding: 32px 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform-style: preserve-3d;
  overflow: hidden;
}

.bs-slide-content {
  position: relative;
  flex: 1;
}

.bs-pane {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  pointer-events: none;
}

.bs-pane.active {
  opacity: 1;
  transform: translateY(0);
  position: relative;
  pointer-events: auto;
}

.bs-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #2563eb;
  background: rgba(37, 99, 235, 0.08);
  padding: 4px 12px;
  border-radius: 50px;
  margin-bottom: 12px;
}

.bs-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.25;
  margin-bottom: 10px;
}

.bs-desc {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.65;
}

/* ── Controls ── */
.bs-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
}

.bs-dots {
  display: flex;
  gap: 7px;
  align-items: center;
}

.bs-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(37, 99, 235, 0.18);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

.bs-dot.active {
  background: #2563eb;
  width: 24px;
  border-radius: 4px;
}

.bs-nav {
  display: flex;
  gap: 8px;
  margin-left: auto;
}

.bs-nav-btn {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1.5px solid rgba(37, 99, 235, 0.2);
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2563eb;
  font-size: 15px;
  transition: all 0.2s ease;
}

.bs-nav-btn:hover {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
  transform: scale(1.08);
}

/* ── Progress bar ── */
.bs-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: #2563eb;
  border-radius: 0 2px 2px 0;
  transition: width 0.1s linear;
  z-index: 5;
}

/* ── Responsive ── */
@media (max-width: 640px) {
  .banner-slider {
    grid-template-columns: 1fr;
    grid-template-rows: 200px 1fr;
    height: auto;
  }

  .bs-img-side {
    height: 200px;
  }

  .bs-img-overlay {
    background: linear-gradient(to bottom, transparent 60%, rgba(255, 255, 255, 0.9));
  }

  .bs-content-side {
    padding: 20px 20px 16px;
  }

  .bs-title {
    font-size: 1.1rem;
  }
}