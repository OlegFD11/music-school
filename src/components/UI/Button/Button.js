import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button className={props.stylebutton} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
