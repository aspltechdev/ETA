.eta-program__card {
  position: relative;
  background: white;

  border-radius: 24px;
  padding: 32px 26px;

  border: 1px solid rgba(0, 0, 0, .05);

  overflow: hidden;
  isolation: isolate;

  transition: .4s ease;
}

.eta-program__card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, .08);
}

.eta-program__card-bg {
  position: absolute;
  inset: 0;
  z-index: 0;

  background-size: cover;
  background-position: center;

  opacity: 0.14;
  transform: scale(1.05);

  transition: .5s ease;
}

.eta-program__card:hover .eta-program__card-bg {
  opacity: 0.22;
  transform: scale(1.1);
}

.eta-program__card-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(255, 255, 255, 0.96) 100%
  );
}

.eta-program__card-content {
  position: relative;
  z-index: 2;
}