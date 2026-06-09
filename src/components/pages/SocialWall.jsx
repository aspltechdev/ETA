
// // import "./SocialWall.css";

// // import {
// //   InstagramEmbed,
// // } from "react-social-media-embed";

// // import {
// //   ArrowUpRight,
// // } from "lucide-react";

// // const instagramPosts = [
// //   "https://www.instagram.com/reel/DZSbIToS2dp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
// //   "https://www.instagram.com/p/DY07oXKkn1S/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
// //   "https://www.instagram.com/reel/DXBH5Eby1Dx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
// //   "https://www.instagram.com/reel/DWyJkvmDDPc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
// //   "https://www.instagram.com/p/DYTc6klGcus/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
// // ];

// // export default function SocialWall() {
// //   return (
// //     <section className="social-wall">

// //       <div className="container">

// //         <div className="social-header">

// //           <span className="social-tag">
// //             FOLLOW OUR JOURNEY
// //           </span>

// //           <h2>
// //             Stories, Workshops &
// //             <span>
// //               Student Transformations
// //             </span>
// //           </h2>

// //           <p>
// //             Explore leadership workshops,
// //             communication activities,
// //             student success stories,
// //             language learning experiences
// //             and transformational moments
// //             from Endless Transformation Academy.
// //           </p>

// //         </div>

// //         <div className="social-grid">

// //           {instagramPosts.map(
// //             (url, index) => (
// //               <div
// //                 key={index}
// //                 className="social-card"
// //               >

// //                 <InstagramEmbed
// //                   url={url}
// //                   width="100%"
// //                 />

// //               </div>
// //             )
// //           )}

// //         </div>

// //         <div className="social-footer">

// //           <a
// //             href="https://www.instagram.com/"
// //             target="_blank"
// //             rel="noreferrer"
// //             className="social-btn"
// //           >

// //             View More On Instagram

// //             <ArrowUpRight size={18} />

// //           </a>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }








// import "./SocialWall.css";

// import { InstagramEmbed } from "react-social-media-embed";

// import {
//   ArrowUpRight,
//   Instagram,
// } from "lucide-react";

// const instagramPosts = [
//   "https://www.instagram.com/reel/DZSbIToS2dp/",
//   "https://www.instagram.com/p/DY07oXKkn1S/",
//   "https://www.instagram.com/reel/DXBH5Eby1Dx/",
//   "https://www.instagram.com/reel/DWyJkvmDDPc/",
//   "https://www.instagram.com/p/DYTc6klGcus/",
// ];

// export default function SocialWall() {
//   return (
//     <section className="social-wall">

//       <div className="social-bg-glow"></div>

//       <div className="container">

//         <div className="social-header">

//           <span className="social-tag">
//             FOLLOW OUR JOURNEY
//           </span>

//           <h2>
//             Real Stories.
//             <span> Real Transformations.</span>
//           </h2>

//           <p>
//             Explore workshops, leadership activities,
//             language programs and student transformation
//             moments happening at ETA.
//           </p>

//         </div>

//       </div>

//       <div className="social-marquee">

//         <div className="social-track">

//           {[...instagramPosts, ...instagramPosts].map(
//             (url, index) => (
//               <div
//                 key={index}
//                 className="social-card"
//               >

//                 <div className="card-top">

//                   <Instagram size={18} />

//                   <span>
//                     Endless Transformation Academy
//                   </span>

//                 </div>

//                 <InstagramEmbed
//                   url={url}
//                   width="100%"
//                 />

//               </div>
//             )
//           )}

//         </div>

//       </div>

//       <div className="social-footer">

//         <a
//           href="https://www.instagram.com/endless_transformation_academy/"
//           target="_blank"
//           rel="noreferrer"
//           className="social-btn"
//         >

//           Follow ETA On Instagram

//           <ArrowUpRight size={18} />

//         </a>

//       </div>

//     </section>
//   );
// }





import "./SocialWall.css";

import { InstagramEmbed } from "react-social-media-embed";

import { ArrowUpRight } from "lucide-react";

import { FaInstagram } from "react-icons/fa6";

const instagramPosts = [
  "https://www.instagram.com/reel/DZSbIToS2dp/",
  "https://www.instagram.com/p/DY07oXKkn1S/",
  "https://www.instagram.com/reel/DXBH5Eby1Dx/",
  "https://www.instagram.com/reel/DWyJkvmDDPc/",
  "https://www.instagram.com/p/DYTc6klGcus/",
];

export default function SocialWall() {
  return (
    <section className="social-wall">

      <div className="social-bg-glow"></div>

      <div className="container">

        <div className="social-header">

          <span className="social-tag">
            FOLLOW OUR JOURNEY
          </span>

          <h2>
            Real Stories.
            <span> Real Transformations.</span>
          </h2>

          <p>
            Explore workshops, leadership activities,
            language programs and student transformation
            moments happening at Endless Transformation Academy.
          </p>

        </div>

      </div>

      {/* Marquee */}

      <div className="social-marquee">

        <div className="social-track">

          {[...instagramPosts, ...instagramPosts].map(
            (url, index) => (
              <div
                key={index}
                className="social-card"
              >

                <div className="card-top">

                  <FaInstagram />

                  <span>
                    Endless Transformation Academy
                  </span>

                </div>

                <div className="embed-wrapper">

                  <InstagramEmbed
                    url={url}
                    width="100%"
                  />

                </div>

              </div>
            )
          )}

        </div>

      </div>

      {/* CTA */}

      <div className="social-footer">

        <a
          href="https://www.instagram.com/endless_transformation_academy/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >

          Follow ETA On Instagram

          <ArrowUpRight size={18} />

        </a>

      </div>

    </section>
  );
}