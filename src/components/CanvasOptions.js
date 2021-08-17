import React from "react";
import Eraser from "./CanvasComponents/Eraser";
import ColorExpander from "./CanvasComponents/ColorButtons/ColorExpander";
//import ResetCanvas from "./CanvasComponents/ResetCanvas";
import InvitePeople from "./CanvasComponents/InvitePeople";
import styles from "./CanvasOptions.module.css";

const Options = () => {
  return (
    <div className={styles["canvas-options"]}>
      <p className={styles.logo}>
        Draww
        <br />
        App
      </p>
      <div className={styles.selectors}>
        <Eraser />
        <ColorExpander />
        {/*<ResetCanvas />*/}
        <InvitePeople />
      </div>
    </div>
  );
};

export default Options;
