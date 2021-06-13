import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  width: max-content;
  padding: ${(props) => (props.hasIcon ? "0.7rem 1.4rem 0.7rem 1.2rem" : "0.7rem 1.2rem")};
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: none;
  border: 1px solid ${(props) => props.foreground};
  border-radius: 0.5rem;
  color: ${(props) => props.foreground};
  cursor: pointer;
  font-weight: 600;
  font-size: 1.6rem;
  text-decoration: none;
  transition: 150ms background-color ease-in-out;

  &:hover,
  &:focus {
    background-color: ${(props) => props.hoverColor};
  }
`;

function OutlineButton({ anchor, children, color, hoverColor, hrefLink, icon }) {
  // Additional props if we cast the button into an anchor tag
  const anchorProps = anchor
    ? {
        as: "a",
        href: hrefLink,
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  return (
    <Button {...anchorProps} foreground={color} hoverColor={hoverColor} hasIcon={icon !== undefined}>
      {icon}
      <span>{children}</span>
    </Button>
  );
}

OutlineButton.propTypes = {
  anchor: PropTypes.bool,
  children: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  hrefLink: PropTypes.string,
  icon: PropTypes.node,
};

OutlineButton.defaultProps = {
  anchor: false,
  color: "var(--white)",
};

export default OutlineButton;
