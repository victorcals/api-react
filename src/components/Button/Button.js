import React from "react";
import "../Button/Button.css";

function Button(props) {
  const { label, isSelected, onClick } = props;
  const classes = isSelected ? "button selected" : "button";

  return (
    <button className={classes} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;

