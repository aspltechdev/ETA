import "./ConsultationCTA.css";

import {
  Phone,
  GraduationCap,
  School,
  Globe,
  ArrowRight,
} from "lucide-react";

const ConsultationCTA = () => {
  return (
    <section className="consultation-section">

      <div className="consultation-glow"></div>

      <div className="container">

        <div className="consultation-wrapper">

          <div className="consultation-content">

            <span className="section-tag">
              Start Your Transformation Journey
            </span>

            <h2>
              Ready To Unlock Your
              Full Potential?
            </h2>

            <p>
              Whether you're a student,
              professional, parent or institution,
              ETA offers transformational programs
              designed to create confidence,
              leadership and global opportunities.
            </p>

            <div className="consultation-features">

              <div className="consultation-feature-item">
                <GraduationCap size={24} />
                Free Career Guidance
              </div>

              <div className="consultation-feature-item">
                <Globe size={24} />
                Language Assessment
              </div>

              <div className="consultation-feature-item">
                <School size={24} />
                School Consultation
              </div>

              <div className="consultation-feature-item">
                <Phone size={24} />
                Program Counseling
              </div>

            </div>

          </div>

          {/* CTA Card */}

          <div className="consultation-card">

            <h3>
              Book A Free Consultation
            </h3>

            <p>
              Speak with our experts and find
              the right program for your goals.
            </p>

            <a href="#contact" className="consultation-cta-btn">
              Contact Us Now
              <ArrowRight size={18} />
            </a>

            <div className="consultation-stats">

              <div>
                <h4>10K+</h4>
                <span>Students</span>
              </div>

              <div>
                <h4>50+</h4>
                <span>Partners</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ConsultationCTA;