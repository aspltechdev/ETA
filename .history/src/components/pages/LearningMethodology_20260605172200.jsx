<section className="eta-banner">
  <div className="container">

    <div className="eta-banner-grid">

      <div className="eta-left">
        ...
      </div>

      <div className="eta-right">

        <div className="slider-card">
          <img
            src={slides[active].image}
            alt={slides[active].title}
          />

          <div className="slide-content">

            <span className="slide-label">
              ETA Transformation Journey
            </span>

            <h3>{slides[active].title}</h3>

            <p>{slides[active].desc}</p>

          </div>
        </div>

      </div>

    </div>

    <div className="eta-stats">
      ...
    </div>

  </div>
</section>