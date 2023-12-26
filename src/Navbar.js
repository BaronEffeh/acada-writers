import React from "react";
// import logo from '../public/logo.png';

// const logo = "logo.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* <img src={logo} alt="Logo" /><h1>A</h1> */}
            {/* <img src="logo.png" alt="Logo" /> */}
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
            <div className="menu">
                <a href="/contact">Contact</a>
            </div>
            <div className="links">
                <a href="login">Login</a>
                <button id="get-startrd">Get Started</button>
            </div>
        </nav>
    );
}

export default Navbar;