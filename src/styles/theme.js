import { css } from "styled-components";

export const defaultColors = {
  background: "#172F36", // rgb(23, 47, 54) or hsl(194, 40%, 15%)
  foreground: "#FFFFFF", // rgb(255, 255, 255) or hsl(0, 0%, 100%)
};

const variables = css`
  :root {
    --background: ${defaultColors.background};
    --foreground: ${defaultColors.foreground};

    --black: #0c0e0f;
    --darkest-gray: #464646;
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
