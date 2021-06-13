import styled from "styled-components";
import Tippy from "@tippyjs/react/headless";
import PropTypes from "prop-types";

const TooltipBox = styled.div`
  padding: 0.3rem 0.8rem;
  background-color: var(--darkest-gray);
  border-radius: 0.5rem;

  /* Style the location of the tooltip arrow */
  &[data-placement^="top"] > #arrow {
    bottom: -0.4rem;
  }

  &[data-placement^="bottom"] > #arrow {
    top: -0.4rem;
  }

  &[data-placement^="left"] > #arrow {
    right: -0.4rem;
  }

  &[data-placement^="right"] > #arrow {
    left: -0.4rem;
  }
`;

const Arrow = styled.div`
  &,
  &::before {
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    background: inherit;
  }

  & {
    visibility: hidden;
  }

  &::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
  }
`;

// `children` component needs to wrapped by a span
// https://github.com/atomiks/tippyjs-react#component-children
const ChildrenWrapper = styled.span`
  display: inline-block;
  height: max-content;
`;

// `children` - Component that triggers the tooltip
// `wrapperStyles` - Styles applied to the wrapper that holds the trigger element
function Tooltip({ children, content, wrapperStyles = {}, ...tippyProps }) {
  return (
    <Tippy
      render={(attrs) => (
        <TooltipBox {...attrs}>
          {content}
          <Arrow id="arrow" data-popper-arrow="" />
        </TooltipBox>
      )}
      {...tippyProps}
    >
      <ChildrenWrapper style={wrapperStyles}>{children}</ChildrenWrapper>
    </Tippy>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  wrapperStyles: PropTypes.object,
};

export default Tooltip;
