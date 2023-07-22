import { InputHTMLAttributes, MouseEvent, useEffect, useRef } from "react";
import "./styles.scss";

type InputEditType = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "ref"
>;

export const InputEdit = (props: InputEditType) => {
  const onClickInput = (e: MouseEvent) => e.stopPropagation();

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <input
      {...props}
      ref={inputRef}
      onClick={onClickInput}
      className="input-styles"
    />
  );
};
