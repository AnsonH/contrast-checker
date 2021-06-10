import styled from "styled-components";
import { ContextProvider } from "./Context";
import SavedColors from "./components/organisms/SavedColors";
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

const Preview = styled.div`
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

const PreviewContent = styled.div`
  max-width: 75rem;
  margin: 0 auto;

  @media (max-width: ${bp.lg}) {
    max-width: none;
    width: 100%;
  }
`;

export default function App() {
  return (
    <ContextProvider>
      <GlobalStyles />
      <Container>
        <ColorControl>
          <SavedColors />
        </ColorControl>
        <Preview>
          <PreviewContent></PreviewContent>
        </Preview>
      </Container>
    </ContextProvider>
  );
}
