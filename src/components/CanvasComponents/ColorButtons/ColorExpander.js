import React, { useState } from "react";
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
      <div
        className={styles.colors}
        style={
          showColor
            ? { backgroundColor: "#D0D0D0" }
            : { backgroundColor: "#f2f2f2" }
        }
        onClick={showColorsHandler}
      >
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
      </div>
    </React.Fragment>
  );
};

export default ColorExpander;
