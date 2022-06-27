import React from 'react';
import classes from "../styles/Illustration.module.css";


const Illustration = ({...props}) => {
  return (
    <div className={classes.illustration}>
            <img {...props} alt="Signup" />
          </div>
  )
}

export default Illustration;