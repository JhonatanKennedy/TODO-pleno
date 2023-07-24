import { HeaderStatement, HeaderStatementProps } from "./HeaderStatement";
import { ListStatement, ListStatementProps } from "./ListStatement";
import "./styles.scss";

export type TemplateHomeProps = {
  headerStatement: HeaderStatementProps;
  listStatement: ListStatementProps;
};

export const TemplateHome = (props: TemplateHomeProps) => {
  return (
    <div className="home-container">
      <HeaderStatement {...props.headerStatement} />
      <ListStatement {...props.listStatement} />
    </div>
  );
};
