import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCard from "./components/ImageCard";
import NavTabs from "./components/NavTabs";
import ScoreTabs from "./components/ScoreTabs";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
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
  };

  // ----- Algorithm for picture shuffle
  shuffleArray = picturesArray => {
    for (let i = picturesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [picturesArray[i], picturesArray[j]] = [picturesArray[j], picturesArray[i]];
    }
    return picturesArray;
  }

  // ----- Render based on current state
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Clicky Game!</h1>
        </header>
        <h3 className="App-intro">
          <strong>Click an image to begin! If you click same image twice, you lose</strong>
          <p className="score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
          <p className="message"><strong>{this.state.message}</strong></p>
        </h3>
        <Wrapper
          shakeWrapper={this.state.shakeit}
          pictures=
          {this.state.picture.map(pic => (
            <ImageCard
              clickPicture={this.clickPicture}
              id={pic.id}
              key={pic.id} 
              name={pic.name}
              image={pic.image}
            />
          ))}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
