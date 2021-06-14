import { createContext, useState } from "react";
import { defaultColors } from "./styles/theme";
import { colord } from "colord";
import PropTypes from "prop-types";

const Context = createContext();

function ContextProvider(props) {
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

  const data = {
    background,
    updateBackground,
    foreground,
    updateForeground,
    savedColors,
    setSavedColors,
  };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
}

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export { Context as default, ContextProvider };
