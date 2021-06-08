import styled from "styled-components";
import { bp } from "../../styles/breakpoints";

const RootContainer = styled.div`
  width: 70%;
  min-height: 100vh;
  padding: 6rem 0;
  order: 2;
  background-color: var(--background);

  @media (max-width: ${bp.lg}) {
    min-height: auto;
    width: 100%;
    padding: 4.5rem 6vw;
    order: 1;
  }
`;

const InnerContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;

  @media (max-width: ${bp.lg}) {
    max-width: none;
    width: 100%;
  }
`;

export default function Preview() {
  return (
    <RootContainer>
      <InnerContainer></InnerContainer>
    </RootContainer>
  );
}
