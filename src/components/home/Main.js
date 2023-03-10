import React from "react";
import { ReactDOM } from "react";
import  './main.styles.css';

export default function Main() {
    return (
        <main>
            <section className="section--main">
            <img src={require('../home/home.jpg')} className="main--photo" />
                <h1 className="main-heading">Main components</h1> 
                <div>
                <h2>Monister name</h2>
                    <div>
                        <div>email</div>
                    </div>
                </div>
                <p>monister email</p>
            </section>
               
        </main>
    
    )
}