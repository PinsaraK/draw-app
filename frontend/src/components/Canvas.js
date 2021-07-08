import React, { useContext, useEffect } from "react";
import { CanvasContext } from "../store/CanvasContext";

const Canvas = () => {
  const canvasCtx = useContext(CanvasContext);
  const { prepareCanvas, startDrawing, finishDrawing, draw, canvasRef } =
    canvasCtx;

  useEffect(() => {
    prepareCanvas();
  }, [prepareCanvas]);

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
};

export default Canvas;
