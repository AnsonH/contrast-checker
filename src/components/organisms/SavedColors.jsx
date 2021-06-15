import styled from "styled-components";
import SaveButtonGroup from "../molecules/SaveButtonGroup";
import ColorSwatch from "../molecules/ColorSwatch";
import { bp } from "../../styles/breakpoints";

const Container = styled.div`
  padding-top: 1rem;

  @media (min-width: ${bp.md}) and (max-width: ${bp.lg}) {
    padding-top: 0;
  }
`;

export default function SavedColors() {
  return (
    <Container>
      <h2>Saved Colors</h2>
      <SaveButtonGroup />
      <ColorSwatch />
    </Container>
  );
}
