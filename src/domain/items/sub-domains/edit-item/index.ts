import { ItemEntity } from "../../entities/item/item";
import { ItemEntityType } from "../../types/item";

export class EditItem {
  execute(item: ItemEntityType) {
    const valueObjectItem = new ItemEntity();
    return valueObjectItem.validateEntity(item);
  }
}
