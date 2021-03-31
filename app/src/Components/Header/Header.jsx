import React from "react";
import "./Header.css"

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

const Header = ({
  children,
  fontSize = 16,
  fontWeight = "bold",
  color = "blue",
  style = {},
}) => {
  var fontWeightValue = fontWeightSelector(fontWeight);
  return (
    <div
      className="header"
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

export default Header;
