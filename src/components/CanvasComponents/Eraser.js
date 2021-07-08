import React, { useContext } from "react";
import { CanvasContext } from "../../store/CanvasContext";
import Button from "../UIComponents/Button";

const Eraser = () => {
  const { erase } = useContext(CanvasContext);

  return <Button click={erase}>Eraser</Button>;
};

export default Eraser;
