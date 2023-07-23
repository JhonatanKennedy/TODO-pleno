import { InputHTMLAttributes, MouseEvent, ReactElement } from "react";
import "./styles.scss";

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  icon?: ReactElement;
  onClickIcon?: () => void;
  hasBottomBorder?: boolean;
};

export const CustomInput = ({
  icon,
  onClickIcon,
  hasBottomBorder,
  ...props
}: InputProps) => {
  const onClickInput = (e: MouseEvent) => e.stopPropagation();
  const hasIconClass = icon ? "with-icon" : "without-icon";
  return (
    <div className="input-container">
      <input
        {...props}
        onClick={onClickInput}
        className={`input-style ${hasIconClass}`}
      />
      {hasBottomBorder && <div className="input-container-border" />}
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
