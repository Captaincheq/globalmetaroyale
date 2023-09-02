import React from "react";
import { Outlet } from "react-router-dom";
import {FaHotel,FaCcVisa,FaDrum} from "react-icons/fa"
import {MdAirplaneTicket,MdOutlineFoodBank,MdArrowCircleRight} from "react-icons/md"
import { useRef } from "react";
import './ourservices.styles.scss';

export default function Ourservices() {

    const navRef = useRef();
    const showLinksbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <div className="services-container">
            
                <div className="services-info-video">
                    <h1>Our Services</h1>
                    <video src={require('../../videos/video.mp4')} autoPlay typeof="video/mp4" controls/>
                    
                </div>
                
                <div className="ourservices">
                    <div className="serviceslist">
                       <h1>Event Management</h1>
                       <div className="moreinfo">
                            <MdArrowCircleRight/>
                       </div>
                    </div>
                    <div className="serviceslist">
                        <h1>Creation</h1>
                        <div className="moreinfo">
                            <MdArrowCircleRight/>
                        </div>
                    </div>
                </div>
                
                {/*<div>
                    <p className="services-video-p">We are small enough to care and larger enough to handle your unique requirements from the day of your departure to China to all the necessary requirements whilst you are in China. Trust us to show your talents the way.  (singers, musicians, and DJs) </p>
    </div> */}
                                                  
            <div className="services-content">
                    <p className="services-content-p">As Metaroyale, we are driven by the quest of wanting to promote and support the talents that are underappreciated. We provide for you live performance contracts that are stable and reliable. Our team is there to make sure we have your best interests at heart.</p>

                <div className="services-location" ref={navRef}>
                    <div>
                        <button className="services-link-btn" onClick={showLinksbar}>
                            <FaHotel/>          
                        </button>
                        <p className="services-btn-p">Professional 5 star hotel working environment.</p>
                    </div>
                    <div>
                        <button className="services-link-btn" onClick={showLinksbar}>
                            <FaCcVisa/>          
                        </button>
                        <p className="services-btn-p">Visa issuing.</p>
                    </div>
                    <div>
                        <button className="services-link-btn" onClick={showLinksbar}>
                            <FaDrum/>          
                        </button>
                        <p className="services-btn-p"> <li>Band development strategies.</li></p>
                    </div>
                    <div>
                        <button className="services-link-btn" onClick={showLinksbar}>
                            <MdOutlineFoodBank/>          
                        </button>
                        <p className="services-btn-p">Accommodation and meals.</p>
                    </div>
                    <div>
                        <button className="services-link-btn" onClick={showLinksbar}>
                            <MdAirplaneTicket/>          
                        </button>
                        <p className="services-btn-p">Flight tickets.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}