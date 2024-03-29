import React from "react";
import RequirementsForm from "../../components/requirements-form/requirements-form";
import ErrorBoundary from "../../components/errorBountary/Errorboundary";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function Requirements() {
    return (
        <div className="container">
        <ErrorBoundary fallback="There was an error in Contact Us!">
        <Outlet />
            <RequirementsForm/>
            <Footer/>
        </ErrorBoundary>
        </div>
    );
}