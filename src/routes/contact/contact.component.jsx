import React from "react";
import ReactDOM from "react-dom/client";
import Form from "../../components/forms/Form";
import ErrorBoundary from "../../components/errorBountary/Errorboundary";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function Contact() {
    return (
        <div className="container">
        <ErrorBoundary fallback="There was an error in Contact Us!">
        <Outlet />
        <h1>We are in Contact</h1>
            <Form/>
            <Footer/>
        </ErrorBoundary>
        </div>
    );
}