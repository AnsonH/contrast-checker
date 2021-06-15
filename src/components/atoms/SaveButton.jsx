import { useContext } from "react";
import { MdSave } from "react-icons/md";
import OutlineButton from "../atoms/OutlineButton";
import ColorContext from "../../context/ColorContext";
import SaveContext from "../../context/SaveContext";

export default function SaveButton() {
  const { savedColors, updateSavedColor } = useContext(SaveContext);
  const { background, foreground } = useContext(ColorContext);

  const handleOnclick = () => {
    const newSavedColors = [...savedColors, { background, foreground, time: Date.now() }];
    updateSavedColor(newSavedColors);
  };

  return (
    <OutlineButton
      color="var(--green)"
      hoverColor="var(--green-hover)"
      icon={<MdSave size={18} />}
      onClickEvent={handleOnclick}
    >
      Save Color
    </OutlineButton>
  );
}
