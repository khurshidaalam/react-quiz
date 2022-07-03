import React from 'react';
import classes from "../styles/Progressbar.module.css";
import Button from "./Button";

const Progressbar = ({prev, next, progress}) => {
  return (
    <div className={classes.progressBar}>
          <button className={classes.backButton} onClick={prev}>
            <span className="material-icons-outlined"> arrow_back </span>
          </button>
          <div className={classes.rangeArea}>
            <div className={classes.tooltip}>24% Cimplete!</div>
            <div className={classes.rangeBody}>
              <div className={classes.progress} style={{width: `${progress}%`}}></div>
            </div>
          </div>
            <Button className={classes.next} onClick={next}>
              <span>Next Question</span>
              <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
        </div>
  )
}

export default Progressbar;