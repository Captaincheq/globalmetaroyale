import React from "react";
import './cta.styles.scss';

export default function CTA() {
    return (
        <div className="cta-container">
            <div className="cta-content">
                <p> Request Access</p>
                <h3>Get Registered today and start exploring the endless possibilities.</h3>
            </div>
            <div className="cta-button" >
                <button type="get-started">Get Started</button>
            </div>
       
        </div>
    );
}