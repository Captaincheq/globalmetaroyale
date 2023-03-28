import React from "react";
import Logo from "../../images/Logo.svg";
import  './footer.styles.css';

export default function Footer() {

    return (
          <div className="footer">
            <div className="footer-heading">
              <h1 className="gradient-text">Do you want to join us</h1>
            </div>
            <div className="footer-button">
              <p>Request Early Access</p>
            </div>
            <div className="footer-links">
              <div className="footer-links-logo">
                <img src={Logo} alt="logo"/>
                <p>China, Beijing, hadian , ring road,123</p>
              </div>
              <div className="footer-links-div">
                <h4> Links</h4>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
              </div>
              <div className="footer-links-div">
                <h4> Company</h4>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
              </div>
              <div className="footer-links-div">
              <h4> Get in touch</h4>
              <p>China Beijing , Haidian , Ring road, 123</p>
              <p>+8618810151613</p>
              <p>globalmetaroya@gmail.com</p>
            </div>
            </div>
            <div className="footer-copyright">
              <p>&copy; 2023 GlobalMetaRoyale. All rights reserved.</p>
            </div>
          </div>
    )
}