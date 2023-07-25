import { AdapterClientInterface } from "./adapterInterface";

export default class FetchAdapter implements AdapterClientInterface {
  constructor(private readonly baseURL = "http://localhost:3000") {}

  async getApi(path: string) {
    const response = await fetch(this.baseURL + path);
    return response.json();
  }

  async postApi(path: string, body: unknown) {
    await fetch(this.baseURL + path, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  async putApi(path: string, body: unknown) {
    await fetch(this.baseURL + path, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  async deleteApi(path: string) {
    await fetch(this.baseURL + path, {
      method: "DELETE",
    });
  }
}
