import styled from "styled-components";
import { ContextProvider } from "./Context";
import ColorInputs from "./components/organisms/ColorInputs";
import SavedColors from "./components/organisms/SavedColors";
import PreviewContent from "./components/organisms/PreviewContent";
import GlobalStyles from "./styles/GlobalStyles";
import { bp } from "./styles/breakpoints";

const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${bp.lg}) {
    flex-direction: column;
  }
`;

const ColorControl = styled.div`
  width: 30%;
  min-height: 100vh;
  order: 1;
  padding: 4rem 4rem 3rem;
  display: flex;
  flex-direction: column;
  background-color: var(--black);
  border-right: 1px solid var(--dark-gray);
  border-top: none;

  @media (max-width: ${bp.lg}) {
    min-height: auto;
    width: 100%;
    padding: 4.5rem 6vw 3rem;
    order: 2;
    flex-direction: row;
    justify-content: space-between;
    border-right: none;
    border-top: 1px solid var(--dark-gray);
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

const PreviewArea = styled.div`
  width: 70%;
  min-height: 100vh;
  padding: 3.5rem;
  order: 2;
  background-color: var(--background);

  @media (max-width: ${bp.lg}) {
    min-height: auto;
    width: 100%;
    padding: 3rem 6vw 4.5rem;
    order: 1;
  }
`;

export default function App() {
  return (
    <ContextProvider>
      <GlobalStyles />
      <Container>
        <ColorControl>
          <ColorInputs />
          <Divider />
          <SavedColors />
        </ColorControl>
        <PreviewArea>
          <PreviewContent />
        </PreviewArea>
      </Container>
    </ContextProvider>
  );
}
