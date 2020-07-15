import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "../Main/Main.module.css";

class Widget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getFeedback = (e) => {
    const name = e.target.id;
    // const { id } = e.target;
    // if (id === "good") {
    //   this.setState((prevState) => ({
    //     good: prevState.good + 1,
    //   }));
    // } else if (id === "bad") {
    //   this.setState((prevState) => ({
    //     bad: prevState.bad + 1,
    //   }));
    // } else if (id === "neutral") {
    //   this.setState((prevState) => ({
    //     neutral: prevState.neutral + 1,
    //   }));
    // }
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  getTotal = () => {
    // return this.state.bad + this.state.neutral + this.state.good;
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivePercentage = () => {
    return (this.state.good / this.getTotal()) * 100;
  };

  render() {
    return (
      <>
        <div className="container">
          <h2 className={classes.Title}>Please leave your feedback</h2>
          {/* --------feedback option----------- */}
          <ul className={classes.BtnWrapper}>
            <li className={classes.Button}>
              <button onClick={this.getFeedback} id="good">
                Good
              </button>
            </li>
            <li className={classes.Button}>
              <button onClick={this.getFeedback} id="neutral">
                Neutral
              </button>
            </li>
            <li className={classes.Button}>
              <button onClick={this.getFeedback} id="bad">
                Bad
              </button>
            </li>
          </ul>
          {/* ------------statistics ----------*/}
          <h2 className={classes.Title}>Statistics</h2>
          {this.getTotal() > 0 ? (
            <ul className={classes.btnWrapper}>
              <li className="characteristics">Good: {this.state.good}</li>
              <li className="characteristics">Neutral: {this.state.neutral}</li>
              <li className="characteristics">Bad: {this.state.bad}</li>
              <li className="characteristics">Total: {this.getTotal()}</li>
              <li className="characteristics">
                Positive feedback: {this.countPositivePercentage().toFixed(0)}%
              </li>
            </ul>
          ) : (
            <h2 className={classes.noFeedback}>No feedback given</h2>
          )}
        </div>
      </>
    );
  }
}

export default Widget;
