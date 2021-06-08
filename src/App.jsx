import { ContextProvider } from "./Context";
import GlobalStyles from "./styles/GlobalStyles";

export default function App() {
  return (
    <ContextProvider>
      <GlobalStyles />
      <h1>Hello World</h1>
    </ContextProvider>
  );
}
