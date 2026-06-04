// import "./PartnerInstitutionsSection.css";
// import {
//   School,
//   Building2,
//   Users,
//   Award,
// } from "lucide-react";

// const partners = [
//   "Partner School",
//   "Partner Academy",
//   "Partner Institution",
//   "Partner College",
//   "Partner School",
//   "Partner Organization",
//   "Partner Institute",
//   "Partner Campus",
// ];

// const PartnerInstitutionsSection = () => {
//   return (
//     <section className="partners-section">

//       <div className="partners-glow"></div>

//       <div className="container">

//         <div className="partners-header">

//           <span className="section-tag">
//             Trusted By Institutions
//           </span>

//           <h2>
//             Building Partnerships
//             That Create Impact
//           </h2>

//           <p>
//             ETA collaborates with schools,
//             colleges and organizations to
//             deliver transformational learning
//             experiences and measurable outcomes.
//           </p>

//         </div>

//         {/* Logo Wall */}

//         <div className="partners-grid">

//           {partners.map((partner, index) => (
//             <div
//               className="partner-card"
//               key={index}
//             >
//               <School size={34} />
//               <span>{partner}</span>
//             </div>
//           ))}

//         </div>

//         {/* Stats */}

//         <div className="partner-stats">

//           <div className="partner-stat">

//             <Building2 size={30} />

//             <h3>50+</h3>

//             <span>
//               Institution Partners
//             </span>

//           </div>

//           <div className="partner-stat">

//             <Award size={30} />

//             <h3>100+</h3>

//             <span>
//               Programs Delivered
//             </span>

//           </div>

//           <div className="partner-stat">

//             <Users size={30} />

//             <h3>10K+</h3>

//             <span>
//               Students Impacted
//             </span>

//           </div>

//         </div>

//         {/* Trust Banner */}

//         <div className="trust-banner">

//           <h3>
//             Empowering Schools,
//             Colleges & Communities
//           </h3>

//           <p>
//             Together, we create environments
//             where communication, leadership
//             and confidence thrive.
//           </p>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default PartnerInstitutionsSection;







import "./PartnerInstitutionsSection.css";

import hcl from "../../assets/w1.jpg";
import renauto from "../../assets/w1.jpg";
import cambridge from "../../assets/w1.jpg";
import etaLogo from "../../assets/w1.jpg";

const PartnerInstitutionsSection = () => {
  return (
    <section className="partners-section">

      <div className="container">

        <div className="partners-header">

          <span className="section-tag">
            Trusted Partners
          </span>

          <h2>
            Building Impact Through
            Strategic Partnerships
          </h2>

          <p>
            Collaborating with leading
            organizations and institutions
            to create transformational
            learning experiences.
          </p>

        </div>

        <div className="partner-logos">

          <div className="logo-card">
            <img src={hcl} alt="" />
          </div>

          <div className="logo-card">
            <img src={etaLogo} alt="" />
          </div>

          <div className="logo-card">
            <img src={renauto} alt="" />
          </div>

        </div>

        <div className="cambridge-banner">

          <img
            src={cambridge}
            alt=""
          />

          <div>

            <h3>
              Cambridge University Press &
              Assessment
            </h3>

            <p>
              Authorized Language
              Learning Partner
            </p>

          </div>

        </div>

        <div className="languages-strip">

          <span>🇨🇳 Chinese</span>

          <span>🇰🇷 Korean</span>

          <span>🇯🇵 Japanese</span>

          <span>🇪🇸 Spanish</span>

          <span>🇫🇷 French</span>

          <span>🇩🇪 German</span>

        </div>

      </div>

    </section>
  );
};

export default PartnerInstitutionsSection;