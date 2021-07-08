import React from "react";
import Eraser from "./CanvasComponents/Eraser";
import ColorExpander from "./CanvasComponents/ColorButtons/ColorExpander";
import ResetCanvas from "./CanvasComponents/ResetCanvas";
import styles from "./CanvasOptions.module.css";

const Options = () => {
  return (
    <div className={styles["canvas-options"]}>
      <Eraser />
      <ColorExpander />
      <ResetCanvas />
    </div>
  );
};

export default Options;
