import React from "react";
import ReactDOM from "react-dom/client";
import Main from "../../components/home/Main";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function Services() {
    return (
        <div className="container">
        <Outlet />
        <h1>We are in Services</h1>
            <Main/>
            <Footer/>
        </div>
    );
}