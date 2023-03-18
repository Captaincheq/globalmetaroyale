import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import './ourservices.styles.scss';

export default function Ourservices() {
    return (
        <div className="service-container">
        <Outlet />
        <h1> We are in Services</h1>
            <div className="services-info">
                <div className="services-img">
                    <h1> Picture</h1>
                </div>
                <div className="services-text">
                    <h1> Our Services</h1>
                </div>

            </div>
            <div className="services-list">
            <h2>Our Services list</h2>
                <div className="services-items">
                    <h4> pic </h4>
                    <p>list from  1-5</p>
                </div>
                    <div className="services-items">
                    <h4> pic </h4>
                    <p>list from  2-5</p>
                </div>
            </div>
        </div>
    );
}