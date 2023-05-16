import React, { Component } from "react";
import PropTypes from "prop-types";

const Letter = props => {
  let className = props.className || "DefaultLetter";
  if (props.letter === props.glowLetter) {
    className = "LetterGlow";
  }
  return <div className={className}>{props.letter}</div>;
};
Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default class LettersRow extends Component {
  render() {
    let source = [...this.props.letters];
    if(this.props.sort) {
      source = source.sort();
    }

    const letters = source.map((l, i) => (
      <Letter key={i} className={this.props.className} letter={l} />
    ));

    return (
      <>
        <div className="LettersRow">{letters}</div>
      </>
    );
  }
}
LettersRow.propTypes = {
  letters: PropTypes.array.isRequired,
  className: PropTypes.string,
  glowLetter: PropTypes.string,
  sort: PropTypes.bool
};
