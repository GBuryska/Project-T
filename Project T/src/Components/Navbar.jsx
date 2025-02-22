import React, { useState } from "react";
import "./Navbar.css";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">
                    <img src="src/Assets/2B LOGO.png" alt="logo"/>
                </a>
            </div>
            <div className={`navbar-links ${isOpen ? "active" : ""}`}>
                <a href="/Menu">Menu</a>
                <a href="/Events">Events</a>
                <a href="/Apply">Apply</a>
                <a href="/Locations">Locations</a>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Nav;
