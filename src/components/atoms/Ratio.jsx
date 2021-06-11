import { useContext } from "react";
import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
import styled from "styled-components";
import Context from "../../Context";
import { bp } from "../../styles/breakpoints";
extend([a11yPlugin]); // Uses the accessibility plugin from colord

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
  const { background, foreground } = useContext(Context);

  const backgroundColor = colord(background.rgb);
  const foregroundColor = colord(foreground.rgb);

  let contrast = backgroundColor.contrast(foregroundColor);
  contrast = (Math.round(contrast * 10) / 10).toFixed(1); // Round to 1 decimal place

  return (
    <Container>
      <Value>{contrast}</Value>
      <OutOf>/21</OutOf>
    </Container>
  );
}
