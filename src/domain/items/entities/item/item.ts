import { ItemEntityType } from "../../types/item";

export class ItemEntity {
  validateEntity(item: ItemEntityType) {
    const { id, description, done } = item;

    if (!id || typeof id !== "string") return false;

    if (!description || typeof description !== "string") return false;

    if (done === undefined || typeof done !== "boolean") return false;

    return true;
  }

  createItem(item: ItemEntityType) {
    if (!this.validateEntity(item)) return;

    const { id, description, done } = item;

    return {
      id,
      description,
      done,
    };
  }
}
