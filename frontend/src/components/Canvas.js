import React, { useContext, useEffect, useState } from "react";
import { CanvasContext } from "../store/CanvasContext";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080", {
  transports: ["websocket", "polling", "flashsocket"],
});

var emitTimer;
const Canvas = () => {
  const [isDrawing, setIsDrawing] = useState(false);

  const canvasCtx = useContext(CanvasContext);
  const {
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    canvasRef,
    socketDrawing,
  } = canvasCtx;

  useEffect(() => {
    prepareCanvas();
  }, [prepareCanvas]);

  const startDrawingHandler = (event) => {
    startDrawing(event);
    setIsDrawing(true);
  };
  const finishDrawingHandler = () => {
    finishDrawing();
    setIsDrawing(false);
  };
  const drawingHandler = (event) => {
    if (!isDrawing) return;
    clearTimeout(emitTimer);

    draw(event);
    const canvasData = canvasRef.current.toDataURL("image/png");
    emitTimer = setTimeout(emitData.bind(null, canvasData), 1000);
  };

  const emitData = (data) => {
    socket.emit("drawing-sent", data);
  };

  socket.on("drawing-received", (data) => {
    //console.log();
    socketDrawing(data);
  });

  return (
    <canvas
      onMouseDown={startDrawingHandler}
      onMouseUp={finishDrawingHandler}
      onMouseMove={drawingHandler}
      ref={canvasRef}
    />
  );
};

export default Canvas;
