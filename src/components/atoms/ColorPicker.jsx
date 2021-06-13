import { useContext } from "react";
import styled from "styled-components";
import { RgbColorPicker } from "react-colorful";
import { colord } from "colord";
import PropTypes from "prop-types";
import Tooltip from "./Tooltip";
import Context from "../../Context";
import { getColorString } from "../../utils/colorUtils";

const PickerButton = styled.button`
  width: 3rem;
  height: 3rem;
  background: ${(props) => (props.target === "background" ? "var(--background)" : "var(--foreground)")};
  border: 1px solid var(--gray);
  border-radius: 0.5rem;

  &:focus {
    border: 1px solid var(--cyan);
    outline: 1px solid var(--cyan);
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
  },
  tooltipBox: {
    padding: "1rem",
    borderRadius: "0.8rem",
  },
};

function ColorPicker({ target }) {
  const { background, updateBackground, foreground, updateForeground } = useContext(Context);

  const isBackground = target === "background";
  const targetColor = isBackground ? background : foreground;

  const handlePickerChange = (color) => {
    // Uses the same color format as the text input
    const inputFormat = targetColor.inputFormat;
    const inputValue = getColorString(colord(color), inputFormat);

    // No error validation is needed if we use color picker
    const newState = { rgb: color, input: inputValue, inputFormat, isInputValid: true };
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
    >
      <PickerButton target={target} aria-label="Open color picker" />
    </Tooltip>
  );
}

ColorPicker.propTypes = {
  target: PropTypes.oneOf(["background", "foreground"]).isRequired,
};

export default ColorPicker;
