import React from "react";
import Contactform from "../../components/contact/contact.component";
import ErrorBoundary from "../../components/errorBountary/Errorboundary";
import Footer from "../../components/footer/Footer";

export default function Contact() {
    return (
        <div className="container">
        <ErrorBoundary fallback="There was an error in Contact Us!">
            <Contactform/>
            <Footer/>
        </ErrorBoundary>
        </div>
    );
}