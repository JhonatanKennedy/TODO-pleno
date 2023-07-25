import { AdapterClientInterface } from "./adapterInterface";

export default class FetchAdapter implements AdapterClientInterface {
  constructor(private readonly apiURL: string) {}

  async getApi(path: string) {
    const response = await fetch(this.apiURL + path);
    // console.log(response.json().then((a) => console.log(a)));
    return response.json();
  }

  async postApi(path: string, body: unknown) {
    await fetch(this.apiURL + path, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  async putApi(path: string, body: unknown) {
    await fetch(this.apiURL + path, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  async deleteApi(path: string) {
    await fetch(this.apiURL + path, {
      method: "DELETE",
    });
  }
}
