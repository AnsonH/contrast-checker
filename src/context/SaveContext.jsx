import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Context for saved colors
const SaveContext = createContext();

function SaveContextProvider({ children }) {
  const [savedColors, setSavedColors] = useState(JSON.parse(window.localStorage.getItem("colors")) ?? []);

  const updateSavedColor = (colorArray) => {
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

SaveContextProvider.propTypes = {
  children: PropTypes.node,
};

export { SaveContext as default, SaveContextProvider };
