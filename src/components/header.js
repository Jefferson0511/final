import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // State to handle the open/close of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={isHomePage ? "header-transparent" : ""}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          // Show X icon when menu is open
          <>
            <div
              className="line"
              style={{
                transform: "rotate(45deg)",
                position: "relative",
                top: "7px",
              }}
            ></div>
            <div className="line" style={{ display: "none" }}></div>{" "}
            {/* Invisible line to keep the height */}
            <div
              className="line"
              style={{
                transform: "rotate(-45deg)",
                position: "relative",
                bottom: "7px",
              }}
            ></div>
          </>
        ) : (
          // Show hamburger icon when menu is closed
          <>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </>
        )}
      </div>

      {/* Fullscreen navigation */}
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/aboutus" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/pastorsdesk" onClick={toggleMenu}>
              Pastor's desk
            </Link>
          </li>
          <li>
            <Link to="/construction" onClick={toggleMenu}>
              Construction
            </Link>
          </li>
          <li id="logo">
            <Link to="/" onClick={toggleMenu}>
              St. Matthew's Church
            </Link>
          </li>
          <li>
            <Link to="/payments" onClick={toggleMenu}>
              Payments
            </Link>
          </li>
          <li>
            <Link to="/media" onClick={toggleMenu}>
              Media
            </Link>
          </li>
          <li>
            <Link to="/the-fellowship" onClick={toggleMenu}>
              Fellowship
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
