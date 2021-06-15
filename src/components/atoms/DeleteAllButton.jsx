import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import OutlineButton from "../atoms/OutlineButton";
import SaveContext from "../../context/SaveContext";

export default function DeleteAllButton() {
  const { updateSavedColor } = useContext(SaveContext);

  const handleOnclick = () => {
    updateSavedColor([]);
  };

  return (
    <OutlineButton
      color="var(--light-red)"
      hoverColor="var(--light-red-hover)"
      icon={<MdDelete size={18} />}
      onClickEvent={handleOnclick}
    >
      Delete All
    </OutlineButton>
  );
}
