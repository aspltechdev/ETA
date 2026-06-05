import { useState, useEffect } from "react";
import "./GallerySection.css";

import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import gallery5 from "../../assets/gallery5.jpg";
import gallery6 from "../../assets/gallery6.jpg";

const galleryItems = [
  { image: gallery1, title: "Leadership Workshop" },
  { image: gallery2, title: "Communication Excellence" },
  { image: gallery3, title: "Language Academy" },
  { image: gallery4, title: "Student Engagement" },
  { image: gallery5, title: "Public Speaking Session" },
  { image: gallery6, title: "Institution Program" },
];

const GallerySection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % galleryItems.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="etax-gallery">

      <div className="etax-gallery-glow"></div>

      <div className="container">

        <div className="etax-gallery-header">

          <span className="etax-gallery-tag">
            Transformation In Action
          </span>

          <h2>
            Moments Of Growth,
            <br />
            Transformation & Success
          </h2>

          <p>
            A glimpse into leadership workshops,
            communication programs, language learning
            initiatives and transformational experiences.
          </p>

        </div>

        <div className="etax-gallery-slider">

          {galleryItems.map((item, index) => {

            let position = "hidden";

            if (index === active) {
              position = "active";
            } else if (
              index ===
              (active - 1 + galleryItems.length) %
                galleryItems.length
            ) {
              position = "left";
            } else if (
              index ===
              (active + 1) %
                galleryItems.length
            ) {
              position = "right";
            }

            return (
              <div
                key={index}
                className={`etax-gallery-slide ${position}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="etax-gallery-overlay">

                  <span>
                    Featured Experience
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default GallerySection;