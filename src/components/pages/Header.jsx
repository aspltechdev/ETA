

// import "./Header.css";
// import {
//   Menu,
//   ChevronDown,
//   ArrowRight,
// } from "lucide-react";

// const Header = () => {
//   return (
//     <header className="header">

//       <div className="header-container">

//         {/* Logo */}

//         <a
//           href="#home"
//           className="logo"
//         >
//           <div className="logo-icon">
//             ETA
//           </div>

//           <div className="logo-text">
//             <h3>
//               Endless
//             </h3>

//             <span>
//               Transformation Academy
//             </span>
//           </div>
//         </a>

//         {/* Navigation */}

//         <nav className="nav-links">

//           <a href="#home">
//             Home
//           </a>

//           <a href="#about">
//             About ETA
//           </a>

//           <div className="nav-dropdown">

//             <span>
//               Programs
//               <ChevronDown size={16} />
//             </span>

//             <div className="dropdown-menu">

//               <a href="#programs">
//                 Student Transformation
//               </a>

//               <a href="#leadership">
//                 Leadership Development
//               </a>

//               <a href="#communication">
//                 Communication Skills
//               </a>

//               <a href="#behavioral">
//                 Behavioral Development
//               </a>

//             </div>

//           </div>

//           <div className="nav-dropdown">

//             <span>
//               Languages
//               <ChevronDown size={16} />
//             </span>

//             <div className="dropdown-menu">

//               <a href="#languages">
//                 French
//               </a>

//               <a href="#languages">
//                 German
//               </a>

//               <a href="#languages">
//                 Spanish
//               </a>

//               <a href="#languages">
//                 Japanese
//               </a>

//               <a href="#languages">
//                 Korean
//               </a>

//             </div>

//           </div>

//           <a href="#schools">
//             School Solutions
//           </a>

//           <a href="#contact">
//             Contact
//           </a>

//         </nav>

//         {/* Actions */}

//         <div className="header-actions">

//           <button className="secondary-btn">
//             Download Brochure
//           </button>

//           <button className="primary-btn">
//             Book Consultation
//             <ArrowRight size={18} />
//           </button>

//           <button className="mobile-btn">
//             <Menu size={28} />
//           </button>

//         </div>

//       </div>

//     </header>
//   );
// };

// export default Header;



// import "./Header.css";

// import {
//   Menu,
//   ChevronDown,
//   ArrowRight,
// } from "lucide-react";

// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="header">

//       <div className="header-container">

//         {/* Logo */}

//         <Link
//           to="/"
//           className="logo"
//         >

//           <img
//             src="/logo.png"
//             alt="ETA"
//             className="logo-image"
//           />

//           <div className="logo-text">

//             <h3>
//               Endless
//             </h3>

//             <span>
//               Transformation Academy
//             </span>

//           </div>

//         </Link>

//         {/* Navigation */}

//         <nav className="nav-links">

//           <Link to="/">
//             Home
//           </Link>

//           {/* About */}

//           <div className="nav-dropdown">

//             <span>
//               About
//               <ChevronDown size={16} />
//             </span>

//             <div className="dropdown-menu">

//               <Link to="/about">
//                 About ETA
//               </Link>

//               <Link to="/about#founder">
//                 Founder Story
//               </Link>

//               <Link to="/about#mission">
//                 Mission & Vision
//               </Link>

//             </div>

//           </div>

//           {/* Programs */}

//           <div className="nav-dropdown">

//             <span>
//               Programs
//               <ChevronDown size={16} />
//             </span>

//             <div className="dropdown-menu">

//               <Link to="/programs">
//                 All Programs
//               </Link>

//               <Link to="/programs/communication">
//                 Communication Skills
//               </Link>

//               <Link to="/programs/leadership">
//                 Leadership Development
//               </Link>

//               <Link to="/programs/behavioral">
//                 Behavioral Transformation
//               </Link>

//               <Link to="/programs/emotional-intelligence">
//                 Emotional Intelligence
//               </Link>

//             </div>

//           </div>

//           {/* Languages */}

//           <div className="nav-dropdown">

//             <span>
//               Language Academy
//               <ChevronDown size={16} />
//             </span>

//             <div className="dropdown-menu">

//               <Link to="/language/french">
//                 French
//               </Link>

//               <Link to="/language/german">
//                 German
//               </Link>

//               <Link to="/language/spanish">
//                 Spanish
//               </Link>

//               <Link to="/language/japanese">
//                 Japanese
//               </Link>

//               <Link to="/language/korean">
//                 Korean
//               </Link>

//               <Link to="/language/chinese">
//                 Chinese
//               </Link>

//             </div>

//           </div>

//           <Link to="/schools">
//             School Solutions
//           </Link>

//           <Link to="/gallery">
//             Gallery
//           </Link>

//           <Link to="/contact">
//             Contact
//           </Link>

//         </nav>

//         {/* Actions */}

//         <div className="header-actions">

//           <button className="secondary-btn">
//             Download Brochure
//           </button>

//           <button className="primary-btn">

//             Book Consultation

//             <ArrowRight size={18} />

//           </button>

//           <button className="mobile-btn">

//             <Menu size={28} />

//           </button>

//         </div>

//       </div>

//     </header>
//   );
// };

// export default Header;
import "./Header.css";

import {
  Menu,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">

      <div className="header-container">

        {/* Logo */}

        <Link
          to="/"
          className="logo"
        >

          <img
            src="/logo.png"
            alt="ETA"
            className="logo-image"
          />

          <div className="logo-text">

            <h3>
              Endless
            </h3>

            <span>
              Transformation Academy
            </span>

          </div>

        </Link>

        {/* Navigation */}

        <nav className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/programs">
            Programs
          </Link>

          <Link to="/languages">
            Languages
          </Link>

          <Link to="/schools">
            School Solutions
          </Link>

          <Link to="/gallery">
            Gallery
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </nav>

        {/* Actions */}

        <div className="header-actions">

          <button className="secondary-btn">
            Download Brochure
          </button>

          <button className="primary-btn">

            Book Consultation

            <ArrowRight size={18} />

          </button>

          <button className="mobile-btn">

            <Menu size={28} />

          </button>

        </div>

      </div>

    </header>
  );
};

export default Header;