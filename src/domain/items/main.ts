import { ItemRepository } from "./repository/itemRepository";
import { CreateItem } from "./sub-domains/create-item";
import { EditItem } from "./sub-domains/edit-item";
import { ListItem } from "./sub-domains/list-item";
import { RemoveItem } from "./sub-domains/remove-item";
import { ItemEntityType, ItemObjectValueType } from "./types/item";

export class MainItem {
  private doneList: ItemEntityType[] = [];
  private todoList: ItemEntityType[] = [];
  constructor(private readonly itemRepository = new ItemRepository()) {}

  get allData() {
    return {
      doneList: this.doneList,
      todoList: this.todoList,
    };
  }

  async listTodoItems() {
    const list = await this.itemRepository.list();
    if (list) {
      const entityList = new ListItem();
      const lists = entityList.execute(list);
      this.doneList = lists.doneList;
      this.todoList = lists.todoList;
    }
  }

  async createTODOItem(item: ItemObjectValueType) {
    const createItem = new CreateItem();
    if (createItem.execute(item)) {
      await this.itemRepository.create(item);
      await this.listTodoItems();
    }
  }

  async editStatusItem(item: ItemEntityType, done: boolean) {
    const editItem = new EditItem();
    if (editItem.execute(item)) {
      await this.itemRepository.update(
        {
          description: item.description,
          done,
        },
        item.id
      );
      await this.listTodoItems();
    }
  }

  async editDescriptionItem(item: ItemEntityType, description: string) {
    const editItem = new EditItem();
    if (editItem.execute(item)) {
      await this.itemRepository.update(
        {
          done: item.done,
          description,
        },
        item.id
      );
      await this.listTodoItems();
    }
  }

  async removeTODOItem(id: string) {
    const removeItem = new RemoveItem();
    if (removeItem.execute(id)) {
      await this.itemRepository.delete(id);
    }
    await this.listTodoItems();
  }
}
