import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  width: max-content;
  padding: ${(props) => (props.hasIcon ? "0.7rem 1.4rem 0.7rem 1.2rem" : "0.7rem 1.2rem")};
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: none;
  border: 1px solid ${(props) => props.color};
  border-radius: 0.5rem;
  color: ${(props) => props.color};
  font-weight: 600;
  font-size: 1.6rem;
  transition: 150ms ease-in-out;

  &:hover,
  &:focus {
    background-color: ${(props) => props.hoverColor};
  }
`;

function OutlineButton({ children, color, hoverColor, icon }) {
  return (
    <Button color={color} hoverColor={hoverColor} hasIcon={icon !== undefined}>
      {icon}
      <span>{children}</span>
    </Button>
  );
}

OutlineButton.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  icon: PropTypes.node,
};

OutlineButton.defaultProps = {
  color: "var(--white)",
  hoverColor: "var(--white-hover)",
};

export default OutlineButton;
