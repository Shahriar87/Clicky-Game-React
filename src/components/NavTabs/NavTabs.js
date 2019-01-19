// ----- NavTabs component
import React, { Component } from "react";
import "./NavTabs.css";

class NavTabs extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className="itemLeft">
                        <h1 className="App-title">Heavy Metal Clicky Game!</h1>
                    </li>
                    <li className="itemCenter">
                        <strong>Click an image to begin! If you click same image twice, you lose</strong>
                        <p className="message"><strong>{this.props.message}</strong></p>
                    </li>
                    <li className="itemRight">
                        <p className="score"><strong>Score: {this.props.score} | TopScore: {this.props.topScore}</strong></p>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavTabs;