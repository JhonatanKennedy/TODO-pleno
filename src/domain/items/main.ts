import FetchAdapter from "../infra/FetchAdapter";
import { CreateItem } from "./sub-domains/create-item";
import { EditItem } from "./sub-domains/edit-item";
import { ListItem } from "./sub-domains/list-item";
import { RemoveItem } from "./sub-domains/remove-item";
import { ItemEntityType, ItemObjectValueType } from "./types/item";

export class MainItem {
  private doneList: ItemEntityType[] = [];
  private undoneList: ItemEntityType[] = [];
  constructor(private readonly fetchAdapter = new FetchAdapter()) {}

  get allData() {
    return {
      doneList: this.doneList,
      undoneList: this.undoneList,
    };
  }

  async listTodoItems() {
    const list = await this.fetchAdapter.get("http://localhost:3000/todoList");
    if (list) {
      const entityList = new ListItem();
      const lists = entityList.execute(list);
      this.doneList = lists.doneList;
      this.undoneList = lists.undoneList;
    }
  }

  async createTODOItem(item: ItemObjectValueType) {
    const createItem = new CreateItem();
    if (createItem.execute(item)) {
      await this.fetchAdapter.post("http://localhost:3000/todoList", item);
    }
  }

  async editStatusItem(item: ItemEntityType, done: boolean) {
    const editItem = new EditItem();
    if (editItem.execute(item)) {
      await this.fetchAdapter.put(`http://localhost:3000/todoList/${item.id}`, {
        description: item.description,
        done,
      });
    }
  }

  async editDescriptionItem(item: ItemEntityType, description: string) {
    const editItem = new EditItem();
    if (editItem.execute(item)) {
      await this.fetchAdapter.put(`http://localhost:3000/todoList/${item.id}`, {
        done: item.done,
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
