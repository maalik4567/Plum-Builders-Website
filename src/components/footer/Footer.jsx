import React from "react";
import "../../app/globals.css"; // Importing the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-logo-section">
          <img src="/images/footer-logo.png" alt="Plum Builders Logo" className="footer-logo" />
          <p>THE MODERN BARN®</p>
          <p>CALL: 555-555-9855</p>
          <p>EMAIL: INFO@PLUMBUILDERS.COM</p>
          <p>MAIN SLAB SHOWROOM:</p>
          <p>106 PURDY AVE. PORT CHESTER, NY, 10573</p>
          <p>FACTORY LOCATION:</p>
          <p>29 NURSERY LANE, RYE, NY, 10580</p>
        </div>
        <div className="footer-section">
          <h6>DESIGN ASSISTANCE</h6>
          <ul>
            <li>MEASUREMENTS</li>
            <li>FREE DESIGN GUIDE</li>
            <li>DESIGN CONSULTATION</li>
            <li>VISUALIZER</li>
          </ul>
        </div>
        <div className="footer-section">
          <h6>ABOUT US</h6>
          <ul>
            <li>WHO WE ARE</li>
            <li>WHAT WE DO</li>
            <li>HOW WE DO IT</li>
            <li>SHOWROOM</li>
            <li>TRADE PROFESSIONALS</li>
          </ul>
        </div>
        <div className="footer-section">
          <h6>COMPANY INFO</h6>
          <ul>
            <li>FINANCING</li>
            <li>CAREERS</li>
            <li>MADE IN USA</li>
            <li>BLOG</li>
            <li>RESOURCES</li>
          </ul>
        </div>
      </div>
      {/* <hr className="footer-divider" /> */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms and Conditions</a>
        </div>
        <div className="footer-bottom-center">
          <p>© 2024 PLUM BUILDERS. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="footer-bottom-right social-links">
          <a href="#" className="footer-link">FACEBOOK</a>
          <a href="#" className="footer-link">INSTAGRAM</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
