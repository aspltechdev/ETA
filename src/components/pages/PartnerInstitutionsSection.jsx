import "./PartnerInstitutionsSection.css";
import {
  School,
  Building2,
  Users,
  Award,
} from "lucide-react";

const partners = [
  "Partner School",
  "Partner Academy",
  "Partner Institution",
  "Partner College",
  "Partner School",
  "Partner Organization",
  "Partner Institute",
  "Partner Campus",
];

const PartnerInstitutionsSection = () => {
  return (
    <section className="partners-section">

      <div className="partners-glow"></div>

      <div className="container">

        <div className="partners-header">

          <span className="section-tag">
            Trusted By Institutions
          </span>

          <h2>
            Building Partnerships
            That Create Impact
          </h2>

          <p>
            ETA collaborates with schools,
            colleges and organizations to
            deliver transformational learning
            experiences and measurable outcomes.
          </p>

        </div>

        {/* Logo Wall */}

        <div className="partners-grid">

          {partners.map((partner, index) => (
            <div
              className="partner-card"
              key={index}
            >
              <School size={34} />
              <span>{partner}</span>
            </div>
          ))}

        </div>

        {/* Stats */}

        <div className="partner-stats">

          <div className="partner-stat">

            <Building2 size={30} />

            <h3>50+</h3>

            <span>
              Institution Partners
            </span>

          </div>

          <div className="partner-stat">

            <Award size={30} />

            <h3>100+</h3>

            <span>
              Programs Delivered
            </span>

          </div>

          <div className="partner-stat">

            <Users size={30} />

            <h3>10K+</h3>

            <span>
              Students Impacted
            </span>

          </div>

        </div>

        {/* Trust Banner */}

        <div className="trust-banner">

          <h3>
            Empowering Schools,
            Colleges & Communities
          </h3>

          <p>
            Together, we create environments
            where communication, leadership
            and confidence thrive.
          </p>

        </div>

      </div>

    </section>
  );
};

export default PartnerInstitutionsSection;