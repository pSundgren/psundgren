import React from 'react';

/* Styling */
import './Footer.css';

/* Main render function */
function Footer() {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              className="footer-svg"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
            </svg>
            <p>Home</p>
          </a>
        </li>
        <li>
          <a href="/work">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              className="footer-svg"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
            </svg>
            <p>Work</p>
          </a>
        </li>
        <li>
          <a href="/projects">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              className="footer-svg"
            >
              <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM5 5h14c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1zm7 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
            </svg>
            <p>Projects</p>
          </a>
        </li>
      </ul>
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