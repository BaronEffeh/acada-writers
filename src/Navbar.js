import React from "react";
// import logo from '../public/logo.png';

// const logo = "logo.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#home"><img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" /></a>
            <div className="menu">
                <a href="#contact">Contact</a>
            </div>
            <div className="links">
                <a href="login">Login</a>
                <button id="get-started">Get Started</button>
            </div>
        </nav>
    );
}

export default Navbar;