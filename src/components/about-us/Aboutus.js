import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import './aboutus.styles.scss';

export default function Aboutus() {
    return (
        <div className="about-container">
        <Outlet />
        <h1> About Us</h1>
            <div  className="about-info">
                <h2> We are the ones.</h2>
                <h3> 
                    Students are always loyal. We have a lot to see if we don't have eyes, like what we eat and what we hear all have the same effect. Sometimes we don't know and sometimes we do know the effect of each at every given time. As for now we are just like what we were yesterday , aren't we.
                </h3>

            </div>
            <div className="about-picture">
             <p>food is good</p>

            </div>

        </div>
    );
}