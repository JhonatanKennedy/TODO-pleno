import FetchAdapter from "../infra/FetchAdapter";
import { CreateItem } from "./sub-domains/create-item";
import { EditItem } from "./sub-domains/edit-item";
import { ListItem } from "./sub-domains/list-item";
import { RemoveItem } from "./sub-domains/remove-item";
import { ItemEntityType, ItemObjectValueType } from "./types/item";

export class MainItem {
  private todoItems: ItemEntityType[] = [];
  constructor(private readonly fetchAdapter = new FetchAdapter()) {}

  get allData() {
    return {
      items: this.todoItems,
    };
  }

  async listTodoItems() {
    const list = await this.fetchAdapter.get("http://localhost:3000/todoList");
    if (list) {
      const entityList = new ListItem();
      this.todoItems = entityList.execute(list);
    }
  }

  async createTODOItem(item: ItemObjectValueType) {
    const createItem = new CreateItem();
    const id = this.todoItems.length;
    if (createItem.execute(item)) {
      await this.fetchAdapter.post("http://localhost:3000/todoList", {
        id,
        ...item,
      });
    }
  }

  async editStatusItem(item: ItemEntityType, done: boolean) {
    const editItem = new EditItem();
    if (editItem.execute(item)) {
      await this.fetchAdapter.put("http://localhost:3000/todoList", {
        ...item,
        done,
      });
    }
  }

  async editDescriptionItem(item: ItemEntityType, description: string) {
    const editItem = new EditItem();
    if (editItem.execute(item)) {
      await this.fetchAdapter.put("http://localhost:3000/todoList", {
        ...item,
        description,
      });
    }
  }

  async removeTODOItem(id: string) {
    const removeItem = new RemoveItem();
    if (removeItem.execute(id)) {
      await this.fetchAdapter.delete(`http://localhost:3000/todoList/${id}`);
    }
  }
}
