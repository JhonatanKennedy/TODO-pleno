import { ItemObjectValueType } from "../items/types/item";
import FetchAdapter from "./fetchAdapter";
import HttpClientInterface from "./httpClientInterface";

export class HttpClient implements HttpClientInterface {
  constructor(
    private readonly adapterApi = new FetchAdapter("http://localhost:3000")
  ) {}

  async get(path: string) {
    const response = await this.adapterApi.getApi(path);
    return response;
  }

  async post(path: string, body: ItemObjectValueType) {
    const response = await this.adapterApi.postApi(path, body);
    return response;
  }

  async put(path: string, body: ItemObjectValueType) {
    const response = await this.adapterApi.putApi(path, body);
    return response;
  }

  async delete(path: string) {
    const response = await this.adapterApi.deleteApi(path);
    return response;
  }
}
