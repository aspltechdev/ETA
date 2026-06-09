
import "./Footer.css";
import logo from "../../assets/logo.jpeg";

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
                src={logo}
                alt="ETA Logo"
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

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#languages">Languages</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Programs */}
          <div className="footer-column">
            <h4>Programs</h4>

            <a href="#programs">Communication Skills</a>
            <a href="#programs">Leadership Development</a>
            <a href="#programs">Emotional Intelligence</a>
            <a href="#programs">Behavioral Transformation</a>
          </div>

          {/* Languages */}
          <div className="footer-column">
            <h4>Languages</h4>

            <a href="#languages">French</a>
            <a href="#languages">German</a>
            <a href="#languages">Spanish</a>
            <a href="#languages">Japanese</a>
            <a href="#languages">Korean</a>
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
