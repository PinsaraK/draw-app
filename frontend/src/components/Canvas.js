import React, { useContext, useEffect } from "react";
import { CanvasContext } from "../store/CanvasContext";
import { io } from "socket.io-client";

const Canvas = () => {
  const canvasCtx = useContext(CanvasContext);
  const {
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    canvasRef,
    getDrawingData,
  } = canvasCtx;

  const socket = io("http://localhost:8080", {
    transports: ["websocket", "polling", "flashsocket"],
  });

  useEffect(() => {
    prepareCanvas();
  }, [prepareCanvas]);

  const drawingHandler = (event) => {
    draw(event);
    const { offsetX, offsetY } = event.nativeEvent;
    const drawData = getDrawingData();
    const canvasData = { ...drawData, x: offsetX, y: offsetY };
    socket.emit("drawing", canvasData);
  };

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={drawingHandler}
      ref={canvasRef}
    />
  );
};

export default Canvas;
