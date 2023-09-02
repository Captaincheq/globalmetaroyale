import React from "react";
import { useRef } from 'react';
import {HiMail,HiPhone } from "react-icons/hi";
import {FaGlobeAsia} from "react-icons/fa"
import './location.component.styles.scss';

export default function Location() {

    const navRef = useRef();

    const showLinksbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
    
        <div className="contact-location" ref={navRef}>
            {/*<div className="contact-type">
                <button onClick={showLinksbar}>
                    <AiFillEnvironment/>
                </button>
                <label><b>Address:</b> 04 Ring road Haidian Beijing, China</label>
    </div> */}
            <div className="contact-type">
                <button onClick={showLinksbar}>
                    <HiPhone/>          
                </button>
                <label><b>Phone:</b> +8618810151613</label>
            </div>
            <div className="contact-type">
                <button onClick={showLinksbar}>
                    <HiMail/>
                </button>  
                <label><b>Email:</b> info@globalmetaroyale.com</label>
            </div>
            <div className="contact-type">
                <button onClick={showLinksbar}>
                    <FaGlobeAsia/>
                </button>  
                <label><b>Our Website:</b> www.globalmetaroyale.com</label>
            </div>
                    
        </div>
    )
}