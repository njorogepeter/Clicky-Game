import React from 'react';
import SingleCard from './components/SingleCard';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import images from './images.json';
import './App.css'

class App extends React.Component {
  state = {
    images,
    clickedImages: [],
    score: 0,
    topScore: 0,
    message: "Click an image to begin!"
  };

handleShuffle(id) {
    if (!this.state.clickedImages.includes(id)) {
      this.setState({
        score: this.state.score + 1,
        clickedImages: [...this.state.clickedImages, id]
      });
    }
    this.setState({
      images: images.sort(() => Math.random() - 0.5),
      totalClick: this.state.totalClick + 1
    });
  }

  handleClick = (id) => {
    if (this.state.clickedImages.indexOf(id) === -1) {
      this.setState(
        {
          images: images,
          clickedImages: this.state.clickedImages.concat(id),
          score: this.state.score + 1,
          topScore: (this.state.topScore > this.state.score) ? this.state.topScore : this.state.topScore + 1,
          message: "You guessed correctly!"
        }
      );
    } else {
      this.setState(
        {
          images: images,
          clickedImages: [],
          score: 0,
          topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
          message: "You guessed incorrectly!"
        }
      );
    }
    this.handleShuffle(images);
  }

  render() {
    return (

      <Wrapper>
        <Navbar 
            score = {this.state.score}
            topScore = {this.state.topScore} 
            message = {this.state.message}/>
        <Jumbotron />
        {this.state.images.map(i => (
    
          <SingleCard
              id={i.id}
              name={i.name}
              image={i.image}
              message={this.state.message}
              score={this.state.score}
              handleClick = {this.handleClick}
            />
          ))}
     
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;