import styled from "styled-components";
import PropTypes from "prop-types";
import ColorTextInput from "../atoms/ColorTextInput";
import ColorPicker from "../atoms/ColorPicker";
import CopyButton from "../atoms/CopyButton";

const Container = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

function ColorInputField({ target }) {
  return (
    <Container>
      <ColorTextInput target={target} />
      <ColorPicker target={target} />
      <CopyButton target={target} />
    </Container>
  );
}

ColorInputField.propTypes = {
  target: PropTypes.oneOf(["background", "foreground"]),
};

export default ColorInputField;
