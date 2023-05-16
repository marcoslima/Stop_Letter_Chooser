import React, { Component } from "react";

const Letter = props => {
  return <div class="PassedLetter">{props.letter}</div>;
};

export default class PassedLetters extends Component {
  render() {
    const letters = this.props.letters.map(l => <Letter letter={l} />);
    return (
      <>
        <div class="PassedLetters">{letters}</div>
      </>
    );
  }
}
