import { CustomInput, InputProps } from "../../../../components/CustomInput";
import "./styles.scss";

export type HeaderStatementProps = {
  createInput: InputProps;
  title: string;
};

export const HeaderStatement = (props: HeaderStatementProps) => {
  return (
    <div className="header-container">
      <h1>{props.title}</h1>
      <CustomInput {...props.createInput} />
    </div>
  );
};
