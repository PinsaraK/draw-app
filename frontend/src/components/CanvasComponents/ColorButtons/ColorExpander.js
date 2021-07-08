import React, { useState } from "react";
import Button from "../../UIComponents/Button";
import Color from "./Color";
import styles from "./Color.module.css";

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "brown",
  "black",
  "white",
];

const ColorExpander = () => {
  const [showColor, setShowColor] = useState(false);

  const showColorsHandler = () => {
    setShowColor(true);
  };
  const hideColorsHandler = () => {
    setShowColor(false);
  };

  return (
    <React.Fragment>
      <Button color={showColor} click={showColorsHandler}>
        Colors
        {showColor && (
          <div
            className={styles["color-item"]}
            onMouseEnter={showColorsHandler}
            onMouseLeave={hideColorsHandler}
          >
            {COLORS.map((color) => {
              return <Color color={color} key={color} />;
            })}
          </div>
        )}
      </Button>
    </React.Fragment>
  );
};

export default ColorExpander;
