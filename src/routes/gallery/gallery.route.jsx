import React from "react";
import Agent from "../../components/agent/agent.component";
import ErrorBoundary from "../../components/errorBountary/Errorboundary";
import Footer from "../../components/footer/Footer";
import { AgentProvider } from "../../contexts/agents.context";

export default function Gallery() {
    return (
        <div className="container">
        <ErrorBoundary fallback="There was an error in Contact Us!">
            <AgentProvider>
            <Agent/>
            </AgentProvider>
            <Footer/>
        </ErrorBoundary>
        </div>
    );
}