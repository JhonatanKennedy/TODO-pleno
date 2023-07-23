import { ChangeEvent, KeyboardEvent } from "react";
import { CustomInput } from "../CustomInput";

type DescriptionType = {
  edit: boolean;
  done: boolean;
  description: string;
  onChange: (value: string) => void;
  onPressEnter: () => void;
};

export const Description = (props: DescriptionType) => {
  const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.onPressEnter();
    }
  };

  if (!props.edit) {
    const isDone = props.done ? "description-checked" : "description-unchecked";
    return <span className={isDone}>{props.description}</span>;
  }

  return (
    <CustomInput
      style={{ padding: 0 }}
      onChange={handleEdit}
      onKeyDown={handleKeyDown}
      value={props.description}
      autoFocus
    />
  );
};
