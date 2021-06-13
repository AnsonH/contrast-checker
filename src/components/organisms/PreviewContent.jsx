import styled from "styled-components";
import { MdOpenInNew } from "react-icons/md";
import OutlineButton from "../atoms/OutlineButton";
import ContrastRatio from "../molecules/ContrastRatio";
import PreviewText from "../molecules/PreviewText";
import { bp } from "../../styles/breakpoints";

const Container = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${bp.lg}) {
    max-width: none;
    width: 100%;
  }
`;

const Results = styled.div`
  order: 2;
  margin-bottom: 5rem;
  padding: 2rem 5.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem 7rem;
  background-color: var(--black);
  border-radius: 1rem;

  @media (max-width: ${bp.lg}) {
    order: 3;
    margin-bottom: 0;
  }

  @media (max-width: ${bp.md}) {
    padding: 2rem;
    flex-direction: column;
  }
`;

const Preview = styled.div`
  width: 100%;
  order: 3;

  @media (max-width: ${bp.lg}) {
    order: 2;
  }
`;

const Links = styled.div`
  margin-bottom: 0;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem 2.5rem;

  @media (max-width: ${bp.lg}) {
    margin-bottom: 4.5rem;
  }
`;

export default function PreviewContent() {
  return (
    <Container>
      <h1>Color Contrast Checker</h1>
      <Results>
        <ContrastRatio />
      </Results>
      <Preview>
        <PreviewText largeText title="Large Text - 24px/18pt">
          Contrast ratio is a measure of the difference in perceived brightness between two colors. The higher the
          ratio, the better the contrast.
        </PreviewText>
        <PreviewText title="Normal Text - 16px">
          According to Web Content Accessibility Guidelines (WCAG) 2.0, text and images of text should have a minimum
          contrast ratio of 4.5:1 (Level AA), while large text should have minimum contrast ratio of 3:1. For enhanced
          contrast (Level AAA), normal text and large text should have minimum contrast ratio of 7:1 and 4.5:1
          respectively.
        </PreviewText>
        <Links>
          <OutlineButton
            anchor
            hrefLink="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html"
            color="var(--foreground)"
            icon={<MdOpenInNew size={18} />}
          >
            WCAG 2.0
          </OutlineButton>
          <OutlineButton
            anchor
            hrefLink="https://webaim.org/articles/contrast/"
            color="var(--foreground)"
            icon={<MdOpenInNew size={18} />}
          >
            WebAIM article
          </OutlineButton>
        </Links>
      </Preview>
    </Container>
  );
}
