
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





import { useState } from "react";
import "./SocialWall.css";

import { InstagramEmbed } from "react-social-media-embed";

import { ArrowUpRight } from "lucide-react";

import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa6";

const instagramPosts = [
  "https://www.instagram.com/reel/DZSbIToS2dp/",
  "https://www.instagram.com/p/DY07oXKkn1S/",
  "https://www.instagram.com/reel/DXBH5Eby1Dx/",
  "https://www.instagram.com/reel/DWyJkvmDDPc/",
  "https://www.instagram.com/p/DYTc6klGcus/",
];

const linkedinPosts = [
  "https://www.linkedin.com/embed/feed/update/urn:li:activity:7468887672229568512",
  "https://www.linkedin.com/embed/feed/update/urn:li:activity:7446182409131380737",
  "https://www.linkedin.com/embed/feed/update/urn:li:activity:7450024963031597057",
  "https://www.linkedin.com/embed/feed/update/urn:li:activity:7449720926847377409",
  "https://www.linkedin.com/embed/feed/update/urn:li:activity:7460358578814607360",
];

const youtubeVideos = [
  "aircAruvnKk",
  "rfscVS0vtbw",
  "PkZNo7MFNFg",
  "bMknfKXIFA8",
];

const facebookPosts = [
  "https://www.facebook.com/facebook/posts/10153231379946729",
  "https://www.facebook.com/facebook/posts/10102577175875681",
  "https://www.facebook.com/facebook/posts/10153231379946729",
  "https://www.facebook.com/facebook/posts/10102577175875681",
];

export default function SocialWall() {
  const [activeTab, setActiveTab] = useState("instagram");

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

          {/* Social Tabs */}
          <div className="social-tabs">
            <button
              className={`tab-btn ${activeTab === "instagram" ? "active-instagram" : ""}`}
              onClick={() => setActiveTab("instagram")}
            >
              <FaInstagram size={18} />
              <span className="tab-text">Instagram Reels</span>
            </button>
            <button
              className={`tab-btn ${activeTab === "linkedin" ? "active-linkedin" : ""}`}
              onClick={() => setActiveTab("linkedin")}
            >
              <FaLinkedin size={18} />
              <span className="tab-text">LinkedIn Updates</span>
            </button>
            <button
              className={`tab-btn ${activeTab === "youtube" ? "active-youtube" : ""}`}
              onClick={() => setActiveTab("youtube")}
            >
              <FaYoutube size={18} />
              <span className="tab-text">YouTube Videos</span>
            </button>
            <button
              className={`tab-btn ${activeTab === "facebook" ? "active-facebook" : ""}`}
              onClick={() => setActiveTab("facebook")}
            >
              <FaFacebook size={18} />
              <span className="tab-text">Facebook Posts</span>
            </button>
          </div>

        </div>

      </div>

      {/* Marquee */}

      <div className="social-marquee">

        <div className="social-track">

          {activeTab === "instagram" ? (
            [...instagramPosts, ...instagramPosts].map(
              (url, index) => (
                <div
                  key={`ig-${index}`}
                  className="social-card instagram-card"
                >

                  <div className="card-top instagram-color">

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
            )
          ) : activeTab === "linkedin" ? (
            [...linkedinPosts, ...linkedinPosts].map(
              (url, index) => (
                <div
                  key={`li-${index}`}
                  className="social-card linkedin-card"
                >

                  <div className="card-top linkedin-color">

                    <FaLinkedin />

                    <span>
                      Endless Transformation Academy
                    </span>

                  </div>

                  <div className="embed-wrapper linkedin-wrapper">

                    <iframe
                      src={url}
                      width="100%"
                      height="668"
                      frameBorder="0"
                      allowFullScreen=""
                      title="Embedded LinkedIn Post"
                      loading="lazy"
                      style={{ border: "none", display: "block", background: "white" }}
                    />

                  </div>

                </div>
              )
            )
          ) : activeTab === "youtube" ? (
            [...youtubeVideos, ...youtubeVideos].map(
              (videoId, index) => (
                <div
                  key={`yt-${index}`}
                  className="youtube-card"
                >

                  <div className="card-top youtube-color">

                    <FaYoutube />

                    <span>
                      Endless Transformation Academy
                    </span>

                  </div>

                  <div className="embed-wrapper youtube-wrapper">

                    <iframe
                      className="youtube-embed"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`YouTube Video ${index}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />

                  </div>

                </div>
              )
            )
          ) : (
            [...facebookPosts, ...facebookPosts].map(
              (url, index) => (
                <div
                  key={`fb-${index}`}
                  className="social-card facebook-card"
                >

                  <div className="card-top facebook-color">

                    <FaFacebook />

                    <span>
                      Endless Transformation Academy
                    </span>

                  </div>

                  <div className="embed-wrapper facebook-wrapper">

                    <iframe
                      src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&show_text=true&width=480`}
                      width="100%"
                      height="500"
                      style={{ border: "none", overflow: "hidden", display: "block" }}
                      scrolling="no"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      loading="lazy"
                    />

                  </div>

                </div>
              )
            )
          )}

        </div>

      </div>



    </section>
  );
}