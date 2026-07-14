// import { Routes, Route } from "react-router-dom";

// import Header from "./components/pages/Header";
// import Home from "./components/pages/Home";

// import "./App.css";

// function App() {
//   return (
//     <div className="app-layout">

//       <Header />

//       <main className="main-content">
//         <Routes>
//           <Route
//             path="/"
//             element={<Home />}
//           />
//         </Routes>
//       </main>

//     </div>
//   );
// }

// export default App;





import "./App.css";

import { Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="app-layout">
      <Header />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </main>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919176465416"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
      >
        <span className="whatsapp-tooltip">
          Chat With Us
        </span>

        <span className="whatsapp-ripple"></span>

        <FaWhatsapp />
      </a>
    </div>
  );
}

export default App;