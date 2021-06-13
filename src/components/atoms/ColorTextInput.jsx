import { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colord, getFormat } from "colord";
import Context from "../../Context";

const Input = styled.input`
  width: 85%;
  padding: 0.5rem 0.8rem 0.5rem 5.2rem;

  background: var(--black);
  border: 1px solid var(--gray);
  border-radius: 0.5rem;
  color: var(--white);
  font-family: var(--font-sans);
  font-size: 2.4rem;
  font-weight: 600;

  &:focus {
    outline: 1px solid var(--cyan);
    border: 1px solid var(--cyan);
  }
`;

function ColorTextInput({ target }) {
  const { background, updateBackground, foreground, updateForeground } = useContext(Context);

  const isBackground = target === "background";
  const color = isBackground ? background : foreground;

  const handleInputChange = (event) => {
    const input = event.target.value;
    const inputColor = colord(input);

    let rgb = inputColor.toRgb();
    let inputFormat = getFormat(input);
    let isInputValid = inputColor.isValid();

    // Use values from the original color state if input is invalid
    if (!isInputValid) {
      rgb = color.rgb;
      inputFormat = color.inputFormat;
    }

    const newState = { rgb, input, inputFormat, isInputValid };
    isBackground ? updateBackground(newState) : updateForeground(newState);
  };

  return <Input type="text" id={target} value={color.input} onChange={(event) => handleInputChange(event)} />;
}

ColorTextInput.propTypes = {
  target: PropTypes.oneOf(["background", "foreground"]).isRequired,
};

export default ColorTextInput;
