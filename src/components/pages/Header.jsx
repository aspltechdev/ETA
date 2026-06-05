// import "./Header.css";

// import {
//   Menu,
//   Download,
//   ArrowRight
// } from "lucide-react";

// import logo from "../../assets/logo.jpeg";

// const Header = () => {
//   return (
//     <header className="eta-header">

//       <div className="eta-header__container">

//         {/* Logo */}

//         <a
//           href="#home"
//           className="eta-header__logo"
//         >
//           <img
//             src={logo}
//             alt="ETA Logo"
//           />
//         </a>

//         {/* Navigation */}

//         <nav className="eta-header__nav">

//           <a href="#home">Home</a>

//           <a href="#about">About ETA</a>

//           <a href="#why-eta">Why ETA</a>

//           <a href="#programs">Programs</a>

//           <a href="#languages">Languages</a>

//           <a href="#schools">Schools</a>

//           <a href="#success">Success Stories</a>

//           <a href="#gallery">Gallery</a>

//           <a href="#contact">Contact</a>

//         </nav>

//         {/* CTA */}

//         <div className="eta-header__actions">

//           <a
//             href="/ETA-Brochure.pdf"
//             download
//             className="eta-header__download-btn"
//           >
//             <Download size={18} />
//             Brochure
//           </a>

//           <a
//             href="#contact"
//             className="eta-header__consult-btn"
//           >
//             Book Consultation

//             <ArrowRight size={18} />
//           </a>

//           <button className="eta-header__mobile-btn">

//             <Menu size={26} />

//           </button>

//         </div>

//       </div>

//     </header>
//   );
// };

// export default Header;









import "./Header.css";
import { useState, useEffect, useCallback } from "react";
import {
  Menu,
  X,
  Download,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import logo from "../../assets/logo.jpeg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll effects
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Glass effect trigger
    setIsScrolled(currentScrollY > 50);

    // Hide/show header on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setLastScrollY(currentScrollY);

    // Active link detection
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      if (
        currentScrollY >= sectionTop &&
        currentScrollY < sectionTop + sectionHeight
      ) {
        setActiveLink(`#${section.id}`);
      }
    });
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About ETA" },
    { href: "#why-eta", label: "Why ETA" },
    { href: "#programs", label: "Programs" },
    { href: "#languages", label: "Languages" },
    { href: "#schools", label: "Schools" },
    { href: "#success", label: "Success Stories" },
    { href: "#gallery", label: "Gallery" },
    // { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`eta-header ${isScrolled ? "scrolled" : ""} ${
          hidden ? "hidden" : ""
        }`}
      >
        {/* Ambient glow */}
        <div className="eta-header__glow" />

        <div className="eta-header__container">
          {/* Logo */}
          <a
            href="#home"
            className="eta-header__logo"
            onClick={() => setActiveLink("#home")}
          >
            <div className="eta-header__logo-ring" />
            <img src={logo} alt="ETA Logo" className="eta-header__logo-img" />
            <div className="eta-header__logo-shine" />
          </a>

          {/* Desktop Navigation */}
          <nav className="eta-header__nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`eta-header__nav-link ${
                  activeLink === link.href ? "active" : ""
                }`}
                onClick={(e) => {
                  setActiveLink(link.href);
                  if (isMobileOpen) setIsMobileOpen(false);
                }}
              >
                <span className="eta-header__nav-link-text">
                  {link.label}
                </span>
                <span className="eta-header__nav-link-indicator" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="eta-header__actions">
            {/* Download Brochure */}
            <a
              href="/ETA-Brochure.pdf"
              download
              className="eta-header__btn eta-header__btn--outline"
            >
              <Download size={16} className="eta-header__btn-icon" />
              <span>Brochure</span>
              <div className="eta-header__btn-shimmer" />
            </a>

            {/* Book Consultation */}
            <a
              href="#contact"
              className="eta-header__btn eta-header__btn--primary"
            >
              <span>Contact Us</span>
              <div className="eta-header__btn-arrow">
                <ArrowRight size={16} />
              </div>
              <div className="eta-header__btn-glow" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className={`eta-header__mobile-toggle ${
                isMobileOpen ? "open" : ""
              }`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="eta-header__mobile-toggle-lines">
                <span />
                <span />
                <span />
              </div>
            </button>
          </div>
        </div>

        {/* Active link underline animation */}
        <div className="eta-header__active-bar" />
      </header>

      {/* Mobile Overlay Menu */}
      <div
        className={`eta-mobile-menu ${isMobileOpen ? "open" : ""}`}
        aria-hidden={!isMobileOpen}
      >
        {/* Background pattern */}
        <div className="eta-mobile-menu__bg">
          <div className="eta-mobile-menu__bg-grid" />
          <div className="eta-mobile-menu__bg-orb eta-mobile-menu__bg-orb--1" />
          <div className="eta-mobile-menu__bg-orb eta-mobile-menu__bg-orb--2" />
        </div>

        <div className="eta-mobile-menu__container">
          {/* Mobile Header */}
          <div className="eta-mobile-menu__header">
            <a
              href="#home"
              className="eta-mobile-menu__logo"
              onClick={() => setIsMobileOpen(false)}
            >
              <img src={logo} alt="ETA Logo" />
            </a>
            <button
              className="eta-mobile-menu__close"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="eta-mobile-menu__nav">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`eta-mobile-menu__link ${
                  activeLink === link.href ? "active" : ""
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={(e) => {
                  setActiveLink(link.href);
                  setIsMobileOpen(false);
                }}
              >
                <span className="eta-mobile-menu__link-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="eta-mobile-menu__link-label">
                  {link.label}
                </span>
                <ChevronRight
                  size={16}
                  className="eta-mobile-menu__link-arrow"
                />
                <div className="eta-mobile-menu__link-glow" />
              </a>
            ))}
          </nav>

          {/* Mobile CTAs */}
          <div className="eta-mobile-menu__ctas">
            <a
              href="/ETA-Brochure.pdf"
              download
              className="eta-mobile-menu__cta eta-mobile-menu__cta--outline"
              onClick={() => setIsMobileOpen(false)}
            >
              <Download size={18} />
              Download Brochure
            </a>
            <a
              href="#contact"
              className="eta-mobile-menu__cta eta-mobile-menu__cta--primary"
              onClick={() => setIsMobileOpen(false)}
            >
              <Sparkles size={18} />
              Book Consultation
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Decorative line */}
          <div className="eta-mobile-menu__decoration">
            <span>Transforming Potential Into Purpose</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;