import { useContext } from "react";
import styled from "styled-components";
import ColorContext from "../../context/ColorContext";
import { bp } from "../../styles/breakpoints";
import { getContrast } from "../../utils/colorUtils";

const Container = styled.div`
  width: 9.5rem;
  position: relative;

  @media (max-width: ${bp.md}) {
    width: 9rem;
  }
`;

const Value = styled.p`
  display: inline-block;
  color: var(--white);
  font-size: 3.2rem;
  font-weight: 600;

  @media (max-width: ${bp.md}) {
    font-size: 3rem;
  }
`;

const OutOf = styled.p`
  position: absolute;
  bottom: 0.6rem;
  right: 0;
  display: inline-block;
  color: var(--gray);
  font-size: 1.4rem;
`;

export default function Ratio() {
  let { contrast } = useContext(ColorContext);
  contrast = (Math.round(contrast * 10) / 10).toFixed(1); // Round to 1 decimal place

  return (
    <Container>
      <Value>{contrast}</Value>
      <OutOf>/21</OutOf>
    </Container>
  );
}
