import React from "react";
import Main from "../../components/home/Main";
//import MyComponent from "../../components/birds/birds.component";
import ErrorBoundary from "../../components/errorBountary/Errorboundary";
import Footer from "../../components/footer/Footer";

export default function Home() {
    return (
        <div className="container">
        <ErrorBoundary fallback="There was an error in Home Page Us!">
            <Main/>
            <Footer/>
        </ErrorBoundary>
        </div>
    );
}