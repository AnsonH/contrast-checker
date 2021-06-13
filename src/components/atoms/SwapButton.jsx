import { useContext } from "react";
import styled from "styled-components";
import { MdSwapVert } from "react-icons/md";
import Context from "../../Context";
import Tooltip from "./Tooltip";

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid var(--white);
  border-radius: 2rem;
  color: var(--white);
  font-size: 0rem; // Bug fix: Arrow appear to small on mobile devices
  transition: 150ms ease-in-out;

  &:hover {
    background-color: var(--white-hover);
  }

  &:focus {
    border: 1px solid var(--cyan);
    outline: 1px solid var(--cyan);
  }
`;

const TooltipText = styled.p`
  font-size: 1.4rem;
`;

export default function SwapButton() {
  const { background, updateBackground, foreground, updateForeground } = useContext(Context);

  const handleSwap = () => {
    const oldBackground = background;
    updateBackground(foreground);
    updateForeground(oldBackground);
  };

  return (
    <Tooltip
      content={<TooltipText>Swap colors</TooltipText>}
      trigger="mouseover focusin"
      placement="right"
      offset={[0, 15]}
      touch={false}
      wrapperStyles={{ margin: "2.2rem 15% 2.2rem 0" }}
    >
      <Button aria-label="Swap colors">
        <MdSwapVert size={28} onClick={handleSwap} />
      </Button>
    </Tooltip>
  );
}
