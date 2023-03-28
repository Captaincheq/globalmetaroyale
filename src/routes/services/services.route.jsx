import React from "react";
import ReactDOM from "react-dom/client";
import Ourservices from "../../components/Ourservices/OurServices";
import ErrorBoundary from "../../components/errorBountary/Errorboundary";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function Services() {
    return (
        <div className="container">
        <ErrorBoundary fallback="There was an error in Contact Us!">
        <Outlet />
            <Ourservices/>
            <Footer/>
        </ErrorBoundary>
        </div>
    );
}