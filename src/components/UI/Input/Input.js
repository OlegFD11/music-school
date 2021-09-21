import React from "react";
import "./Input.scss";

const Input = (props) => {
  return (
    <input
      {...props}
      className={props.styleinput}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
