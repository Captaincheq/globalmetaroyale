import React from "react";
import CTA from "../CTA/cta";
import Brand from "../brands/brand.component"; 
import  './main.styles.css';

export default function Main() {
    return (
     <div>  
        <div className="main ">
            <div className="main__content">
                <h1 className="main__content-text">Lets build something amazing with Globalmetaroyale. </h1>
                <p>We have to work together to make it happen.</p>

                <div className="main__content__people">
                    <img src={require('../../images/Requirements.jpg')} alt="Home Page" />
                    <p>Everything moves smoothy here.</p>
                </div>
                
            </div>
                <div className="main__img">
                   <img src={require('../home/home.jpg')}  alt="Home Page" />
                </div>

        </div>
        <Brand/>
        <CTA/>
    </div> 
        
    )
}



