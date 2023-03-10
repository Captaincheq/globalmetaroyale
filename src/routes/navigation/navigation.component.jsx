import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react";
import { ReactComponent as Logo } from "../navigation/Logo.svg";
import  './navigation.styles.scss';

const Navigation = () => {
    return (
    <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <Logo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/Requirements' >
                Requirements
                </Link>
                <Link className="nav-link" to='/About' >
                AboutUs
                </Link>
                <Link className="nav-link" to='/Services' >
                Services
                </Link>
                <Link className="nav-link" to='/Contact' >
                Contact
                </Link>
            </div>
            
        </div>
        <Outlet/>
    </Fragment> 
    )
}
export default Navigation;