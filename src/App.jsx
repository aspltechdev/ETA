// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import heroImg from './assets/hero.png'
// // import './App.css'
// // import HeroSection from './components/pages/HeroSection'
// // import WhyLearnSection from './components/pages/WhyLearnSection'
// // import LearningJourney from './components/pages/LearningJourney'
// // import StatisticsSection from './components/pages/StatisticsSection'
// // import LanguagesSection from './components/pages/LanguagesSection'

// import AboutSection from "./components/pages/AboutSection";
// import ContactSection from "./components/pages/ContactSection";
// import CoursesSection from "./components/pages/CoursesSection";
// import FaqSection from "./components/pages/FaqSection";
// import Footer from "./components/pages/Footer";
// import Header from "./components/pages/Header";
// import HeroSection from "./components/pages/HeroSection";
// import LanguagesSection from "./components/pages/LanguagesSection";
// import LearningJourney from "./components/pages/LearningJourney";
// import NewsletterSection from "./components/pages/NewsletterSection";
// import PricingSection from "./components/pages/PricingSection";
// import StatisticsSection from "./components/pages/StatisticsSection";
// import TrustedCompanies from "./components/pages/TrustedCompanies";
// import WhyLearnSection from "./components/pages/WhyLearnSection";

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //    <HeroSection/>
// //      <LanguagesSection />
// //       <WhyLearnSection />
// //       <LearningJourney />
// //       <StatisticsSection />
// //     </>
// //   )
// // }

// // export default App


// function App() {
//   return (
//     <>
//       <Header />

//       <HeroSection />

//       <TrustedCompanies />

//       <LanguagesSection />

//       <WhyLearnSection />

//       <LearningJourney />

//       <CoursesSection />

//       <StatisticsSection />

//       <AboutSection />

//       <PricingSection />

//       <FaqSection />

//       <ContactSection />

//       <NewsletterSection />

//       <Footer />
//     </>
//   );
// }

// export default App;



// import { Routes, Route } from "react-router-dom";
// import Home from "./components/pages/Home";
// import AboutSection from "./components/pages/AboutSection";
// import CoursesSection from "./components/pages/CoursesSection";
// import ContactSection from "./components/pages/ContactSection";



// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<AboutSection />} />
//       <Route path="/courses" element={<CoursesSection />} />
//       <Route path="/contact" element={<ContactSection />} />
//     </Routes>
//   );
// }

// export default App;



// import { Routes, Route } from "react-router-dom";

// /* Pages */

// import Home from "./components/pages/Home";
// import About from "./components/pages/About";


// function App() {
//   return (
//     <Routes>

//       {/* Home */}

//       <Route
//         path="/"
//         element={<Home />}
//       />

//       {/* About */}

//       <Route
//         path="/about"
//         element={<About />}
//       />

//       {/* Programs */}

//       {/* <Route
//         path="/programs"
//         element={<Programs />}
//       />

  

//       <Route
//         path="/languages"
//         element={<Languages />}
//       />

     

//       <Route
//         path="/schools"
//         element={<SchoolSolutions />}
//       />

     

//       <Route
//         path="/gallery"
//         element={<Gallery />}
//       />

     

//       <Route
//         path="/contact"
//         element={<Contact />}
//       /> */}

//     </Routes>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Programs from "./components/pages/Programs";
import Language from "./components/pages/Languages";
import SchoolSolutions from "./components/pages/SchoolSolutions";
import Gallery from "./components/pages/gallery";
import Contact from "./components/pages/Contact";



function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

         <Route path="/programs" element={<Programs />} />

  <Route path="/languages" element={<Language />} />

    <Route path="/schools" element={<SchoolSolutions />} />

      <Route path="/gallery" element={<Gallery />} />
      

        <Route path="/contact" element={<Contact />} /> 
      </Routes>

      <Footer />
    </>
  );
}

export default App;