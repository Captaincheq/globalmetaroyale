import React , { useState }from "react";
import './button.component.styles.scss';

export default function Button({ children }) {

    function handleClick(e) {
        e.preventDefault();
    
        const button = e.target;
        const overlay = document.createElement("span");
        overlay.classList.add("overlay");
        button.appendChild(overlay);
    
        const xValue = e.clientX - button.offsetLeft;
        const yValue = e.clientY - button.offsetTop;
    
        overlay.style.left = xValue + "px";
        overlay.style.top = yValue + "px";
      }
    
      return (
        <a href="#" className="button" onClick={handleClick}>
          {children}
        </a>
      );
    }
    
    function App() {
      return (
        <div className="buttons">
          <Button>Button</Button>
          <Button className="two">Button</Button>
        </div>
      );
    }