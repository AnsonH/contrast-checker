import { createContext, useState } from "react";
import { SavedColors } from "../types/colors.types";

type SaveContextProviderProps = {
  children: React.ReactNode;
};

type SaveContextType = {
  savedColors: SavedColors;
  setSavedColors: React.Dispatch<React.SetStateAction<SavedColors>>;
  updateSavedColor: (color: SavedColors) => void;
};

// Context for saved colors
const SaveContext = createContext<SaveContextType>({} as SaveContextType);

function SaveContextProvider({ children }: SaveContextProviderProps) {
  const colorsInStorage = window.localStorage.getItem("colors") ?? "";
  const initialState: SavedColors = colorsInStorage ? JSON.parse(colorsInStorage) : [];

  const [savedColors, setSavedColors] = useState(initialState);

  const updateSavedColor = (colorArray: SavedColors) => {
    setSavedColors(colorArray);
    window.localStorage.setItem("colors", JSON.stringify(colorArray));
  };

  const data = {
    savedColors,
    setSavedColors,
    updateSavedColor,
  };

  return <SaveContext.Provider value={data}>{children}</SaveContext.Provider>;
}

export { SaveContext as default, SaveContextProvider };
