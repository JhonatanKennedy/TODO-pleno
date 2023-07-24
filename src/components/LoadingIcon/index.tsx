import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./styles.scss";

export const LoadingIcon = () => {
  return (
    <div className="loading-icon">
      <AiOutlineLoading3Quarters className="spin-icon" />
    </div>
  );
};
