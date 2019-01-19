import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCard from "./components/ImageCard";
import NavTabs from "./components/NavTabs";
import ScoreTabs from "./components/ScoreTabs";
import Footer from "./components/Footer";
import picture from "./picture.json";


class App extends Component {

  // ----- Setting the State
  state = {
    picture,
    clickedArray: [],
    topScore: 0,
    score: 0,
    message: "",
    shakeit: false
  };

  // ----- Adding clickPicture function
  clickPicture = id => {
    const shuffledPic = this.shufflePic(picture);
    this.setState({
      picture: shuffledPic
    });
    if (this.state.clickedArray.includes(id)) {
      this.setState({
        score: 0,
        clickedArray: [],
        message: "You Lose because you clicked a duplicate picture. Click an image to start again!",
        shakeit: true
      })
    } else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,
        message: "Great Job! Select another one to keep playing",
        shakeit: false
      });
    };

    // ----- Top Score set
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score })
    }
  }





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
