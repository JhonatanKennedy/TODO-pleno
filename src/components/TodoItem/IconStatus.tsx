import { ImRadioUnchecked, ImCheckmark } from "react-icons/im";
import "./styles.scss";

type IconStatusProps = {
  done: boolean;
};

export const IconStatus = (props: IconStatusProps) => {
  return (
    <div className="card-container-icon">
      {!props.done && <ImRadioUnchecked className="unchecked" />}
      {props.done && <ImCheckmark className="checked" />}
    </div>
  );
};
