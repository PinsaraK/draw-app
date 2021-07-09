import React, { useCallback, useRef, useState } from "react";

export const CanvasContext = React.createContext();

export const CanvasProvider = (props) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const prepareCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const setColor = (color) => {
    contextRef.current.lineWidth = 5;
    contextRef.current.strokeStyle = color;
  };

  const erase = () => {
    contextRef.current.lineWidth = 50;
    contextRef.current.strokeStyle = "white";
  };
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };
  const getDrawingData = () => {
    if (!contextRef) return {};
    if (!contextRef.current) return {};
    return {
      color: contextRef.current.strokeStyle,
      lineWidth: contextRef.current.lineWidth,
    };
  };

  const contextValue = {
    canvasRef,
    contextRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    clearCanvas,
    draw,
    erase,
    setColor,
    getDrawingData,
  };

  return (
    <CanvasContext.Provider value={contextValue}>
      {props.children}
    </CanvasContext.Provider>
  );
};
