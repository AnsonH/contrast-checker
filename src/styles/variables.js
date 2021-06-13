import { css } from "styled-components";
import { defaultColors } from "./theme";

const variables = css`
  :root {
    --background: ${defaultColors.background};
    --foreground: ${defaultColors.foreground};

    --black: #0c0e0f;
    --darkest-gray: #505050;
    --dark-gray: #717171;
    --gray: #c3c3c3;
    --white: #ffffff;
    --white-hover: rgba(255, 255, 255, 0.2);
    --red: #ff0000;
    --light-red: #ff6e60;
    --light-red-hover: rgba(255, 110, 96, 0.2);
    --green: #67e900;
    --green-hover: rgba(103, 233, 0, 0.2);
    --cyan: #48c8ff;

    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
  }
`;

export default variables;
