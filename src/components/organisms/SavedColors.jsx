import styled from "styled-components";
import { MdSave, MdDelete } from "react-icons/md";
import OutlineButton from "../atoms/OutlineButton";
import { bp } from "../../styles/breakpoints";

const Container = styled.div`
  padding-top: 1rem;

  @media (min-width: ${bp.md}) and (max-width: ${bp.lg}) {
    padding-top: 0;
  }
`;

const ButtonGroup = styled.div`
  margin: 2.5rem 0;
  display: flex;
  gap: 1.5rem 2.5rem;
  flex-wrap: wrap;
`;

export default function SavedColors() {
  return (
    <Container>
      <h2>Saved Colors</h2>
      <ButtonGroup>
        <OutlineButton color="var(--green)" hoverColor="var(--green-hover)" icon={<MdSave size={18} />}>
          Save Color
        </OutlineButton>
        <OutlineButton color="var(--light-red)" hoverColor="var(--light-red-hover)" icon={<MdDelete size={18} />}>
          Delete All
        </OutlineButton>
      </ButtonGroup>
    </Container>
  );
}
