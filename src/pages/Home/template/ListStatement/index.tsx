import { TodoItem } from "../../../../components/TodoItem";
import { ItemEntityType } from "../../../../domain/items/types/item";
import "./styles.scss";

export type ListStatementProps = {
  doneTitle: string;
  undoneTitle: string;
  doneItems: ItemEntityType[];
  undoneItems: ItemEntityType[];
  onDelete: (item: ItemEntityType) => void;
  onEditDescription: (item: ItemEntityType, description: string) => void;
  onEditStatus: (item: ItemEntityType) => void;
};

export const ListStatement = (props: ListStatementProps) => {
  return (
    <div className="list-items">
      <div className="list-done">
        <h3>{props.doneTitle}</h3>
        {props.doneItems.map((item, index) => (
          <TodoItem
            key={`todo-item-list-${index}`}
            description={item.description}
            done={item.done}
            onDelete={() => props.onDelete(item)}
            toggleItem={() => props.onEditStatus(item)}
            onEdit={(description) => props.onEditDescription(item, description)}
          />
        ))}
      </div>
      <div className="list-undone">
        <h3>{props.undoneTitle}</h3>
        {props.undoneItems.map((item, index) => (
          <TodoItem
            key={`todo-item-list-${index}`}
            description={item.description}
            done={item.done}
            onDelete={() => props.onDelete(item)}
            toggleItem={() => props.onEditStatus(item)}
            onEdit={(description) => props.onEditDescription(item, description)}
          />
        ))}
      </div>
    </div>
  );
};
