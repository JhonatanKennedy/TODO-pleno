import { ItemEntity } from "../../entities/item/item";
import { ItemACLType, ItemEntityType } from "../../types/item";

export class ListItem {
  execute(todoList: ItemACLType[]): ItemEntityType[] {
    const itemEntity = new ItemEntity();

    const filteredList = todoList.filter((item) =>
      itemEntity.validateEntity(item)
    );

    const formattedList = filteredList.map((item) => {
      return itemEntity.createItem(item);
    });

    return formattedList as ItemEntityType[];
  }
}
