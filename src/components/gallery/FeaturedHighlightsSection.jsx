import "./FeaturedHighlightsSection.css";

const highlights = [
  {
    title: "Leadership Workshops",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
  },

  {
    title: "Language Certifications",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200",
  },

  {
    title: "Public Speaking Programs",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
  },
];

const FeaturedHighlightsSection = () => {
  return (
    <section className="featured-highlights">

      <div className="container">

        <h2>
          Featured Experiences
        </h2>

        <div className="highlight-grid">

          {highlights.map((item, index) => (
            <div
              className="highlight-card"
              key={index}
            >

              <img
                src={item.image}
                alt=""
              />

              <div className="highlight-overlay">
                <h3>
                  {item.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedHighlightsSection;