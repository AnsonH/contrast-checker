import { createContext, useState } from "react";
import { defaultColors } from "../styles/theme";
import { colord } from "colord";
import PropTypes from "prop-types";

const ColorContext = createContext();

function ColorContextProvider(props) {
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
  const [savedColors, setSavedColors] = useState(JSON.parse(window.localStorage.getItem("colors")) ?? []);

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

  const updateSavedColor = (colorArray) => {
    setSavedColors(colorArray);
    window.localStorage.setItem("colors", JSON.stringify(colorArray));
  };

  const saveCurrentColor = () => {
    const newSavedColors = [...savedColors, { background, foreground, time: Date.now() }];
    updateSavedColor(newSavedColors);
  };

  const data = {
    background,
    updateBackground,
    foreground,
    updateForeground,
    savedColors,
    setSavedColors,
    updateSavedColor,
    saveCurrentColor,
  };

  return <ColorContext.Provider value={data}>{props.children}</ColorContext.Provider>;
}

ColorContextProvider.propTypes = {
  children: PropTypes.node,
};

export { ColorContext as default, ColorContextProvider };
