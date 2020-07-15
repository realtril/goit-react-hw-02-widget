import React from "react";
import classes from "../Main/Main.module.css";

const FeedbackOptions = ({ funcFeedback }) => {
  return (
    <ul className={classes.BtnWrapper}>
      <li className={classes.Button}>
        <button onClick={funcFeedback} id="good">
          Good
        </button>
      </li>
      <li className={classes.Button}>
        <button onClick={funcFeedback} id="neutral">
          Neutral
        </button>
      </li>
      <li className={classes.Button}>
        <button onClick={funcFeedback} id="bad">
          Bad
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;
