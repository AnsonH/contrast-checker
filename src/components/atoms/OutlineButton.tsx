import styled from "styled-components";

type OutlineButtonProps = {
  anchor?: boolean;
  children: string;
  color?: string;
  hoverColor?: string;
  hrefLink?: string;
  icon?: React.ReactNode;
  onClickEvent?: () => void;
};

const Button = styled.button<{ hasIcon: boolean; foreground: string; hoverColor?: string }>`
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
  transition: background-color 150ms ease;

  &:hover {
    ${(props) => `background-color: ${props.hoverColor}`};
  }

  &:focus {
    outline: 3px solid var(--cyan);
    ${(props) => `background-color: ${props.hoverColor}`};
  }
`;

function OutlineButton({
  anchor = false,
  children,
  color = "var(--white)",
  hoverColor,
  hrefLink,
  icon,
  onClickEvent,
}: OutlineButtonProps) {
  // Additional props if we cast the button into an anchor tag
  const anchorProps = anchor
    ? {
        href: hrefLink,
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  return (
    <Button
      {...anchorProps}
      as={anchor ? "a" : "button"}
      foreground={color}
      hoverColor={hoverColor}
      hasIcon={icon !== undefined}
      onClick={onClickEvent}
    >
      {icon}
      <span>{children}</span>
    </Button>
  );
}

export default OutlineButton;
