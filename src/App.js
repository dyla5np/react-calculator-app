import React from "react";
import "./App.css";

import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }

  addToInput = val => {
    this.setState({
      input: this.state.input + val
    });
  };

  addZeroToInput = val => {
    //if this.state.input is not empty then add zero
    if (this.state.input !== "") {
      this.setState({
        input: this.state.input + val
      });
    }
  };

  addDecimal = val => {
    //only add decimal if there is no current decimal present
    if (this.state.input.indexOf(".") === -1) {
      this.setState({
        input: this.state.input + val
      });
    }
  };

  clear = val => {
    this.setState({
      input: ""
    });
  };

  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({
      input: ""
    });
    this.state.operator = "plus";
  };

  subtraction = () => {
    this.state.previousNumber = this.state.input;
    this.setState({
      input: ""
    });
    this.state.operator = "subtraction";
  };

  multiplication = () => {
    this.state.previousNumber = this.state.input;
    this.setState({
      input: ""
    });
    this.state.operator = "multiplication";
  };

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({
      input: ""
    });
    this.state.operator = "divide";
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input;

    if (this.state.operator === "plus") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "subtraction") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "multiplication") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber)
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input placeholder="enter a number">{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiplication}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.subtraction}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClick={this.clear}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
