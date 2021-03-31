import React from "react";
import "./Paragraph.css"

var fontWeightSelector = (fontWeight) => {
  switch (fontWeight) {
    case "light":
      return 300;
    case "regular":
      return 400;
    case "semi-bold":
      return 500;
    case "bold":
      return 700;
    default:
      return 400;
  }
};

const Paragraph = ({
  children,
  fontSize = 12,
  fontWeight = "regular",
  color = "blue",
  style = {},
}) => {
  var fontWeightValue = fontWeightSelector(fontWeight);
  return (
    <div
      className="paragraph"
      style={{
        fontSize: `${fontSize}px`,
        fontWeight: fontWeightValue,
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Paragraph;
