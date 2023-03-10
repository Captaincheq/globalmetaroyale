import React from "react";
import { ReactDOM } from "react";
import  './header.styles.css';

export default function Navbar() {
    return (
        <nav className="main--header">
            <img src={require('../header/logo.png')} className="nav--logo" />
            <div className="header-list">
                <h1>HOME</h1>
                <h1>SERVICES</h1>
                <h1>REQUIREMENTS</h1>
                <h1>CONTACT US</h1> 
            </div>

        </nav>
    
    )
}