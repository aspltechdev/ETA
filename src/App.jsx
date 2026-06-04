import { Routes, Route } from "react-router-dom";

import Header from "./components/pages/Header";
import Home from "./components/pages/Home";

import "./App.css";

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

    </div>
  );
}

export default App;