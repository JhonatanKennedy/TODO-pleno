import { TodoItem } from "../../../../components/TodoItem";
import { ItemEntityType } from "../../../../domain/items/types/item";
import { LoadingIcon } from "../../../../components/LoadingIcon";
import "./styles.scss";

export type ListStatementProps = {
  doneTitle: string;
  undoneTitle: string;
  doneItems: ItemEntityType[];
  undoneItems: ItemEntityType[];
  onDelete: (item: ItemEntityType) => void;
  onEditDescription: (item: ItemEntityType, description: string) => void;
  onEditStatus: (item: ItemEntityType) => void;
  loadingDone: boolean;
  loadingTodo: boolean;
};

export const ListStatement = (props: ListStatementProps) => {
  return (
    <div className="list-items">
      <div className="list-content">
        <h3>
          {props.doneTitle} {props.loadingDone ? <LoadingIcon /> : undefined}
        </h3>
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
      <div className="list-content">
        <h3>
          {props.undoneTitle}
          {props.loadingTodo ? <LoadingIcon /> : undefined}
        </h3>
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
