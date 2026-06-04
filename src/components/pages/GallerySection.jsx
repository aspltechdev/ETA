// import "./GallerySection.css";
// import {
//   Camera,
//   PlayCircle,
// } from "lucide-react";

// const galleryItems = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
//     title: "Leadership Workshop",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
//     title: "Communication Program",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&q=80",
//     title: "Language Academy",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
//     title: "Student Activity",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
//     title: "Public Speaking Session",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
//     title: "Institution Program",
//   },
// ];

// const GallerySection = () => {
//   return (
//     <section className="gallery-section">

//       <div className="gallery-glow"></div>

//       <div className="container">

//         <div className="gallery-header">

//           <span className="section-tag">
//             Gallery & Events
//           </span>

//           <h2>
//             Moments That Inspire
//             Transformation
//           </h2>

//           <p>
//             Explore workshops, leadership
//             activities, language programs and
//             transformational learning experiences
//             happening across ETA.
//           </p>

//         </div>

//         <div className="gallery-grid">

//           {galleryItems.map((item, index) => (
//             <div
//               className="gallery-card"
//               key={index}
//             >

//               <img
//                 src={item.image}
//                 alt={item.title}
//               />

//               <div className="gallery-overlay">

//                 <Camera size={22} />

//                 <h4>
//                   {item.title}
//                 </h4>

//               </div>

//             </div>
//           ))}

//         </div>


     

//       </div>

//     </section>
//   );
// };

// export default GallerySection;





import "./GallerySection.css";

import {
  Camera,
  PlayCircle,
  ArrowRight,
} from "lucide-react";

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    title: "Leadership Workshop",
    category: "Leadership",
  },

  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    title: "Communication Excellence",
    category: "Soft Skills",
  },

  {
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&q=80",
    title: "Language Academy",
    category: "Languages",
  },

  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
    title: "Student Engagement",
    category: "Schools",
  },
];

const GallerySection = () => {
  return (
    <section className="eta-gallery">

      <div className="eta-gallery__glow"></div>

      <div className="container">

        <div className="eta-gallery__header">

          <span className="eta-gallery__tag">
            Transformation In Action
          </span>

          <h2>
            Every Program Creates
            A Story Worth Sharing
          </h2>

          <p>
            From leadership workshops and
            communication mastery to language
            learning and school transformation,
            explore ETA moments that inspire growth.
          </p>

        </div>

        {/* Featured Card */}

        <div className="eta-gallery__featured">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80"
            alt=""
          />

          <div className="eta-gallery__featured-overlay">

            <span>Featured Event</span>

            <h3>
              Leadership & Personality
              Development Workshop
            </h3>

            <button>
              <PlayCircle size={18} />
              Watch Highlights
            </button>

          </div>

        </div>

        {/* Masonry Grid */}

        <div className="eta-gallery__grid">

          {galleryItems.map((item, index) => (
            <div
              className="eta-gallery__card"
              key={index}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="eta-gallery__card-overlay">

                <span>
                  {item.category}
                </span>

                <h4>
                  {item.title}
                </h4>

                <ArrowRight size={18} />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default GallerySection;