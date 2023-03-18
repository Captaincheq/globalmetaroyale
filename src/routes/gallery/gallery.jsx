import React from "react";
import ReactDOM from "react-dom/client";
import Agent from "../../components/agent/agent.component";
import ErrorBoundary from "../../components/errorBountary/Errorboundary";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { AgentProvider } from "../../contexts/agents.context";

export default function Gallery() {
    return (
        <div className="container">
        <ErrorBoundary fallback="There was an error in Contact Us!">
        <Outlet />
        <h1>We are here in Gallery</h1>
            <AgentProvider>
            <Agent/>
            </AgentProvider>
            <Footer/>
        </ErrorBoundary>
        </div>
    );
}