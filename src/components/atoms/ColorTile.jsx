import styled from "styled-components";
import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";

const Container = styled.div`
  position: relative;
  width: max-content;
`;

const TileBtn = styled.button`
  width: 5.5rem;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.fg};
  border-radius: 0.5rem;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.fg};
  font-size: 2rem;
  font-weight: bold;

  &:focus {
    outline: 3px solid var(--cyan);
  }
`;

const DeleteBtn = styled.button`
  width: 2rem;
  height: 2rem;
  padding: 0;
  position: absolute;
  top: -1rem;
  right: -1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--red);
  border: 1px solid var(--white);
  border-radius: 1rem;
  color: var(--white);

  &:focus {
    outline: 3px solid var(--cyan);
  }
`;

function ColorTile({ background, foreground, handleLoad, handleDelete }) {
  return (
    <Container>
      <TileBtn
        bg={background}
        fg={foreground}
        onClick={handleLoad}
        aria-label={`Background ${background} with foreground ${foreground}`}
      >
        Aa
      </TileBtn>
      <DeleteBtn onClick={handleDelete} aria-label="Delete saved color">
        <MdClose size={12} />
      </DeleteBtn>
    </Container>
  );
}

ColorTile.propTypes = {
  background: PropTypes.string.isRequired,
  foreground: PropTypes.string.isRequired,
  handleLoad: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default ColorTile;
