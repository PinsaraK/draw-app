import React, { useContext, useEffect, useState } from "react";
import { CanvasContext } from "../store/CanvasContext";
import { io } from "socket.io-client";
import randomstring from "randomstring";

export var roomId = randomstring.generate(6);

const socket = io("http://localhost:8080", {
  transports: ["websocket", "polling", "flashsocket"],
});

export const joinRoom = (room) => {
  roomId = room;
  socket.emit("join-room", roomId);
  console.log(roomId);
};
joinRoom(roomId);

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
    if (socket) {
      socket.emit("drawing-sent", data, roomId);
      console.log("hello");
    }
  };

  socket &&
    socket.on("drawing-received", (data) => {
      console.log();
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
