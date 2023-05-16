import React, { Component } from "react";

export default class NextLetterButton extends Component {
  on_click(event) {
    event.preventDefault();
    this.props.onClick();
  }

  render() {
    return (
      <>
        <div className="NextButtonContainer">
          <a className="NextButton" href="/" onClick={this.on_click.bind(this)}>Próxima</a>
        </div>
      </>
    );
  }
}
