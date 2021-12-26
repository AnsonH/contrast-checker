import { useContext } from "react";
import styled from "styled-components";
import ColorContext from "../../context/ColorContext";
import SaveContext from "../../context/SaveContext";
import ColorTile from "../atoms/ColorTile";
import { getRgbString } from "../../utils/colorUtils";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

function ColorSwatch() {
  const { updateBackground, updateForeground, updateContrast } = useContext(ColorContext);
  const { savedColors, setSavedColors } = useContext(SaveContext);

  // Load saved color. Every saved color stores a property called `key`, which is a timestamp
  const handleLoad = (key: number) => {
    const { background, foreground } = savedColors.find((color) => color.time === key)!;

    // Do not update contrast in `updateBackground` and `updateForeground` since state update is async.
    updateBackground(background, false);
    updateForeground(foreground, false);
    updateContrast(background.rgb, foreground.rgb);
  };

  // Delete saved color
  const handleDelete = (key: number) => {
    const color = savedColors.find((color) => color.time === key)!;
    const index = savedColors.indexOf(color);

    // Remove the selected color object
    const newSavedColors = [...savedColors];
    newSavedColors.splice(index, 1); // Remove the saved color
    setSavedColors(newSavedColors);
    window.localStorage.setItem("colors", JSON.stringify(newSavedColors));
  };

  return (
    <Container>
      {savedColors.map((color) => (
        <ColorTile
          key={color.time}
          background={getRgbString(color.background.rgb)}
          foreground={getRgbString(color.foreground.rgb)}
          handleLoad={() => handleLoad(color.time)}
          handleDelete={() => handleDelete(color.time)}
        />
      ))}
    </Container>
  );
}

export default ColorSwatch;
