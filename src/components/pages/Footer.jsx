
import "./Footer.css";

import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="container">
        <div className="footer-top">
          {/* About */}
          <div className="footer-column footer-about">
            <div className="footer-logo">
              <img
                src="/logo.png"
                alt="ETA"
              />

              <div>
                <h3>Endless</h3>
                <span>Transformation Academy</span>
              </div>
            </div>

            <p>
              Transforming people through communication,
              leadership, emotional intelligence and
              global language learning.
            </p>

            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/languages">Languages</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Programs */}
          <div className="footer-column">
            <h4>Programs</h4>

            <a href="#">Communication Skills</a>
            <a href="#">Leadership Development</a>
            <a href="#">Emotional Intelligence</a>
            <a href="#">Behavioral Transformation</a>
          </div>

          {/* Languages */}
          <div className="footer-column">
            <h4>Languages</h4>

            <a href="#">French</a>
            <a href="#">German</a>
            <a href="#">Spanish</a>
            <a href="#">Japanese</a>
            <a href="#">Korean</a>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4>Contact</h4>

            <div className="footer-contact">
              <span>
                <Phone size={16} />
                +91 98765 43210
              </span>

              <span>
                <Mail size={16} />
                info@endlessacademy.com
              </span>

              <span>
                <MapPin size={16} />
                Puducherry, India
              </span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter">
          <div>
            <h3>Stay Connected With ETA</h3>

            <p>
              Get updates about programs,
              workshops and language courses.
            </p>
          </div>

          <form>
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button type="submit">
              Subscribe
              <ArrowRight size={18} />
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © 2026 Endless Transformation Academy.
            All Rights Reserved.
          </p>

          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
