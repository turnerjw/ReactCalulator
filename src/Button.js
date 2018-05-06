import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    let className = "Button";
    if (this.props.clear) {
      className += " clear";
    }

    return (
      <button className={className} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
