import { NavLink, Outlet } from "react-router-dom";
import ErrorBoundary from "../../components/errorBountary/Errorboundary";
import { FaBars, FaTimes } from "react-icons/fa";
import { Fragment, useRef, useState, useEffect } from "react";
import { ReactComponent as Logo } from "../navigation/Logo.svg";
import "./navigation.styles.scss";

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <Fragment>
      {/*<nav className={isSticky ? "sticky" : ""}> */}
        <div className="navigation" >
          <ErrorBoundary fallback="There was an error in Header!">
          <div className="nav-logo">
              <NavLink className="logo-container" to="/">
                <Logo className="logo" />
              </NavLink>
          </div>
            
          <div className="nav-links-container" ref={navRef}>
              <NavLink className="nav-link" to="/Home">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/requirementsInfo" >
                Requirements
              </NavLink>
                
              <NavLink className="nav-link" to="/Gallery" >
                Gallery
              </NavLink>
              <NavLink className="nav-link" to="/About" >
                AboutUs
              </NavLink>
              <NavLink className="nav-link" to="/Services">
                Services
              </NavLink>
              <NavLink className="nav-link" to="/Blog">
                Blog
              </NavLink>
              <NavLink className="nav-link" to="/Contact" >
                Contact
              </NavLink>
              <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
              </button>
            </div>
            <button className="nav-btn" onClick={showNavbar}>
              <FaBars />
            </button>
          </ErrorBoundary>
        </div>
        <Outlet />
  {/*</nav> */}
    </Fragment>
  );
}
