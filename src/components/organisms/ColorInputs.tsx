import styled from "styled-components";
import SwapButton from "../atoms/SwapButton";
import ColorInputField from "../molecules/ColorInputField";
import InputLabel from "../molecules/InputLabel";
import { bp } from "../../styles/breakpoints";

const Container = styled.div`
  width: 100%;
  max-width: 35rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${bp.md}) and (max-width: ${bp.lg}) {
    max-width: 32rem;
  }
`;

const ColorInputBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  &:last-child {
    margin-bottom: 3.5rem;

    @media (min-width: ${bp.md}) and (max-width: ${bp.lg}) {
      margin-bottom: 0;
    }
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
