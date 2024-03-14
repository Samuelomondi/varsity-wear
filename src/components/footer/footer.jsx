import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Contact Us</h3>
      <p>123 Main Street, City, Country</p>
      <p>Email: info@example.com</p>
      <p>Phone: +123-456-7890</p>

      <div className="link-icons">
        <h3>Follow Us</h3>

        <a href="">
          <FontAwesomeIcon icon={faFacebook} />
        </a>

        <a href="">
          <FontAwesomeIcon icon={faTwitter} />
        </a>

        <a href="">
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a href="">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>

      <div className="copyright">
        <p>
          &copy; 2024 Varsity Wear. All rights reserved. Powered by SamBody Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
