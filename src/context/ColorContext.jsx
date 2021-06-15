import { createContext, useState } from "react";
import { defaultColors } from "../styles/theme";
import { colord } from "colord";
import PropTypes from "prop-types";

const ColorContext = createContext();

function ColorContextProvider({ children }) {
  const [background, setBackground] = useState({
    rgb: colord(defaultColors.background).toRgb(), // eg. { r: 19, g: 42, b: 49, a: 1 }
    input: defaultColors.background, // eg. "#132A31"
    inputFormat: "hex",
    validInput: true,
  });
  const [foreground, setForeground] = useState({
    rgb: colord(defaultColors.foreground).toRgb(),
    input: defaultColors.foreground,
    inputFormat: "hex",
    validInput: true,
  });

  const updateBackground = (colorState) => {
    const hex = colord(colorState.rgb).toHex();
    setBackground(colorState);
    document.documentElement.style.setProperty("--background", hex);
  };

  const updateForeground = (colorState) => {
    const hex = colord(colorState.rgb).toHex();
    setForeground(colorState);
    document.documentElement.style.setProperty("--foreground", hex);
  };

  const data = {
    background,
    updateBackground,
    foreground,
    updateForeground,
  };

  return <ColorContext.Provider value={data}>{children}</ColorContext.Provider>;
}

ColorContextProvider.propTypes = {
  children: PropTypes.node,
};

export { ColorContext as default, ColorContextProvider };
