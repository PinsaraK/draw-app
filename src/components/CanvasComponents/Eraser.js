import React, { useContext } from "react";
import { CanvasContext } from "../../store/CanvasContext";

const Eraser = () => {
  const { erase } = useContext(CanvasContext);

  return (
    <div className="eraser" onClick={erase}>
      Eraser
    </div>
  );
};

export default Eraser;
