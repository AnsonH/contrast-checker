import styled from "styled-components";
import DeleteAllButton from "../atoms/DeleteAllButton";
import SaveButton from "../atoms/SaveButton";

const ButtonGroup = styled.div`
  margin: 2.5rem 0 3.5rem;
  display: flex;
  gap: 1.5rem 2.5rem;
  flex-wrap: wrap;
`;

function SaveButtonGroup() {
  return (
    <ButtonGroup>
      <SaveButton />
      <DeleteAllButton />
    </ButtonGroup>
  );
}

export default SaveButtonGroup;
