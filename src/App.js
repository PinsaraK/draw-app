import "./App.css";
import React, { useEffect } from "react";
import Canvas from "./components/Canvas";
import CanvasOptions from "./components/CanvasOptions";

function App() {
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = (e) => {
    e.preventDefault();
    alert("hello");
    const message =
      "The canvas will not be saved, and you will leave any rooms you have joined or hosted.";
    e.returnValue = message;
    return message;
  };

  return (
    <div className="container">
      <Canvas />
      <CanvasOptions />
    </div>
  );
}

export default App;
