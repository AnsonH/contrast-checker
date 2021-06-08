import { css } from "styled-components";
import { defaultColors } from "./theme";

const variables = css`
  :root {
    --background: ${defaultColors.background};
    --foreground: ${defaultColors.foreground};

    --black: #0c0e0f;
    --dark-gray: #717171;
    --gray: #c3c3c3;
    --white: #ffffff;
    --red: #ff0000;
    --light-red: #ff6e60;
    --green: #67e900;
    --cyan: #48c8ff;
  }
`;

export default variables;
