import styled from "styled-components";
import { bp } from "../../styles/breakpoints";

const Container = styled.div`
  width: 30%;
  min-height: 100vh;
  order: 1;
  padding: 5rem 4rem 3rem;
  background-color: var(--black);
  border-right: 1px solid var(--dark-gray);
  border-top: none;

  @media (max-width: ${bp.lg}) {
    min-height: auto;
    width: 100%;
    padding: 4.5rem 6vw 3rem;
    order: 2;
    border-right: none;
    border-top: 1px solid var(--dark-gray);
  }
`;

export default function ColorControl() {
  return <Container></Container>;
}
