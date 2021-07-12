import styled from "styled-components";

const SkipLink = styled.a`
  padding: 1.5rem 2rem;
  position: absolute;
  left: -19rem;
  background-color: var(--cyan);
  border-radius: 0.5rem;
  color: var(--black);
  font-size: 1.6rem;
  font-weight: 600;
  z-index: 999;
  transition: transform 150ms ease;

  &:focus,
  &:active {
    transform: translateX(100%);
  }
`;

export default SkipLink;
