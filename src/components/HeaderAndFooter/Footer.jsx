import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <p>&copy; 2024 Management Application. All Rights Reserved.</p>
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/rajat-kumar-042748225/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.linkedin.com/in/rajat-kumar-042748225/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/rajat-kumar-042748225/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
