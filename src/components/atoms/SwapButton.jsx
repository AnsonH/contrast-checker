import { useContext } from "react";
import styled from "styled-components";
import { MdSwapVert } from "react-icons/md";
import ColorContext from "../../context/ColorContext";
import Tooltip from "./Tooltip";

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none; // Use box-shadow for border instead
  box-shadow: 0 0 0 1px var(--white);
  border-radius: 2rem;
  color: var(--white);
  font-size: 0rem; // Bug fix: Arrow appear to small on mobile devices
  transition: 150ms ease;
  -webkit-appearance: none; // Fix iOS appearance bugs

  &:hover {
    background-color: var(--white-hover);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--cyan);
  }
`;

const tooltipWrapperStyles = {
  margin: "2.2rem 16% 2.2rem 0",
};

export default function SwapButton() {
  const { handleSwapColors } = useContext(ColorContext);

  return (
    <Tooltip
      content={<p>Swap colors</p>}
      trigger="mouseenter focusin"
      placement="right"
      offset={[0, 15]}
      touch={false}
      wrapperStyles={tooltipWrapperStyles}
    >
      <Button aria-label="Swap colors">
        <MdSwapVert size={28} onClick={handleSwapColors} />
      </Button>
    </Tooltip>
  );
}
