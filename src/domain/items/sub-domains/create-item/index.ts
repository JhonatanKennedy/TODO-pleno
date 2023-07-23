import { ItemObjectValueType } from "../../types/item";
import { ItemObjectValue } from "../../value-objects/item";

export class CreateItem {
  execute(item: ItemObjectValueType) {
    const valueObjectItem = new ItemObjectValue();
    return valueObjectItem.validateItemObject(item);
  }
}
