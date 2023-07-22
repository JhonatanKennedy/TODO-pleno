import { InputHTMLAttributes, ReactElement } from "react";
import "./styles.scss";

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  icon?: ReactElement;
  onClickIcon?: () => void;
};

export const InputAdd = ({ icon, onClickIcon, ...props }: InputProps) => {
  return (
    <div className="input-container">
      <input {...props} className="input-style" />
      <div className="input-container-border" />
      {icon && (
        <div className="icon-container">
          <div className="icon-container-box" onClick={onClickIcon}>
            {icon}
          </div>
        </div>
      )}
    </div>
  );
};
