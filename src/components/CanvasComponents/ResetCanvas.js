import React, { useContext } from "react";
import { CanvasContext } from "../../store/CanvasContext";
import Button from "../UIComponents/Button";

const ResetCanvas = () => {
  const { clearCanvas } = useContext(CanvasContext);

  return (
    <Button className="eraser" click={clearCanvas}>
      Clear
    </Button>
  );
};

export default ResetCanvas;
