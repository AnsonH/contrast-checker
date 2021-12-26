import { useContext } from "react";
import styled from "styled-components";
import { RgbColor, RgbColorPicker } from "react-colorful";
import { colord } from "colord";
import Tooltip from "./Tooltip";
import ColorContext from "../../context/ColorContext";
import { getColorString } from "../../utils/colorUtils";
import { hideOnEsc } from "./tooltipPlugins";
import { Target } from "../../types/colors.types";

type ColorPickerProps = {
  target: Target;
};

const PickerButton = styled.button<{ target: Target }>`
  width: 3rem;
  height: 3rem;
  background: ${(props) => (props.target === "background" ? "var(--background)" : "var(--foreground)")};
  border: none; // Use box-shadow for border instead
  box-shadow: 0 0 0 1px var(--gray);
  border-radius: 0.5rem;
  -webkit-appearance: none; // Fix iOS appearance bugs

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--cyan);
  }
`;

const RgbPicker = styled(RgbColorPicker)`
  &.react-colorful {
    width: 25rem;
    cursor: crosshair;
  }
`;

// Special inline styles for tooltip
const styles = {
  buttonWrapper: {
    position: "absolute",
    left: "0.8rem",
  } as React.CSSProperties,
  tooltipBox: {
    padding: "1rem",
    borderRadius: "0.8rem",
  },
};

function ColorPicker({ target }: ColorPickerProps) {
  const { background, updateBackground, foreground, updateForeground } = useContext(ColorContext);

  const isBackground = target === "background";
  const targetColor = isBackground ? background : foreground;

  const handlePickerChange = (color: RgbColor) => {
    // Uses the same color format as the text input
    const inputFormat = targetColor.inputFormat;
    const inputValue = getColorString(colord(color), inputFormat);

    // No error validation is needed if we use color picker
    const newState = { rgb: color, input: inputValue, inputFormat, validInput: true };
    isBackground ? updateBackground(newState) : updateForeground(newState);
  };

  const rgbPicker = <RgbPicker color={targetColor.rgb} onChange={(color) => handlePickerChange(color)} />;

  return (
    <Tooltip
      content={rgbPicker}
      trigger="click"
      placement="bottom"
      offset={[100, 5]}
      interactive={true}
      wrapperStyles={styles.buttonWrapper}
      tooltipBoxStyles={styles.tooltipBox}
      plugins={[hideOnEsc]}
      appendTo={() => document.getElementById(`picker-root-${target}`)!}
    >
      <PickerButton target={target} aria-label="Open color picker" />
    </Tooltip>
  );
}

export default ColorPicker;
