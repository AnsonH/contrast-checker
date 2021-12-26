import { createContext, useState } from "react";
import { colord } from "colord";
import { defaultColors } from "../styles/theme";
import { getContrast, hexToRgb } from "../utils/colorUtils";
import { Color, RgbColor, Target } from "../types/colors.types";

type ColorContextProviderProps = {
  children: React.ReactNode;
};

type ColorContextType = {
  background: Color;
  updateBackground: (color: Color, calcContrast?: boolean) => void;
  foreground: Color;
  updateForeground: (color: Color, calcContrast?: boolean) => void;
  contrast: number;
  updateContrast: (backgroundRgb: RgbColor, foregroundRgb: RgbColor) => void;
  handleSwapColors: () => void;
  handleChangeFormat: (target: Target) => void;
};

// Color state of the app
const ColorContext = createContext<ColorContextType>({} as ColorContextType);

function ColorContextProvider({ children }: ColorContextProviderProps) {
  const [background, setBackground] = useState<Color>({
    rgb: hexToRgb(defaultColors.background), // eg. { r: 19, g: 42, b: 49 }
    input: defaultColors.background, // eg. "#132A31"
    inputFormat: "hex",
    validInput: true,
  });
  const [foreground, setForeground] = useState<Color>({
    rgb: hexToRgb(defaultColors.foreground),
    input: defaultColors.foreground,
    inputFormat: "hex",
    validInput: true,
  });

  const [contrast, setContrast] = useState(getContrast(background.rgb, foreground.rgb));

  const updateBackground = (color: Color, calcContrast = true) => {
    const hex = colord(color.rgb).toHex();
    setBackground(color);
    document.documentElement.style.setProperty("--background", hex);
    calcContrast && updateContrast(color.rgb, foreground.rgb);
  };

  const updateForeground = (color: Color, calcContrast = true) => {
    const hex = colord(color.rgb).toHex();
    setForeground(color);
    document.documentElement.style.setProperty("--foreground", hex);
    calcContrast && updateContrast(background.rgb, color.rgb);
  };

  const updateContrast = (backgroundRgb: RgbColor, foregroundRgb: RgbColor) => {
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
  const handleChangeFormat = (target: Target) => {
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

export { ColorContext as default, ColorContextProvider };
