import React from "react";
import ReactDOM from "react-dom/client";
import Main from "../../components/home/Main";
import ErrorBoundary from "../../components/errorBountary/Errorboundary";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function Home() {
    return (
        <div className="container">
        <ErrorBoundary fallback="There was an error in Contact Us!">
        <Outlet />
        <h1>Home Page <hr/></h1>
            <Main/>
            <Footer/>
        </ErrorBoundary>
        </div>
    );
}