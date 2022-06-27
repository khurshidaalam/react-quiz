import React from "react";
import "../styles/App.css";
import classes from "../styles/Form.module.css";

const Form = ({ children, className, ...rest }) => {
  return (
    <form className={`${className} ${classes.form}`} action="#" {...rest}>
      {children}
    </form>
  );
};

export default Form;


