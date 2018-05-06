import React, { Component } from "react";
import "./Calculator.css";
import Display from "./Display.js";
import Button from "./Button.js";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedNumber: 0,
      storedNumber: null,
      lastOperation: null
    };
  }

  renderButton(i, c) {
    return <Button clear={c} text={i} onClick={() => this.handleClick(i)} />;
  }

  handleClick(i) {
    if (i === "Clear") {
      this.clearDisplay();
    } else if (i === "+") {
      this.plus();
    } else if (i === "-") {
      alert("minus");
    } else if (i === "÷") {
      alert("divide");
    } else if (i === "×") {
      alert("multiply");
    } else if (i === "=") {
      alert("equals");
    } else if (i === ".") {
      alert("decimal");
    } else {
      const current = this.state.displayedNumber * 10 + i;

      this.setState({
        displayedNumber: current
      });
    }
  }

  plus() {
    const storedNumber = this.state.storedNumber;
    const displayedNumber = this.state.displayedNumber;
    if (storedNumber) {
      this.setState({
        storedNumber: storedNumber + displayedNumber,
        displayedNumber: 0
      });
    } else {
      this.setState({
        storedNumber: displayedNumber,
        displayedNumber: 0
      });
    }
    this.setState({
      lastOperation: "+"
    });
  }

  clearDisplay() {
    this.setState({
      displayedNumber: 0,
      storedNumber: 0
    });
  }

  render() {
    return (
      <div>
        <Display text={this.state.displayedNumber} />
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
