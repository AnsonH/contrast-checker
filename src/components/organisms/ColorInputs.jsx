import styled from "styled-components";
import SwapButton from "../atoms/SwapButton";
import ColorInputField from "../molecules/ColorInputField";
import InputLabel from "../molecules/InputLabel";

const Container = styled.div`
  width: 100%;
  max-width: 35rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColorInputBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:last-child {
    margin-bottom: 3.5rem;
  }
`;

export default function ColorInputs() {
  return (
    <Container>
      <ColorInputBlock>
        <InputLabel title="Background" labelFor="background" tooltipText="Accepts HEX, RGB & HSL" />
        <ColorInputField target="background" />
      </ColorInputBlock>
      <SwapButton />
      <ColorInputBlock>
        <InputLabel title="Foreground" labelFor="foreground" tooltipText="Accepts HEX, RGB & HSL" />
        <ColorInputField target="foreground" />
      </ColorInputBlock>
    </Container>
  );
}
