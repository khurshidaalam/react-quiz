import React from 'react';
import classes from "../styles/Answers.module.css";

const Answers = ({id,ans}) => {
  return (
    <div className={classes.answers}>
      <label className={classes.answer} htmlFor={id}>
            <input type="checkbox" id={id} />
            A New Hope 1
      </label>
      <label className={classes.answer} htmlFor={id}>
            <input type="checkbox" id={id} />
            A New Hope 2
      </label>
    </div>
  )
}

export default Answers