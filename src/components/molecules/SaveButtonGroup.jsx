import { useContext } from "react";
import styled from "styled-components";
import { MdSave, MdDelete } from "react-icons/md";
import OutlineButton from "../atoms/OutlineButton";
import Context from "../../Context";

const ButtonGroup = styled.div`
  margin: 2.5rem 0 3.5rem;
  display: flex;
  gap: 1.5rem 2.5rem;
  flex-wrap: wrap;
`;

export default function SaveButtonGroup() {
  const { updateSavedColor, saveCurrentColor } = useContext(Context);

  const handleDeleteAll = () => {
    updateSavedColor([]);
  };

  return (
    <ButtonGroup>
      <OutlineButton
        color="var(--green)"
        hoverColor="var(--green-hover)"
        icon={<MdSave size={18} />}
        onClickEvent={saveCurrentColor}
      >
        Save Color
      </OutlineButton>
      <OutlineButton
        color="var(--light-red)"
        hoverColor="var(--light-red-hover)"
        icon={<MdDelete size={18} />}
        onClickEvent={handleDeleteAll}
      >
        Delete All
      </OutlineButton>
    </ButtonGroup>
  );
}
