import React, { Fragment } from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = ({ options = [], handleChange, input }) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => {
        const { title, checked, correct } = option;
        return (
          <Fragment key={index}>
            {input ? (
              <Checkbox
                className={classes.answer}
                text={title}
                value={index}
                checked={checked}
                id="option1"
                onChange={(e) => handleChange(e, index)}
              />
            ) : (
              <Checkbox
                className={`${classes.answer} ${
                  correct ? classes.correct : checked ? classes.wrong : null
                }`}
                text={title}
                value={index}
                defaultChecked={checked}
                id="option1"
                disabled
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Answers;
