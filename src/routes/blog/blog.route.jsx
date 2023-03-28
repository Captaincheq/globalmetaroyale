import React from "react";
import ErrorBoundary from "../../components/errorBountary/Errorboundary";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Ourblog from "../../components/blog/blog.component";

export default function Blog() {
    return (
        <div className="container">
        <ErrorBoundary fallback="There was an error in Contact Us!">
        <Outlet />
            <Ourblog/>
            <Footer/>
        </ErrorBoundary>
        </div>
    );
}