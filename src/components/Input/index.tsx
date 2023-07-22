import { ChangeEvent, InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  setValue: (value: string) => void;
};

export const Input = (props: InputProps) => {
  const hanldleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setValue(e.target.value);
  };

  return (
    <div>
      <input value={props.value} onChange={hanldleChange} />
    </div>
  );
};
