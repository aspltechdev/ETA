import "./TrustedCompanies.css";
import { motion } from "framer-motion";

import upskill from "../../assets/upskill.jpg";
import onlyinterns from "../../assets/onlyinterns.jpg";
import tnauto from "../../assets/tnauto.jpg";
import uvagai from "../../assets/uvagai.jpg";
import cambridge from "../../assets/cambridge.jpg";
import hcl from "../../assets/hcl.png";

const partners = [
  {
    logo: upskill,
    name: "Upskill",
    category: "Language Partner",
  },
  {
    logo: onlyinterns,
    name: "OnlyInterns",
    category: "MOU",
  },
  {
    logo: tnauto,
    name: "TN Auto Skills",
    category: "MOU",
  },
  {
    logo: uvagai,
    name: "Uvagai Foundation",
    category: "NGO Collaboration",
  },
  {
    logo: cambridge,
    name: "Cambridge",
    category: "Certification Partner",
  },
  {
    logo: hcl,
    name: "HCL",
    category: "Industry Partner",
  },
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

            {[...partners, ...partners].map((partner, index) => (

              <div
                key={index}
                className="trusted-partner"
              >

                <div className="trusted-logo-card">

                  <img
                    src={partner.logo}
                    alt={partner.name}
                  />

                </div>

                <h4 className="partner-name">
                  {partner.name}
                </h4>

                <span className="partner-category">
                  {partner.category}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}