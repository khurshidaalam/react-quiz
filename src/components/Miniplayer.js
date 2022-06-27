import React from 'react';
import classes from "../styles/Miniplayer.module.css";

const Miniplayer = ({text, ...src}) => {
  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
          <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
          <span className={`material-icons-outlined ${classes.close}`}> close </span>
          <img {...src} alt="" />
          <p>{text}</p>
        </div>
  )
}

export default Miniplayer