import "./FounderStorySection.css";
import {
  Quote,
  Award,
  Users,
  Globe,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import founder from "../../assets/founder.jpeg";

const FounderStorySection = () => {
  return (
    <section className="founder-section">

      <div className="founder-glow founder-glow-1"></div>
      <div className="founder-glow founder-glow-2"></div>

      <div className="container">

        <div className="founder-wrapper">

          {/* Left Side */}

          <div className="founder-image-area">

            <div className="founder-image-card">

              <img
                src={founder}
                alt="Mrs. Ranjeetha Sarath"
              />

              <div className="founder-badge">
                Founder & Director
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="founder-content">

            <span className="section-tag">
              Meet Our Founder
            </span>

            <h2>
           The Story Behind Our Mission
            </h2>

            <h4>
              Mrs. Ranjeetha Sarath
            </h4>

            <p>
              Endless Transformation Academy was
              founded with a simple yet powerful
              belief — every individual possesses
              limitless potential waiting to be
              unlocked.
            </p>

            <p>
              Through communication, leadership,
              emotional intelligence and global
              learning, ETA empowers students,
              professionals and institutions to
              transform confidence into capability
              and aspirations into achievements.
            </p>

            <div className="philosophy-grid">

              <div className="philosophy-card">
                <h3>Communication</h3>
                <span>
                  Creates Confidence
                </span>
              </div>

              <div className="philosophy-card">
                <h3>Leadership</h3>
                <span>
                  Creates Impact
                </span>
              </div>

              <div className="philosophy-card">
                <h3>Learning</h3>
                <span>
                  Creates Opportunities
                </span>
              </div>

              <div className="philosophy-card">
                <h3>Transformation</h3>
                <span>
                  Creates Success
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Quote */}

        <div className="founder-quote">

          <Quote size={40} />

          <h3>
            Every individual has limitless
            potential. The right environment,
            guidance and opportunities can
            transform lives.
          </h3>

        </div>

        {/* Impact Stats */}

        <div className="impact-grid">

          <div className="impact-card">

            <Users size={28} />

            <h3>10K+</h3>

            <span>
              Students Impacted
            </span>

          </div>

          <div className="impact-card">

            <Award size={28} />

            <h3>100+</h3>

            <span>
              Programs Delivered
            </span>

          </div>

          <div className="impact-card">

            <GraduationCap size={28} />

            <h3>50+</h3>

            <span>
              Institution Partners
            </span>

          </div>

          <div className="impact-card">

            <Globe size={28} />

            <h3>7+</h3>

            <span>
              Global Languages
            </span>

          </div>

        </div>

        {/* CTA */}

        <div className="founder-cta">

          <h3>
            Discover The ETA Journey
          </h3>

          <p>
            Learn how ETA is transforming
            communication, leadership and
            learning experiences across
            institutions and communities.
          </p>

          <button>
            Read Our Story
            <ArrowRight size={18} />
          </button>

        </div>

      </div>

    </section>
  );
};

export default FounderStorySection;