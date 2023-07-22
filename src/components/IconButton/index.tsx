import { MouseEvent, ReactElement } from "react";
import "./styles.scss";

type IconButtonType = {
  icon: ReactElement;
  onClick: () => void;
};

export const IconButton = (props: IconButtonType) => {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    props.onClick();
  };

  return (
    <button className="button-icon" onClick={handleClick}>
      {props.icon}
    </button>
  );
};
