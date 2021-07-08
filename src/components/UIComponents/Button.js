import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div
      className={styles.button}
      style={props.color ? { backgroundColor: "#D0D0D0" } : {}}
      onClick={props.click}
    >
      {props.children}
    </div>
  );
};

export default Button;
