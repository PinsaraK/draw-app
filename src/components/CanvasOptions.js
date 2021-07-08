import React from "react";
import Eraser from "./CanvasComponents/Eraser";
import ColorExpander from "./CanvasComponents/ColorButtons/ColorExpander";
import styles from "./CanvasOptions.module.css";

const Options = () => {
  return (
    <div className={styles["canvas-options"]}>
      <Eraser />
      <ColorExpander />
    </div>
  );
};

export default Options;
