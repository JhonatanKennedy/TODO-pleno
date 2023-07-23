import { ItemObjectValueType } from "../types/item";

export class ItemObjectValue {
  validateItemObject(item: ItemObjectValueType) {
    const { description, done } = item;

    if (!description || typeof description !== "string") return false;

    if (done === undefined || typeof done !== "boolean") return false;

    return true;
  }
}
