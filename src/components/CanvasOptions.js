import React from "react";
import Eraser from "./CanvasComponents/Eraser";
import ColorExpander from "./CanvasComponents/ColorButtons/ColorExpander";

const Options = () => {
  return (
    <React.Fragment>
      <Eraser />
      <ColorExpander />
    </React.Fragment>
  );
};

export default Options;
