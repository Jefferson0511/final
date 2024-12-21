import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header"; // Your updated Header with responsive menu
import Footer from "./components/footer"; // Optional Footer
import Home from "./pages/home";
import Aboutus from "./pages/aboutus";
import Pastorsdesk from "./pages/pastorsdesk";
import Construction from "./pages/construction";
import Payments from "./pages/payments";
import Media from "./pages/media";
import Fellowship from "./pages/the-fellowship";

import "./styles/global.css"; // Ensure your global CSS is imported for styling

function App() {
  return (
    <Router>
      <div className="container">
        <Header /> {/* This contains the responsive navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/st-matthews-main" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/pastorsdesk" element={<Pastorsdesk />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/media" element={<Media />} />
          <Route path="/the-fellowship" element={<Fellowship />} />
        </Routes>
        {/* Optional Footer if needed */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
