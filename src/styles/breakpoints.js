import { css } from "styled-components";

export const bp = {
  sm: "479px",
  md: "767px",
  lg: "1079px",
};

export function maxWidth(width, cssCallback) {
  return css`
    @media screen and (max-width: ${width}px) {
      ${cssCallback}
    }
  `;
}
