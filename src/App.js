import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import CardList from "./components/card-list/card-list.component";
import Footer from "./components/footer/Footer";

export default function App() {
    return (
        <div className="container">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}