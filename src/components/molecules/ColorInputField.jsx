import styled from "styled-components";
import PropTypes from "prop-types";
import ColorTextInput from "../atoms/ColorTextInput";
import ColorPicker from "../atoms/ColorPicker";
import CopyButton from "../atoms/CopyButton";
import FormatButton from "../atoms/FormatButton";

const Container = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const ButtonGroup = styled.div`
  margin-top: 0.5rem;
  display: flex;
`;

function ColorInputField({ target }) {
  return (
    <Container>
      <ColorTextInput target={target} />
      <ColorPicker target={target} />
      <div id={`picker-root-${target}`} />
      <ButtonGroup>
        <FormatButton target={target} />
        <CopyButton target={target} />
      </ButtonGroup>
    </Container>
  );
}

ColorInputField.propTypes = {
  target: PropTypes.oneOf(["background", "foreground"]),
};

export default ColorInputField;
