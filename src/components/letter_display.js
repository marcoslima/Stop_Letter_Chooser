import React, {Component} from 'react';

export default class LetterDisplay extends Component {
  render() {
    return <div><h1 id="letter">{this.props.letter}</h1></div>;
  }
}