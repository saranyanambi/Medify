import React from "react";
import logo from "../../assests/logo.png";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import hamburger from "../../assests/hamburger.png";
// import Button from '../Button/Button';
import { useState } from "react";
const Navbar=()=>{

    const navBarLinks = ["Find Doctors", "Hospitals", "Medicines", "Surgeries", "Software for Provider", "Facilities"];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const navbar=()=>{
        return  navBarLinks.map((nav)=>{
            let link="#";
            if(nav=="Find Doctors")
            {
                link="/Find"
            }
            return(
            <Link to={link} className="navbar-link"><span className="navbar-link-inner">{nav}</span></Link>
            )
        })
    }

    const smallnavbar=()=>{
        return  navBarLinks.map((nav)=>{
            let link="#";
            if(nav=="Find Doctors")
            {
                link="/Find"
            }
            return(
            <Link to={link} className="small-nav-link"><span className="small-nav-inner">{nav}</span></Link>
            )
        })
    }
    return(
        <>
        <div className='topline'>
            <marquee direction="left" className='appTopSlide'>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</marquee>  
        </div>
        <div>
            <div className="navbar">
                <div className="navbar-container">
                    <div className="logo">
                    <Link to="/">
        
                    <button><img src={logo}/></button>
            
                    
                    <span className="logotext">Medify</span>
                
                    </Link>
                    </div>
                    <div className="navlink-container">
                        <div className="navlink">{navbar()}</div>
                        <div><button>My Booking</button></div>
                    </div>
                    <div className="small-navlink-container">
                    <button onClick={toggleMenu}>
                            <img src={hamburger} alt="Menu" />
                        </button>
                        
                    </div>
                    {isMenuOpen && (
                    <div className="dropdown-menu">
                        {smallnavbar()}
                        <Link to="booking">
                            <div>
                                <button className="booking">My Booking</button>
                            </div>
                        </Link>
                    </div>
                )}
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;