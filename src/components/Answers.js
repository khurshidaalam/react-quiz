import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = ({ options = [],handleChange }) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => {
        const { title, checked } = option;
        console.log(checked);
        return (
          <Checkbox
            className={classes.answer}
            text={title}
            value={index}
            checked={checked}
            id="option1"
            onChange={(e)=> handleChange(e, index)}
          />
        );
      })
      }
    </div>
  );
};

export default Answers;
