import "./Header.css";

import {
  Menu,
  Download,
  ArrowRight
} from "lucide-react";

import logo from "../../assets/logo.jpeg";

const Header = () => {
  return (
    <header className="eta-header">

      <div className="eta-header__container">

        {/* Logo */}

        <a
          href="#home"
          className="eta-header__logo"
        >
          <img
            src={logo}
            alt="ETA Logo"
          />
        </a>

        {/* Navigation */}

        <nav className="eta-header__nav">

          <a href="#home">Home</a>

          <a href="#about">About ETA</a>

          <a href="#why-eta">Why ETA</a>

          <a href="#programs">Programs</a>

          <a href="#languages">Languages</a>

          <a href="#schools">Schools</a>

          <a href="#success">Success Stories</a>

          <a href="#gallery">Gallery</a>

          <a href="#contact">Contact</a>

        </nav>

        {/* CTA */}

        <div className="eta-header__actions">

          <a
            href="/ETA-Brochure.pdf"
            download
            className="eta-header__download-btn"
          >
            <Download size={18} />
            Brochure
          </a>

          <a
            href="#contact"
            className="eta-header__consult-btn"
          >
            Book Consultation

            <ArrowRight size={18} />
          </a>

          <button className="eta-header__mobile-btn">

            <Menu size={26} />

          </button>

        </div>

      </div>

    </header>
  );
};

export default Header;