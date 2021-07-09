import "./App.css";
import React from "react";
import Canvas from "./components/Canvas";
import CanvasOptions from "./components/CanvasOptions";

function App() {
  return (
    <div className="container">
      <Canvas />
      <CanvasOptions />
    </div>
  );
}

export default App;
