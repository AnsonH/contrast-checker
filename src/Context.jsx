import { createContext, useState } from "react";
import { defaultColors } from "./styles/theme";
import { colord } from "colord";

const Context = createContext();

export function ContextProvider(props) {
  const [background, setBackground] = useState({
    rgb: colord(defaultColors.background).toRgb(), // eg. { r: 19, g: 42, b: 49, a: 1 }
    input: defaultColors.background, // eg. "#132A31"
    inputFormat: "hex",
    isInputValid: true,
  });
  const [foreground, setForeground] = useState({
    rgb: colord(defaultColors.foreground).toRgb(),
    input: defaultColors.foreground,
    inputFormat: "hex",
    isInputValid: true,
  });
  const [savedColors, setSavedColors] = useState(JSON.parse(window.localStorage.getItem("colors")) ?? []);

  const data = {
    background,
    foreground,
    savedColors,
    setSavedColors,
  };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
}
