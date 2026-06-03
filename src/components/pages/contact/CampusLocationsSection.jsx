import "./CampusLocationsSection.css";

const CampusLocationsSection = () => {
  return (
    <section className="campus-section">

      <div className="container">

        <span className="section-tag">
          Our Location
        </span>

        <h2>
          Visit ETA
        </h2>

        <div className="map-card">

          <iframe
            title="ETA Location"
            src="https://www.google.com/maps/embed?pb="
            allowFullScreen=""
            loading="lazy"
          />

        </div>

      </div>

    </section>
  );
};

export default CampusLocationsSection;