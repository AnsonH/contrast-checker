import styled from "styled-components";
import { ContextProvider } from "./Context";
import ColorControl from "./components/organisms/ColorControl";
import Preview from "./components/organisms/Preview";
import GlobalStyles from "./styles/GlobalStyles";
import { bp } from "./styles/breakpoints";

const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${bp.lg}) {
    flex-direction: column;
  }
`;

export default function App() {
  return (
    <ContextProvider>
      <GlobalStyles />
      <Container>
        <ColorControl />
        <Preview />
      </Container>
    </ContextProvider>
  );
}
