import React from "react";
import classes from "../Main/Main.module.css";
import Notification from "../NotificationMessage/NotificationMessage";

const Statistics = ({ states, funcTotal, funcCount }) => {
  return (
    <>
      <h2 className={classes.Title}>Statistics</h2>
      {funcTotal() > 0 ? (
        <ul className={classes.btnWrapper}>
          <li className="characteristics">Good: {states.good}</li>
          <li className="characteristics">Neutral: {states.neutral}</li>
          <li className="characteristics">Bad: {states.bad}</li>
          <li className="characteristics">Total: {funcTotal()}</li>
          <li className="characteristics">
            Positive feedback: {funcCount().toFixed(0)}%
          </li>
        </ul>
      ) : (
        <Notification />
      )}
    </>
  );
};

export default Statistics;
