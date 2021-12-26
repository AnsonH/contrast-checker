import { MdContentCopy } from "react-icons/md";
import styled from "styled-components";
import copyToClipboard from "copy-text-to-clipboard";
import Tooltip from "./Tooltip";
import { Target } from "../../types/colors.types";

type CopyButtonProps = {
  target: Target;
};

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

function CopyButton({ target }: CopyButtonProps) {
  return (
    <Tooltip
      content={<p>Copied to clipboard</p>}
      trigger="click"
      offset={[-40, 14]}
      onShow={(instance) => {
        setTimeout(() => instance.hide(), 2000);
      }}
      hideOnClick={false}
    >
      <Button
        onClick={(event) => {
          const inputEl = document.getElementById(target)! as HTMLInputElement;
          const inputValue = inputEl.value;
          copyToClipboard(inputValue);
          event.currentTarget.blur();
        }}
        aria-label="Copy to clipboard"
      >
        <MdContentCopy size={24} />
      </Button>
    </Tooltip>
  );
}

export default CopyButton;
