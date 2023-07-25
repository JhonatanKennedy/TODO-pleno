import { HttpClient } from "../../infra/httpClient";
import { ItemObjectValueType, ItemEntityType } from "../types/item";

export interface ItemRepositoryType {
  create(item: ItemObjectValueType): Promise<void>;
  update(item: ItemObjectValueType, itemID: string): Promise<void>;
  delete(itemID: string): Promise<void>;
  list(): Promise<ItemEntityType[]>;
}

export class ItemRepository implements ItemRepositoryType {
  constructor(private readonly httpClient = new HttpClient()) {}

  async list(): Promise<ItemEntityType[]> {
    try {
      const data = await this.httpClient.get("/todoList");
      return data;
    } catch (err) {
      throw new Error("ERROR ON ITEM REPOSITORY/LIST");
    }
  }

  async create(item: ItemObjectValueType): Promise<void> {
    try {
      await this.httpClient.post("/todoList", item);
    } catch (err) {
      throw new Error("ERROR ON ITEM REPOSITORY/CREATE");
    }
  }

  async update(item: ItemObjectValueType, itemID: string): Promise<void> {
    try {
      await this.httpClient.put(`/todoList/${itemID}`, item);
    } catch (err) {
      throw new Error("ERROR ON ITEM REPOSITORY/PUT");
    }
  }

  async delete(itemID: string): Promise<void> {
    try {
      await this.httpClient.delete(`/todoList/${itemID}`);
    } catch (err) {
      throw new Error("ERROR ON ITEM REPOSITORY/DELETE");
    }
  }
}
