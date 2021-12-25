import styled from "styled-components";
import SaveButtonGroup from "../molecules/SaveButtonGroup";
import ColorSwatch from "../molecules/ColorSwatch";
import { bp } from "../../styles/breakpoints";

const Container = styled.div`
  width: 100%;
  max-width: 36rem;
  padding-top: 1rem;

  @media (min-width: 900px) and (max-width: ${bp.lg}) {
    padding-top: 0;
    max-width: 38rem;
  }

  @media (min-width: ${bp.md}) and (max-width: 900px) {
    padding-top: 0;
    padding-left: 2rem;
    max-width: 32rem;
  }
`;

export default function SavedColors() {
  return (
    <Container id="saved-colors">
      <h2>Saved Colors</h2>
      <SaveButtonGroup />
      <ColorSwatch />
    </Container>
  );
}
