import React, { useContext } from "react";
import styles from "./Color.module.css";
import { CanvasContext } from "../../../store/CanvasContext";

const Color = (props) => {
  const { setColor } = useContext(CanvasContext);

  return (
    <div
      className={styles["color-container"]}
      onClick={setColor.bind(null, props.color)}
    >
      <div
        className={styles["color-container-circle"]}
        style={{ backgroundColor: props.color }}
      ></div>
    </div>
  );
};

export default Color;
