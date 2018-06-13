import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import artiste from "./artiste.json";
import "./App.css";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;

}
class App extends Component {
  // Setting this.state.artiste to the artiste json array
  state = {
    artiste: artiste,
    score:0,
    topScore:0,
    unClicked:artiste,
    gameMessage:"Click an image to begin!"
  };



handleReset = () => {

  this.setState({
    score: 0,
    topScore: this.state.topScore,
  });
  this.handleShuffle(artiste);
};
componentDidMount() {
shuffleArray(this.state.artiste);
}

handleShuffle = () => {
  let shuffledArtiste = shuffleArray(artiste);
  this.setState({artiste:shuffledArtiste});
};
imgClick = id => {
    const findArtiste = this.state.unClicked.find(item => item.id === id);
    if(findArtiste === undefined) {
        
        this.setState({ 
            gameMessage: "You guessed incorrectly!",
            topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
            scorecore: 0,
            artiste: artiste,
            unClicked: artiste
        });
        this.handleReset();
      }
    else {

        const newartiste = this.state.unClicked.filter(item => item.id !== id);
        this.setState({ 
            gameMessage: "You guessed correctly!",
            score: this.state.score + 1,
            topScore: this.state.score + 1,
            artiste: artiste,
            unClicked: newartiste
        });
    }
    shuffleArray(artiste);
};

render() {
  return(
    <div>
      <Navbar
      gameMessage={this.state.gameMessage}
      score={this.state.score}
      topScore={this.state.topScore}
      />

      <Jumbotron />
      <div className="wrapper">
      {this.state.artiste.map(artiste=>(
        <FriendCard
        imgClick={this.imgClick}
        id={artiste.id}
        key={artiste.id}
        img={artiste.img}
        />
      ))}
      </div>
      <Footer/>
    </div>
  );

}

}
export default App;
