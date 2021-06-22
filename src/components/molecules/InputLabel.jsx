import styled from "styled-components";
import PropTypes from "prop-types";
import { MdInfoOutline } from "react-icons/md";
import Tooltip from "../atoms/Tooltip";

const Container = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  color: var(--gray);
`;

const Label = styled.label`
  margin-right: 1.2rem;
  font-size: 1.8rem;
  font-weight: 600;
`;

const TooltipText = styled.p`
  font-size: 1.4rem;
`;

const InfoIcon = styled(MdInfoOutline)`
  transition: 150ms color ease;

  &:hover,
  &:focus {
    color: var(--cyan);
    outline: none;
  }
`;

const tooltipWrapperStyles = {
  height: "1.8rem",
};

function InputLabel({ labelFor, title, tooltipText }) {
  return (
    <Container>
      <Label htmlFor={labelFor}>{title}</Label>
      {tooltipText !== undefined ? (
        <Tooltip
          placement="right"
          content={<TooltipText>{tooltipText}</TooltipText>}
          wrapperStyles={tooltipWrapperStyles}
          trigger="mouseenter focusin"
        >
          <InfoIcon size={18} tabIndex="0" />
        </Tooltip>
      ) : null}
    </Container>
  );
}

InputLabel.propTypes = {
  labelFor: PropTypes.string,
  title: PropTypes.string.isRequired,
  tooltipText: PropTypes.string,
};

export default InputLabel;
