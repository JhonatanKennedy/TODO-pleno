import { CustomInput, InputProps } from "../../../../components/CustomInput";
import { LoadingIcon } from "../../../../components/LoadingIcon";
import "./styles.scss";

export type HeaderStatementProps = {
  createInput: InputProps;
  title: string;
  loadingAdd: boolean;
};

export const HeaderStatement = (props: HeaderStatementProps) => {
  return (
    <div className="header-container">
      <h1>{props.title}</h1>
      <div className="input-box">
        <div className="width-input ">
          <CustomInput {...props.createInput} />
        </div>
        {props.loadingAdd ? <LoadingIcon /> : undefined}
      </div>
    </div>
  );
};
