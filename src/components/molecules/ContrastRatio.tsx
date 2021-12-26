import styled from "styled-components";
import Ratio from "../atoms/Ratio";
import { bp } from "../../styles/breakpoints";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${bp.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

const Label = styled.p`
  margin-bottom: 1.5rem;
  margin-right: 0;
  color: var(--gray);
  font-size: 1.8rem;
  font-weight: 600;

  @media (max-width: ${bp.md}) {
    margin-bottom: 0;
    margin-right: 4.5rem;
    font-size: 1.6rem;
  }
`;

export default function ContrastRatio() {
  return (
    <Container>
      <Label>Contrast Ratio</Label>
      <Ratio />
    </Container>
  );
}
