// ----- Footer Component
import React from "react";
import "./Footer.css";
import logo from '../../logo.svg';


const Footer = () => (
    <footer className="footer">
        <div className="container">
            <span className="text-muted"><h4>Clicky Game with React!</h4>
                <img src={logo} className="App-logo" alt="logo" />
            </span>
        </div>
    </footer>
);

export default Footer;