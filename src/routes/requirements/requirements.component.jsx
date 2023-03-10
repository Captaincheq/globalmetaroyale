import React from "react";
import ReactDOM from "react-dom/client";
import Main from "../../components/home/Main";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function Requirements() {
    return (
        <div className="container">
        <Outlet />
        <h1>We are in Requirements</h1>
            <Main/>
            <Footer/>
        </div>
    );
}