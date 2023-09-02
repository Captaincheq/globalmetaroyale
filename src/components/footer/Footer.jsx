import React from "react";
import Logo from "../../images/Logo.svg";
import Social_Media from "../social_media/social_media.component";
import  './footer.styles.css';

export default function Footer() {

    return (
     <div>  
     <Social_Media/> 
      <div className="footer">
            <div className="footer-heading">
              <h1>Do you want to join us</h1>
            </div>
            {/*<div className="footer-button">
              <p>Request Early Access</p>
    </div> */}
              <div className="footer-links">
                <div className="footer-links-logo">
                  <img src={Logo} alt="logo"/>
                  {/*<p>China, Beijing, hadian , ring road,123</p> */}
                </div>
                <div className="footer-links-div">
                  <h4> Connect With Us </h4>
                  <p>Email: info@globalmetaroyale.com</p>
                  <p>Phone: +861234567890</p>
                  <p>Our Website: www.globalmetaroyale.com</p>
                </div>
                <div className="footer-links-div">
                  <h4> Company</h4>
                  <p>Terms & Conditions</p>
                  <p>Privacy Policy</p>
                </div>
                {/*<div className="footer-links-div">
                <h4> Get in touch</h4>
                <p>China Beijing , Haidian , Ring road, 123</p>
                <p>+8618810151613</p>
                <p>globalmetaroya@gmail.com</p>
    </div> */}
            </div>
            <div className="footer-copyright">
              <p>&copy; 2023 GlobalMetaRoyale. All rights reserved.</p>
            </div>
          </div>
        </div> 
    )
}