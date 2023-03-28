import { Link, Outlet } from "react-router-dom";
import ErrorBoundary from "../../components/errorBountary/Errorboundary";
import {FaBars, FaTimes} from "react-icons/fa";
import { Fragment, useRef } from "react";
import { ReactComponent as Logo } from "../navigation/Logo.svg";
import  './navigation.styles.scss';

export default function Navigation() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
    <Fragment>
        <div className="navigation ">
            <ErrorBoundary fallback="There was an error in Header!">
            <Link className="logo-container" to='/'>
                <Logo className="logo"/>
            </Link>
            <div className="nav-links-container" ref={navRef}>
                <Link className="nav-link" to='/Home' >
                Home
                </Link>
                <Link className="nav-link" to='/Requirements' >
                Requirements
                </Link>
                <Link className="nav-link" to='/Gallery' >
                Gallery
                </Link>
                <Link className="nav-link" to='/About' >
                AboutUs
                </Link>
                <Link className="nav-link" to='/Services' >
                Services
                </Link>
                <Link className="nav-link" to='/Blog' >
                Blog
                </Link>
                <Link className="nav-link" to='/Contact' >
                Contact
                </Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </div>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </ErrorBoundary>   
        </div>
        <Outlet/>
    </Fragment> 
    )
}