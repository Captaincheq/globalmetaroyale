import React from "react";
import RequirementsPage1 from "../../components/requirementsPage1/requirementsPage1";
import ErrorBoundary from "../../components/errorBountary/Errorboundary";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function RequirementsInfo() {
    return (
        <div className="container">
        <ErrorBoundary fallback="There was an error in Contact Us!">
        <Outlet />
            <RequirementsPage1/>
            <Footer/>
        </ErrorBoundary>
        </div>
    );
}