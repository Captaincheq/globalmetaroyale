import React from "react";
import CTA from "../CTA/cta";
import './aboutus.styles.scss';

export default function Aboutus() {
    return (
        <div>
            <div className="about-container">
                <div  className="about-img">
                <img src={require('../../images/pic2.png')} alt="About Us" />
                </div>
                <div className="about-content">
                    <h3> 
                        Students are always loyal. We have a lot to see if like what we eat and what we hear all have the same effect. Sometimes we don't know and sometimes we do know the effect of each at every given time. As for now we are just like what we were yesterday , aren't we.
                    </h3>
                    <h1 className="gradient-text">We don't have eyes </h1>
                    <p></p>
                    <h3> 
                    Students are always loyal. We have a lot to see if like what we eat and what we hear all have the same effect. Sometimes we don't know and sometimes we do know the effect of each at every given time. As for now we are just like what we were yesterday , aren't we.
                    </h3>
                </div> 
                        
            </div>
            <CTA/>
        </div>
    );
}