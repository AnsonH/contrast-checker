import styled from "styled-components";
import InputLabel from "../molecules/InputLabel";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColorInputBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default function ColorInputs() {
  return (
    <Container>
      <ColorInputBlock>
        <InputLabel title="Background" labelFor="background" tooltipText="Accepts HEX, RGB & HSL" />
      </ColorInputBlock>
    </Container>
  );
}
