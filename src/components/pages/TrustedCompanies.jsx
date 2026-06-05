// import "./TrustedCompanies.css";

// import cambridge from "../../assets/cam.png";
// import hcl from "../../assets/hcl.png";
// import partner1 from "../../assets/cam.png";
// import partner2 from "../../assets/hcl.png";
// import partner3 from "../../assets/cam.png";
// import partner4 from "../../assets/hcl.png";

// const logos = [
//   cambridge,
//   hcl,
//   partner1,
//   partner2,
//   partner3,
//   partner4,
// ];

// export default function TrustedBy() {
//   return (
//     <section className="trusted">

//       <div className="container">

//         <div className="trusted-header">

//           <span className="trusted-tag">
//             TRUSTED BY
//           </span>

//           <h2>
//             Leading Schools,
//             Institutions &
//             Industry Partners
//           </h2>

//           <p>
//             Collaborating with educational institutions,
//             training partners and organizations to create
//             transformational learning experiences.
//           </p>

//         </div>

//         <div className="trusted-marquee">

//           <div className="trusted-track">

//             {logos.map((logo, index) => (
//               <div
//                 key={index}
//                 className="trusted-logo"
//               >
//                 <img
//                   src={logo}
//                   alt=""
//                 />
//               </div>
//             ))}

//             {logos.map((logo, index) => (
//               <div
//                 key={`copy-${index}`}
//                 className="trusted-logo"
//               >
//                 <img
//                   src="https://www.financialexpress.com/wp-content/uploads/2022/09/hcl1.jpg?resize=768"
//                   alt=""
//                 />
//               </div>
//             ))}

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }







import "./TrustedCompanies.css";
import { motion } from "framer-motion";

import cambridge from "../../assets/cam.png";
import hcl from "../../assets/hcl.png";

const logos = [
  cambridge,
  hcl,
  cambridge,
  hcl,
  cambridge,
  hcl,
];

export default function TrustedCompanies() {
  return (
    <section className="trusted">

      <div className="trusted-glow"></div>

      <div className="container">

        <motion.div
          className="trusted-content"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="trusted-tag">
            TRUSTED PARTNERS
          </span>

          <h2 className="trusted-title">
            Trusted By The Institutions
            <span>
              That Build Tomorrow's Leaders.
            </span>
          </h2>

          <p className="trusted-description">
            Collaborating with schools, colleges and organizations
            to create transformational learning experiences that
            develop confident communicators and future-ready leaders.
          </p>

          <div className="trusted-keywords">

            <span>Schools</span>

            <span>Colleges</span>

            <span>Organizations</span>

            <span>Industry Partners</span>

          </div>

        </motion.div>

        <div className="trusted-marquee">

          <div className="trusted-marquee-fade-left"></div>
          <div className="trusted-marquee-fade-right"></div>

          <div className="trusted-track">

            {[...logos, ...logos].map(
              (logo, index) => (
                <div
                  key={index}
                  className="trusted-logo-card"
                >
                  <img
                    src={logo}
                    alt="Partner Logo"
                  />
                </div>
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}