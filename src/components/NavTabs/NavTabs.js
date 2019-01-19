// ----- NavTabs component
import React, { Component } from "react";
import "./NavTabs.css";

class NavTabs extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">React Clicky Game!</h1>
                </header>
                <h3 className="App-intro">
                    <strong>Click an image to begin! If you click same image twice, you lose</strong>
                    <p className="score"><strong>Score: {this.props.score} | TopScore: {this.props.topScore}</strong></p>
                    <p className="message"><strong>{this.props.message}</strong></p>
                </h3>
            </div>
        );
    }
}

export default NavTabs;