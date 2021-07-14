import { createContext, useState } from "react";
import { colord } from "colord";
import PropTypes from "prop-types";
import { defaultColors } from "../styles/theme";
import { getContrast } from "../utils/colorUtils";

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

  const [contrast, setContrast] = useState(getContrast(background.rgb, foreground.rgb));

  const updateBackground = (colorState, calcContrast = true) => {
    const hex = colord(colorState.rgb).toHex();
    setBackground(colorState);
    document.documentElement.style.setProperty("--background", hex);
    calcContrast && updateContrast(colorState.rgb, foreground.rgb);
  };

  const updateForeground = (colorState, calcContrast = true) => {
    const hex = colord(colorState.rgb).toHex();
    setForeground(colorState);
    document.documentElement.style.setProperty("--foreground", hex);
    calcContrast && updateContrast(background.rgb, colorState.rgb);
  };

  const updateContrast = (backgroundRgb, foregroundRgb) => {
    let contrast = getContrast(backgroundRgb, foregroundRgb);
    setContrast(contrast);
  };

  const handleSwapColors = () => {
    const oldBackground = background;
    const oldForeground = foreground;
    updateBackground(foreground);
    updateForeground(oldBackground);
    updateContrast(oldBackground.rgb, oldForeground.rgb);
  };

  // Cycle through color formats of HEX, RGB and HSL
  const handleChangeFormat = (target) => {
    const isBackground = target === "background";

    const color = isBackground ? background : foreground;
    let colorInput = color.input;
    let colorFormat = color.inputFormat;

    switch (colorFormat) {
      case "hex":
        colorInput = colord(color.rgb).toRgbString();
        colorFormat = "rgb";
        break;
      case "rgb":
        colorInput = colord(color.rgb).toHslString();
        colorFormat = "hsl";
        break;
      case "hsl":
        colorInput = colord(color.rgb).toHex().toUpperCase();
        colorFormat = "hex";
        break;
    }

    const newColor = { ...color, input: colorInput, inputFormat: colorFormat, validInput: true };
    isBackground ? updateBackground(newColor, false) : updateForeground(newColor, false);
  };

  const data = {
    background,
    updateBackground,
    foreground,
    updateForeground,
    contrast,
    updateContrast,
    handleSwapColors,
    handleChangeFormat,
  };

  return <ColorContext.Provider value={data}>{children}</ColorContext.Provider>;
}

ColorContextProvider.propTypes = {
  children: PropTypes.node,
};

export { ColorContext as default, ColorContextProvider };
