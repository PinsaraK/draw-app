import React, { useContext } from "react";
import { CanvasContext } from "../../store/CanvasContext";

const Eraser = () => {
  const { erase } = useContext(CanvasContext);

  return <button onClick={erase}>Toggle Eraser</button>;
};

export default Eraser;
