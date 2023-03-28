import React from "react";
import { Outlet } from "react-router-dom";
import {FaHotel,FaCcVisa,FaDrum} from "react-icons/fa"
import {MdAirplaneTicket,MdOutlineFoodBank} from "react-icons/md"
import { useRef } from "react";
import './ourservices.styles.scss';

export default function Ourservices() {

    const navRef = useRef();
    const showLinksbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <div className="services-container">
            <Outlet />
                    <div className="services-info-video">
                    <h1>Our Services</h1>
                            <video src={require('../../videos/video.mp4')} autoPlay typeof="video/mp4" controls/>
                            <p className="services-video-p">We are small enough to care and larger enough to handle your unique requirements from the day of your departure to China to all the necessary requirements whilst you are in China. Trust us to show your talents the way.  (singers, musicians, and DJs) </p>            
                    </div>                        
                    
                    
                            <div className="services-content">
                                <p>Global Meta Royale is proud to bring connection between Artist Talented people to China. We provide all necessary things including Visa and accommodation here in China.</p>
                        

                        <div className="services-location" ref={navRef}>
                            <div>
                                <button className="services-link-btn" onClick={showLinksbar}>
                                    <FaHotel/>          
                                </button>
                                <p className="services-btn-p">We offer 5-star hotel short & long-term contracts.</p>
                            </div>
                            <div>
                                <button className="services-link-btn" onClick={showLinksbar}>
                                    <FaCcVisa/>          
                                </button>
                                <p className="services-btn-p">Work visa.</p>
                            </div>
                            <div>
                                <button className="services-link-btn" onClick={showLinksbar}>
                                    <FaDrum/>          
                                </button>
                                <p className="services-btn-p">We hire talented artists.</p>
                            </div>
                            <div>
                                <button className="services-link-btn" onClick={showLinksbar}>
                                    <MdOutlineFoodBank/>          
                                </button>
                                <p className="services-btn-p">Free accommodations and meals</p>
                            </div>
                            <div>
                                <button className="services-link-btn" onClick={showLinksbar}>
                                    <MdAirplaneTicket/>          
                                </button>
                                <p className="services-btn-p">Flight tickets.</p>
                            </div>
                        <div/>
                    </div>
                </div>
        </div>
    );
}