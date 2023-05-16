import React, { Component } from "react";
import LetterDisplay from "./letter_display";
import PropTypes from "prop-types";

export default class CurrentLetter extends Component {
  render() {
    return (
      <>
        <LetterDisplay letter={this.props.letter} />
      </>
    );
  }
}
CurrentLetter.propTypes = {
  letter: PropTypes.string.isRequired
};
