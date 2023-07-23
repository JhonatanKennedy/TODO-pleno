import { useState } from "react";
import { Description } from "./Description";
import { IconStatus } from "./IconStatus";
import { ActionButtons } from "./ActionButtons";
import "./styles.scss";

export type TodoItemProps = {
  description: string;
  done: boolean;
  toggleItem: () => void;
  onDelete: () => void;
  onEdit: (value: string) => void;
};

export const TodoItem = (props: TodoItemProps) => {
  const [description, setDescription] = useState<string>(props.description);
  const [edit, setEdit] = useState<boolean>(false);

  const handleChange = (value: string) => {
    setDescription(value);
  };

  const handleToggleItem = () => {
    if (edit) return;
    props.toggleItem();
  };

  const handleEdit = () => {
    props.onEdit(description);
    setEdit(() => false);
  };

  return (
    <div className="card-container" onClick={handleToggleItem}>
      <div className="card-container-item">
        <IconStatus done={props.done} />
        <Description
          done={props.done}
          edit={edit}
          description={description}
          onChange={handleChange}
          onPressEnter={handleEdit}
        />
      </div>
      <ActionButtons
        edit={edit}
        onClickDelete={props.onDelete}
        onClickEdit={() => setEdit(!edit)}
        onConfirmEdit={handleEdit}
      />
    </div>
  );
};
