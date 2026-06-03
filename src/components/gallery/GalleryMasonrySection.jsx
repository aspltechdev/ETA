import "./GalleryMasonrySection.css";

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    title: "Leadership Workshop",
    category: "Leadership",
    large: true,
  },

  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    title: "Language Academy",
    category: "Languages",
  },

  {
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&q=80",
    title: "Public Speaking",
    category: "Communication",
  },

  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
    title: "School Program",
    category: "Schools",
    large: true,
  },

  {
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
    title: "Student Showcase",
    category: "Events",
  },

  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    title: "Certification Event",
    category: "Certification",
  },

  {
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&q=80",
    title: "Future Readiness",
    category: "Leadership",
  },

  {
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
    title: "Interactive Learning",
    category: "Workshop",
    large: true,
  },
];

const GalleryMasonrySection = () => {
  return (
    <section className="gallery-masonry">

      <div className="container">

        <div className="gallery-header">

          <span className="section-tag">
            Gallery Showcase
          </span>

          <h2>
            Moments That Define
            Transformation
          </h2>

          <p>
            Explore leadership programs,
            communication workshops, language
            certifications and transformational
            learning experiences.
          </p>

        </div>

        <div className="masonry-grid">

          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`gallery-item ${
                item.large ? "large" : ""
              }`}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">

                <span>
                  {item.category}
                </span>

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

export default GalleryMasonrySection;