import React from "react";
import { Link } from 'react-router-dom';
import CTA from "../CTA/cta";
import Brand from "../brands/brand.component"; 
import  './main.styles.css';
//import SlidingPictures from "../Sliding_Images/SlidingPictures";
import MainSlide from "../Sliding_Images/MainSlide";

export default function Main() {
    return (
     <div> 
        <div className="homepage">
            <img src={require('../../images/hotels.jpeg')} alt="Home Page" /> 
        </div>
        <div className="main ">
            <div className="main__content">
                <h1 className="main__content-text">If you’re gifted and you feel the zeal to make a career out of your gift, compile your very best promo material and requirements listed below to a stand chance to work and manifest your gift where it’s greatly appreciated. </h1>
                <p>Lets work together to make it happen.</p>

                <div className="main__content__people">
                    {/*<img src={require('../../images/Requirements.jpg')} alt="Home Page" /> */}
                    <p className="rlink">
                        <Link  to="/Requirements">CLICK TO APPLY NOW</Link> 
                    </p>
                </div>
                
            </div>
            
                <div className="main__img">
                    <MainSlide/>
                </div> 

        </div>
        <Brand/>
        <CTA/>
    </div> 
        
    )
}



