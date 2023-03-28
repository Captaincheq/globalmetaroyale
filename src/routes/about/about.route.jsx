import React from "react";
import Aboutus from "../../components/about-us/Aboutus";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "../../components/errorBountary/Errorboundary";

export default function About() {
    return (
        <div className="container">
        <ErrorBoundary fallback="There was an error in About Us!">
        <Outlet />
            <Aboutus/>
            <Footer/>
        </ErrorBoundary>
        </div>
    );
}