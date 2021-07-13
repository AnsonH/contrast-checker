import { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colord, getFormat } from "colord";
import ColorContext from "../../context/ColorContext";

const Input = styled.input`
  width: 85%;
  padding: 0.5rem 0.8rem 0.5rem 5.2rem;
  margin-right: 0.5rem;

  background: var(--black);
  border: none; // Use box-shadow for border instead
  box-shadow: 0 0 0 1px ${(props) => (props.valid ? "var(--gray)" : "var(--light-red)")};
  border-radius: 0.5rem;
  color: var(--white);
  font-family: var(--font-sans);
  font-size: 2.5rem;
  font-weight: 600;
  -webkit-appearance: none; // Fix iOS appearance bugs

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => (props.valid ? "var(--cyan)" : "var(--light-red)")};
  }
`;

const HelperText = styled.p`
  position: absolute;
  bottom: -2rem;
  color: var(--light-red);
  font-size: 1.4rem;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

function ColorTextInput({ target }) {
  const { background, updateBackground, foreground, updateForeground } = useContext(ColorContext);

  const isBackground = target === "background";
  const color = isBackground ? background : foreground;
  let validInput = color.validInput;

  const handleInputChange = (event) => {
    const input = event.target.value;
    const inputColor = colord(input);

    let rgb = inputColor.toRgb();
    let inputFormat = getFormat(input);
    validInput = inputColor.isValid();

    // Use values from the original color state if input is invalid
    if (!validInput) {
      rgb = color.rgb;
      inputFormat = color.inputFormat;
    }

    const newState = { rgb, input, inputFormat, validInput };
    isBackground ? updateBackground(newState) : updateForeground(newState);
  };

  return (
    <>
      <Input
        type="text"
        id={target}
        value={color.input}
        onChange={(event) => handleInputChange(event)}
        valid={validInput}
        spellCheck={false}
      />
      <HelperText visible={!validInput}>Invalid input</HelperText>
    </>
  );
}

ColorTextInput.propTypes = {
  target: PropTypes.oneOf(["background", "foreground"]).isRequired,
};

export default ColorTextInput;
