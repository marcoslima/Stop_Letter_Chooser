import React, { Component } from "react";
import Header from "./header";
import LettersRow from "./letters_row";
import CurrentLetter from "./current_letter";
import NextLetterButton from "./next_letter_button";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const LettersLeft = props => {
  return <LettersRow className="LetterLeft" {...props} sort={true}/>;
};

const PassedLetters = props => {
  return <LettersRow className="PassedLetter" {...props} />;
};

export default class StopApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passedLetters: [],
      lettersLeft: [],
      currentLetter: ""
    };
  }

  _init_game() {
    const lettersLeft = this._shuffled(alphabet.split(""));
    const passed = [];
    this.setState({
      lettersLeft: lettersLeft,
      passedLetters: passed,
      currentLetter: ""
    });
  }
  componentDidMount() {
    this._init_game();
  }

  _shuffled(unshuffled) {
    return unshuffled
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);
  }
  on_next_letter() {
    if (this.state.lettersLeft.length === 0) {
      this._init_game();
      return;
    }
    const new_letter = this.state.lettersLeft.pop();
    const passed = this.state.passedLetters;

    if (this.state.currentLetter !== "") {
      passed.push(this.state.currentLetter);
    }

    this.setState({
      passedLetters: passed,
      currentLetter: new_letter
    });
  }

  render() {
    return (
      <>
        <Header />
        <LettersLeft letters={this.state.lettersLeft} />
        <CurrentLetter letter={this.state.currentLetter} />
        <PassedLetters letters={this.state.passedLetters} />
        <NextLetterButton onClick={this.on_next_letter.bind(this)} />
      </>
    );
  }
}
