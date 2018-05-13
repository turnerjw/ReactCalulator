import React, { Component } from "react";
import "./Calculator.css";
import Display from "./Display.js";
import Button from "./Button.js";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
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
    } else if (i === "+" || i === "-" || i === "÷" || i === "×" || i === "=") {
      this.evaluate();
      this.setState({
        lastOperation: i
      });
    } else if (i === ".") {
      alert("decimal");
    } else {
      const displayedNumber = this.state.displayedNumber * 10 + i;

      this.setState({
        display: displayedNumber,
        displayedNumber: displayedNumber
      });
    }
  }

  evaluate() {
    const lastOperation = this.state.lastOperation;
    const storedNumber = this.state.storedNumber;
    const displayedNumber = this.state.displayedNumber;
    if (storedNumber !== null) {
      if (lastOperation === "+") {
        this.setState({
          display: displayedNumber + storedNumber,
          displayedNumber: 0,
          storedNumber: displayedNumber + storedNumber
        });
      } else if (lastOperation === "-") {
        this.setState({
          display: storedNumber - displayedNumber,
          displayedNumber: 0,
          storedNumber: storedNumber - displayedNumber
        });
      } else if (lastOperation === "÷") {
        this.setState({
          display: storedNumber / displayedNumber,
          displayedNumber: 0,
          storedNumber: storedNumber / displayedNumber
        });
      } else if (lastOperation === "×") {
        this.setState({
          display: storedNumber * displayedNumber,
          displayedNumber: 0,
          storedNumber: storedNumber * displayedNumber
        });
      }
    } else {
      this.setState({
        storedNumber: displayedNumber,
        displayedNumber: 0
      });
    }
  }

  clearDisplay() {
    this.setState({
      display: "",
      displayedNumber: 0,
      storedNumber: null,
      lastOperation: ""
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
