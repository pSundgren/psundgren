import React from "react";

/* Styling */
import "./Footer.css";

/* Main render function */
function Footer() {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li>
          <a href="mailto:pontus.sundgren@umu.se">
            <p>pontus.sundgren@umu.se</p>
          </a>
        </li>
        <li>
          <p>&copy; Copyright, 2020</p>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
