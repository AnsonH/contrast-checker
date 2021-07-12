import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const FooterContainer = styled.footer`
  margin-top: auto;
  display: flex;
  align-items: center;
  color: var(--white);
`;

const GitHubLink = styled.a`
  color: var(--white);
  transition: 150ms ease;

  &:hover,
  &:focus {
    color: var(--cyan);
  }
`;

const Text = styled.p`
  padding-left: 3rem;
  margin-left: auto;
  color: var(--gray);
  font-size: 1.4rem;
`;

const TextLink = styled.a`
  position: relative;
  color: var(--cyan);

  // Animated underline effect on hover
  &::after {
    content: "";
    width: 100%;
    height: 0.1rem;
    position: absolute;
    bottom: 0.1rem;
    left: 0;
    right: 0;
    background-color: var(--cyan);
    transform: scaleX(0);
    transition: 150ms ease;
  }

  &:hover,
  &:focus {
    &::after {
      transform: scaleX(1);
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <GitHubLink
        title="View source on GitHub"
        href="https://github.com/AnsonH/contrast-checker"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={30} />
      </GitHubLink>
      <Text>
        Designed & Built by{" "}
        <TextLink href="https://www.ansonheung.me/" target="_blank" rel="noreferrer">
          Anson Heung
        </TextLink>
      </Text>
    </FooterContainer>
  );
}
