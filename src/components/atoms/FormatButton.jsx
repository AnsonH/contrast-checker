import styled from "styled-components";
import { MdColorLens } from "react-icons/md";
import PropTypes from "prop-types";
import Tooltip from "./Tooltip";
import { useContext } from "react";
import ColorContext from "../../context/ColorContext";

const Button = styled.button`
  padding: 0.8rem;
  background: none;
  color: var(--gray);
  transition: 150ms color ease;

  &:hover,
  &:focus {
    color: var(--cyan);
  }
`;

function FormatButton({ target }) {
  const { handleChangeFormat } = useContext(ColorContext);

  return (
    <Tooltip content={<p>Change color format</p>} offset={[-40, 14]} trigger="mouseenter focusin">
      <Button onClick={() => handleChangeFormat(target)} aria-label="Change color format">
        <MdColorLens size={24} />
      </Button>
    </Tooltip>
  );
}

FormatButton.propTypes = {
  target: PropTypes.oneOf(["background", "foreground"]).isRequired,
};

export default FormatButton;
