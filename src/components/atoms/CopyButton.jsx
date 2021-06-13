import { useContext } from "react";
import { MdContentCopy } from "react-icons/md";
import styled from "styled-components";
import copyToClipboard from "copy-text-to-clipboard";
import PropTypes from "prop-types";
import Context from "../../Context";
import Tooltip from "./Tooltip";

const Button = styled.button`
  padding: 1rem;
  background: none;
  color: var(--gray);
  transition: 150ms color ease-out;

  &:hover,
  &:focus {
    color: var(--cyan);
  }
`;

const TooltipText = styled.p`
  font-size: 1.4rem;
`;

function CopyButton({ target }) {
  const colorInput = useContext(Context)[target].input;

  const handleClick = (event) => {
    copyToClipboard(colorInput);
    event.currentTarget.blur();
  };

  return (
    <Tooltip
      content={<TooltipText>Copied to clipboard</TooltipText>}
      trigger="click"
      offset={[-40, 14]}
      onShow={(instance) => setTimeout(() => instance.hide(), 2000)}
      hideOnClick={false}
      wrapperStyles={{ marginTop: "0.5rem", marginLeft: "auto" }}
    >
      <Button onClick={handleClick}>
        <MdContentCopy size={24} />
      </Button>
    </Tooltip>
  );
}

CopyButton.propTypes = {
  target: PropTypes.oneOf(["background", "foreground"]).isRequired,
};

export default CopyButton;
