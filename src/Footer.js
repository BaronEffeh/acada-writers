import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div>
                    <img src={process.env.PUBLIC_URL + '/email-icon.png'} alt="Email" /> info@acadawriters.com
                    <img src={process.env.PUBLIC_URL + '/tweeter-icon.png'} alt="Tweeter" />
                    <img src={process.env.PUBLIC_URL + '/youtube-icon.png'} alt="YouTube" />
                    <img src={process.env.PUBLIC_URL + '/linkedin-icon.png'} alt="LinkedIn" />
                    <img src={process.env.PUBLIC_URL + '/fb-icon.png'} alt="Facebook" />
                </div>
                <div className="copyright">
                    ©2023 Cimspace. All rights reserved
                </div>
                <div className="terms">
                    Terms and Conditions
                </div>
            </div>
        </div>
    );
}

export default Footer;