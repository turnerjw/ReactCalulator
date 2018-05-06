import React, { Component } from "react";
import "./Calculator.css";
import Display from "./Display.js";
import Button from "./Button.js";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
  }

  renderButton(i, c) {
    return <Button clear={c} text={i} onClick={() => this.handleClick(i)} />;
  }

  handleClick(i) {
    const current = this.state.display;
    this.setState({
      display: current + i
    });
  }

  render() {
    return (
      <div>
        <Display text={this.state.display} />
        <div className="row">{this.renderButton("Clear", true)}</div>
        <div className="row">
          {this.renderButton(7)}
          {this.renderButton(8)}
          {this.renderButton(9)}
          {this.renderButton("÷")}
        </div>
        <div className="row">
          {this.renderButton(4)}
          {this.renderButton(5)}
          {this.renderButton(6)}
          {this.renderButton("×")}
        </div>
        <div className="row">
          {this.renderButton(1)}
          {this.renderButton(2)}
          {this.renderButton(3)}
          {this.renderButton("+")}
        </div>
        <div className="row">
          {this.renderButton(0)}
          {this.renderButton(".")}
          {this.renderButton("=")}
          {this.renderButton("-")}
        </div>
      </div>
    );
  }
}

export default Calculator;
