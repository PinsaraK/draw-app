import "./App.css";
import React, { useEffect } from "react";
import Canvas from "./components/Canvas";
import CanvasOptions from "./components/CanvasOptions";
import { io } from "socket.io-client";

function App() {
  useEffect(() => {
    const socket = io("http://localhost:8080", {
      transports: ["websocket", "polling", "flashsocket"],
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="container">
      <Canvas />
      <CanvasOptions />
    </div>
  );
}

export default App;
