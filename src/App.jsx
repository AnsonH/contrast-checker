import styled from "styled-components";
import { ColorContextProvider } from "./context/ColorContext";
import { SaveContextProvider } from "./context/SaveContext";
import ColorInputs from "./components/organisms/ColorInputs";
import SavedColors from "./components/organisms/SavedColors";
import PreviewContent from "./components/organisms/PreviewContent";
import Footer from "./components/molecules/Footer";
import GlobalStyles from "./styles/GlobalStyles";
import { bp } from "./styles/breakpoints";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;

  @media (max-width: ${bp.lg}) {
    flex-direction: column;
  }
`;

const ColorControlSection = styled.section`
  width: 30%;
  min-height: 100vh;
  order: 1;
  padding: 4rem 4rem 3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--black);
  border-right: 1px solid var(--dark-gray);
  border-top: none;
  overflow-y: auto; // Add scrollbar if overflows

  @media (max-width: ${bp.lg}) {
    min-height: auto;
    width: 100%;
    padding: 4.5rem 6vw 3rem;
    order: 2;
    border-right: none;
    border-top: 1px solid var(--dark-gray);
    overflow-y: visible;
  }
`;

const ColorControl = styled.div`
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;

  @media (max-width: ${bp.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: ${bp.md}) {
    flex-direction: column;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--dark-gray);

  @media (min-width: ${bp.md}) and (max-width: ${bp.lg}) {
    width: 1px;
    height: auto;
  }
`;

const PreviewSection = styled.section`
  width: 70%;
  min-height: 100vh;
  padding: 3.5rem;
  order: 2;
  background-color: var(--background);
  overflow-y: auto;

  @media (max-width: ${bp.lg}) {
    min-height: auto;
    width: 100%;
    padding: 3rem 6vw 4.5rem;
    order: 1;
    overflow-y: visible;
  }
`;

export default function App() {
  return (
    <ColorContextProvider>
      <GlobalStyles />
      <Container>
        <ColorControlSection>
          <ColorControl>
            <ColorInputs />
            <Divider />
            <SaveContextProvider>
              <SavedColors />
            </SaveContextProvider>
          </ColorControl>
          <Footer />
        </ColorControlSection>
        <PreviewSection>
          <PreviewContent />
        </PreviewSection>
      </Container>
    </ColorContextProvider>
  );
}
