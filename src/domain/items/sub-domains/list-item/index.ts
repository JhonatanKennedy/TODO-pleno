import { ItemEntity } from "../../entities/item/item";
import { ItemACLType, ItemEntityType } from "../../types/item";

export class ListItem {
  private doneList(todoList: ItemACLType[]) {
    return todoList.filter((item) => item.done);
  }

  private undoneList(todoList: ItemACLType[]) {
    return todoList.filter((item) => !item.done);
  }

  execute(todoList: ItemACLType[]) {
    const itemEntity = new ItemEntity();

    const filteredList = todoList.filter((item) =>
      itemEntity.validateEntity(item)
    );

    const formattedList = filteredList.map((item) => {
      return itemEntity.createItem(item);
    }) as ItemEntityType[];

    return {
      doneList: this.doneList(formattedList),
      todoList: this.undoneList(formattedList),
    };
  }
}
