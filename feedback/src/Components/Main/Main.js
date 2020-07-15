import React, { Component } from "react";
import classes from "../Main/Main.module.css";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";

class Main extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getFeedback = (e) => {
    const name = e.target.id;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  getTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivePercentage = () => {
    return (this.state.good / this.getTotal()) * 100;
  };

  render() {
    return (
      <>
        <h2 className={classes.Title}>Please leave your feedback</h2>
        <FeedbackOptions funcFeedback={this.getFeedback} />
        <Statistics
          states={this.state}
          funcTotal={this.getTotal}
          funcCount={this.countPositivePercentage}
        />
      </>
    );
  }
}

export default Main;

// const Main = () => {
//   return (
//     <>
//       <FeedbackOptions />
//     </>
//   );
// };

// export default Main;
