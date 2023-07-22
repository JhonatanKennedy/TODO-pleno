import { IconButton } from "../IconButton";
import { FaTrash } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { ImCheckmark } from "react-icons/im";
import "./styles.scss";

type ActionButtonsType = {
  edit: boolean;
  onClickEdit: () => void;
  onClickDelete: () => void;
  onConfirmEdit: () => void;
};

export const ActionButtons = (props: ActionButtonsType) => {
  return (
    <div className="action-container">
      {props.edit && (
        <IconButton
          onClick={props.onConfirmEdit}
          icon={<ImCheckmark color="#50fa7b" />}
        />
      )}
      {!props.edit && (
        <IconButton
          onClick={props.onClickEdit}
          icon={<MdModeEditOutline color="#bd93f9" />}
        />
      )}
      <IconButton
        onClick={props.onClickDelete}
        icon={<FaTrash color="#ff5555" />}
      />
    </div>
  );
};
